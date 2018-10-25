import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class DialogComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.isOpen
        }

        this.defaultContainer =
            <div>
                <DialogTitle id="alert-dialog-slide-title">
                    ulala
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
            </div>;
        this.handleClose = this.handleClose.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
    }

    handleClose = () => {
        this.props.onCLose();
    }
    handleClickOpen = () => {
        this.setState({open: true});
    };

    render() {
        return (
            <div>
                <Dialog
                    open={true}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    {this.props.children ? (
                        this.props.children
                    ) : (
                        this.defaultContainer
                    )}
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
DialogComp.propTypes = {
    onClose:PropTypes.func
}
export default DialogComp;