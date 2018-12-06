// this component needs a constructor that will
// give it the ability to either have preloaded data
// or a blank form. when submitted it needs 
// to either put or post the data to the api
import React from 'react'
import { newItem, updateItem, deleteItem }from '../store/ApiCalls'



export default class ItemForm extends React.Component {
    constructor(props){
        super(props)
        if(props){
            this.state={
                _id: this.props._id,
                name: this.props.name,
                description: this.props.description
            }
        }else {
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
        event.preventDefault();
        console.log(this.props._id)
        if(this.props._id !== undefined){
            this.updateThing(this.state)
        }else{
            this.submitNew()
        }
    }

    submitNew=()=>{
        const newThing = newItem(this.state)
        console.log(newThing)
        return newItem 
    }

    updateThing=()=>{
        const newThing = updateItem(this.state)
        console.log(newThing)
        return newItem 
    }
    removeItem=(event)=>{
        event.preventDefault();
        console.log(this.state._id)
        const id= this.state._id
        
        const remove = deleteItem(id)
        console.log(remove)
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                {this.state._id}
                <label>Name</label>
                <input  
                    defaultValue={this.state.name} 
                    onChange={this.updateName}
                />
                {this.state.name}
                <br/>
                <label>Description</label>
                <input 
                    defaultValue={this.state.description} 
                    onChange={this.updateDescription}  
                />
                {this.state.description}
                <br/>
                <button type="submit">Done Editing</button>
                <button onClick={this.removeItem}>Delete</button>
            </form>
        )
    }

}

