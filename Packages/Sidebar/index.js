import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import {withRouter} from "react-router-dom";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import compose from 'recompose/compose';
import styles from './style';
import routes from '../../src/routes';
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.changeRoute = this.changeRoute.bind(this);
    }
    changeRoute = (url)=> {
        this.props.history.push(url);
    };
    render() {
        const {classes} = this.props;

        return (
            <div>
                <CssBaseline />
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <div className={classes.toolbar}/>
                    <Divider />
                    <List>
                        {routes.map((route, index) => (
                            <ListItem button key={route.Title} onClick={()=>{this.changeRoute(route.Url)}}>
                                {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                                <ListItemText primary={route.Title}/>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </div>
        );
    }
}
Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default compose(withStyles(styles))(withRouter(Sidebar));