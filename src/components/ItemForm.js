// this component needs a constructor that will
// give it the ability to either have preloaded data
// or a blank form. when submitted it needs 
// to either put or post the data to the api
import React, {Fragment} from 'react'
import { newItem, updateItem, deleteItem }from '../store/ApiCalls'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AlertDialog from '../store/Alert'


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });
  




export default class ItemForm extends React.Component {
    

    constructor(props){
        super(props)


        if(this.props.my_id !== undefined){
            this.state={
                _id: this.props.my_id,
                name: this.props.myName,
                description: this.props.myDescription,
                displaymessage: false,
                message: ''
            }
        }else{
            this.state={
                _id: '',
                name: '',
                description: '',
                displaymessage: false,
                message: ''
            }
        }
    }
    updateName=(event)=>{
        this.setState({name: event.target.value});
    }
    updateDescription=(event)=>{
        this.setState({description: event.target.value});
    }

    updateMessage = (newMessage) => {
        this.setState({
            displaymessage: true,
            message: `${newMessage}`
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        if(this.props.my_id){
            this.updateThing(this.state)
        }else{
            this.submitNew(this.state)
        }
        this.setState({
            _id: '',
            name: '',
            description: '',
        })
    }

    submitNew=async()=>{
        const newThing = await newItem(this.state)
        this.updateMessage('item created')
        this.setState({
            _id: '',
            name: '',
            description: '',
        })
        
    }

    updateThing=async()=>{
        const newThing = await updateItem(this.state)
        this.updateMessage('item updated')
        this.setState({
            _id: '',
            name: '',
            description: '',
        })
    }
    removeItem=(event)=>{
        event.preventDefault();
        const id= this.state._id;
        const remove = deleteItem(id)
        this.updateMessage('item removed')
        this.setState({
            _id: '',
            name: '',
            description: '',
        })
    }


    render(){
        const { classes } = this.props;
        return(
            <Fragment>
                {this.state._id}



                <form onSubmit={this.handleSubmit}>
                    
                    {/* <br/>
                    <label>Name</label>
                    <input  
                        defaultValue={this.props.myName} 
                        onChange={this.updateName}
                    />
                    {this.state.name}
                    <br/>
                    <label>Description</label>
                    <input 
                        defaultValue={this.props.myDescription} 
                        onChange={this.updateDescription}
                    />
                    <p>
                    {this.state.description}
                    </p> */}
                                    <TextField
                    required
                    label="Name"
                    // className={classes.textField}
                    defaultValue={this.state.name}
                    margin="normal"
                    onChange={this.updateName}
                    helperText="enter the name"
                    placeholder="Name"
                    fullWidth
                />
                <Typography>
                    {this.state.name}
                </Typography>
                <TextField
                    required
                    label="Description"
                    // className={classes.textField}
                    defaultValue={this.state.description}
                    margin="normal"
                    onChange={this.updateDescription}
                    helperText="enter the description"
                    placeholder="Description"
                    multiline
                    rowsMax="8"
                    fullWidth
                />
                <Typography>
                    {this.state.description}
                </Typography>

                    <br/>
                    <Button variant='contained' color='primary' type="submit">Done Editing</Button>
                    <Button variant='contained' color='secondary' onClick={this.removeItem}>Delete</Button>
                </form>
                    {this.state.displaymessage ? 
                        <span>
                            <AlertDialog message={this.state.message} open={this.state.displaymessage}></AlertDialog>
                        </span>: null}
                    
            </Fragment>

        )
    }

}


ItemForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

