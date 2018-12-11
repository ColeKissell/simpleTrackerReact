// this component needs a constructor that will
// give it the ability to either have preloaded data
// or a blank form. when submitted it needs 
// to either put or post the data to the api
import React from 'react'
import { newItem, updateItem, deleteItem }from '../store/ApiCalls'
import Button from '@material-ui/core/Button';


export default class ItemForm extends React.Component {
    constructor(props){
        super(props)
        if(this.props._id !== undefined){
            this.state={
                _id: this.props.my_id,
                name: this.props.myName,
                description: this.props.myDescription
            }
        }else{
            this.state={
                _id: '',
                name: '',
                description: ''
            }
        }
    }

    updateName=(event)=>{
        this.setState({name: event.target.value});
    }
    updateDescription=(event)=>{
        this.setState({description: event.target.value});
    }

    handleSubmit=(event)=>{
        console.log(this.props._id)   
        event.preventDefault();
        if(this.props.my_id){
            this.updateThing(this.state)
        }else{
            this.submitNew(this.state)
        }
    }

    submitNew=()=>{
        const newThing = newItem(this.state)
        return newThing 
    }

    updateThing=()=>{
        const newThing = updateItem(this.state)
        return newThing
    }
    removeItem=(event)=>{
        event.preventDefault();
        const id= this.state._id;
        const remove = deleteItem(id)
        return remove
    }


    render(){
        return(
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
        )
    }

}

