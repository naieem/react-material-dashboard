import React, {Component} from 'react';
import DialogComp from 'Package/Dailog';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.name = 'hello world';
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose = () => {
        this.setState({open: false});
    }
    handleClickOpen = () => {
        this.setState({open: true});
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
            </div>
        );
    }
}
export default Dashboard;