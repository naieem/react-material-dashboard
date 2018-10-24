import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
const PORT = process.env.PORT || 3006;
const app = express();
import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
    MuiThemeProvider,
    createMuiTheme,
    createGenerateClassName,
} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
const copydir = require('copy-dir');
import App from './src/App';
import {StaticRouter} from "react-router";

/* ----------  renaming html files name --------------- */
fs.rename('./bundle/index.html', './bundle/main.html', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
});

/* ----------------- copying assets directory ----------------- */
// copydir('./src/assets', './bundle/src/assets', function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('asset folder copying done');
//     }
// });
app.use(express.static("./bundle"));
app.get('/*', (req, res) => {
    const context = {};
    // material ui ssr configuration starts
    const sheetsRegistry = new SheetsRegistry();
    const sheetsManager = new Map();
    const theme = createMuiTheme({
        palette: {
            primary: blue,
            accent: red,
            type: 'light',
        },
    });
    const generateClassName = createGenerateClassName();
    const app = ReactDOMServer.renderToString(
        <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </MuiThemeProvider>
        </JssProvider>
    );
    const css = sheetsRegistry.toString();
    // material ui ssr configuration ends
    fs.readFile('./bundle/main.html', 'utf8', (err, data) => {
        if (err) throw err;
        const updatedHtml = data.replace('<div id="app"></div>', `<div id="app">${app}</div><style id="jss-server-side">${css}</style>`);
        res.write(updatedHtml);
        res.end();
    });
});


app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
});