// this component needs a constructor that will
// give it the ability to either have preloaded data
// or a blank form. when submitted it needs 
// to either put or post the data to the api
import React, {Fragment} from 'react'
import { newItem, updateItem, deleteItem }from '../store/ApiCalls'
import Button from '@material-ui/core/Button';

import AlertDialog from '../store/Alert'
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
            message: `result: ${newMessage}`
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        if(this.props.my_id){
            this.updateThing(this.state)
        }else{
            this.submitNew(this.state)
        }
    }

    submitNew=async()=>{
        const newThing = await newItem(this.state)
        this.updateMessage('item created')
        
    }

    updateThing=async()=>{
        const newThing = await updateItem(this.state)
        this.updateMessage('item updated')
    }
    removeItem=(event)=>{
        event.preventDefault();
        const id= this.state._id;
        const remove = deleteItem(id)
        this.updateMessage('item removed')
        return  remove
    }


    render(){
        return(
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    {this.state._id}
                    <br/>
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
                    {this.state.description}
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

