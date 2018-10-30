import React, {Component} from 'react';
import DialogComp from 'Package/Dailog';
import PlatformRedux from 'Package/CustomRedux';
import Http from 'Package/Http';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Chart from 'chart.js';
import './style.css';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.initialData = [
            {
                name: 'naieem',
                title: 'SF',
                details: 'hello world'
            },
            {
                name: 'Mahmud',
                title: 'SF',
                details: 'hello world Mahmud'
            },
            {
                name: 'Supto',
                title: 'SF',
                details: 'hello world Supto'
            }
        ];
        this.name = 'hello world';
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.updateStore = this.updateStore.bind(this);
        PlatformRedux.createStore(this.initialData);
    }

    componentDidMount() {
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        var getUrl = 'https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg&format=json&has_breeds=1&order=RANDOM&page=0&limit=25';
        var postUrl = 'http://localhost:4000';
        var headers = [
            {
                key: 'Content-Type',
                value: 'application/json'
            },
            {
                key: 'x-api-key',
                value: 'DEMO-API-KEY'
            }
        ];
        Http.get(getUrl, headers).subscribe((data) => {

        }, (error) => {

        });
        Http.post(postUrl, {name: 'hello', ulala: 'ulala'}, headers).subscribe((response) => {

        });
    }

    componentWillUnmount() {
        console.log('Dashboard has gone for duck');
    }

    handleClose = () => {
        this.setState({open: false});
        Http.get('https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg&format=json&has_breeds=1&order=RANDOM&page=0&limit=25').subscribe((data) => {

        }, (error) => {

        });
    }
    handleClickOpen = () => {
        this.setState({open: true});
    }
    updateStore = () => {

        PlatformRedux.dispatch(
            {
                type: 'Add',
                payload: {
                    name: 'Hukak kabab',
                    title: 'BG',
                    details: 'hello Hukka kabab'
                }
            }
        );
    }

    render() {
        return (
            <div>
                <h1>WellCome to Dashboard</h1>
                <Button variant="contained" size="small" color="primary" onClick={this.handleClickOpen}>Hukka</Button>
                {this.state.open && (
                    <DialogComp onCLose={this.handleClose}>
                        <DialogTitle id="alert-dialog-slide-title">changed</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Let Google help apps determine location. This means sending anonymous location data to
                                Google, even when no apps are running.{this.name}
                            </DialogContentText>
                            <form noValidate autoComplete="off">
                                <TextField
                                    id="standard-name"
                                    label="Name"
                                    margin="normal"
                                />
                                <TextField
                                    id="standard-uncontrolled"
                                    label="Uncontrolled"
                                    defaultValue="foo"
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="standard-required"
                                    label="Required"
                                    defaultValue="Hello World"
                                    margin="normal"
                                />
                            </form>
                        </DialogContent>
                    </DialogComp>
                )}
                <span onClick={this.updateStore}>Hukka HUa</span>
                <div className="chartContainer">
                    <canvas id="myChart"></canvas>
                </div>

            </div>
        );
    }
}
export default Dashboard;