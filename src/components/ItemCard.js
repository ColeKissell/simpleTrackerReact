import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ItemForm from './ItemForm'


const styles = theme => ({
card: {
    maxWidth: 400,
    
},
media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
},
actions: {
    display: 'flex',
},
expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
    marginRight: -8,
    },
},
expandOpen: {
    transform: 'rotate(180deg)',
}
});


class ItemCard extends React.Component {
    
state = { expanded: false };

handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
};

render() {
    const { classes } = this.props;

    return (
    <Card className={classes.card}>
        <CardHeader

        title={this.props.name}
        subheader={this.props._id}
        />

        <CardContent>
        <Typography component="p">
        {this.props.description}
        </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
        <IconButton
            className={classnames(classes.expand, {
            [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
        >
            <ExpandMoreIcon />
        </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <ItemForm
                my_id={this.state._id} 
                myName={this.state.name}
                myDescription={this.state.description}
            ></ItemForm>
        </CardContent>
        </Collapse>
    </Card>
    );
}
}

ItemCard.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemCard);
