import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    close: {
        padding: theme.spacing.unit / 2,
    },
});

class MySnackbar extends React.Component {
    
    state = {
        mymessage: '',
        open: false
    };

    componentDidMount(){
        this.setState({
            mymessage: this.props.message,
            open: this.props.open
        })
    }

    handleClick = () => {
        this.setState({ open: true });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
        <div>
            <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={this.state.open}
            autoHideDuration={6000}
            onClose={this.handleClose}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{this.state.mymessage}</span>}
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={this.handleClose}
                >
                <CloseIcon />
                </IconButton>,
            ]}
            />
        </div>
        );
    }
}

MySnackbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MySnackbar);