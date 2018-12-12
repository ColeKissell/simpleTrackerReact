import React from 'react';
import ItemForm from './ItemForm';
import { getThingsByID } from '../store/ApiCalls'
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



class SingleItem extends React.Component {
    constructor(props){
        super(props)
            this.state={
                _id: this.props._id,
                name: '',
                description: '',
                expanded: false
            }
            
    }
    
    async componentDidMount(){
        const myId = this.props._id
        const thing = await getThingsByID(myId)
        this.setState({
            _id: this.props._id,
            name: thing.name,
            description: thing.description,
        })
    }

    editClick=(e)=>{
        e.preventDefault();
        this.setState({edit: !this.state.edit})
    }
    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };
    render() {
        const { classes } = this.props;

        return (
            <div>
                <span>
                    <Card className={classes.card}>
                        <CardHeader
                            title={this.state.name}
                            subheader={this.state._id}
                        />
                        <CardContent>
                            <Typography component="p">
                            {this.state.description}
                            </Typography>
                            </CardContent>
                            <CardActions className={classes.actions} >
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
                </span>
            </div>
        )
    }

}
SingleItem.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(SingleItem);