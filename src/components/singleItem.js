import React from 'react';
import ItemForm from './ItemForm';
import { deleteItem }from '../store/ApiCalls'
// this component displayed all of details of the item in the database.
// it will need to recieve data from another component 
export default class SingleItem extends React.Component {
    constructor(props){
        super(props)

             if(props){
            this.state={
                _id: this.props._id,
                name: this.props.name,
                description: this.props.description
            }
        }else {
          console.log('error')
        }
    }
    
    removeItem=(event)=>{
        event.preventDefault();
        console.log(this.state._id)
        const id= this.state._id
        
        const remove = deleteItem(id)
        console.log(remove)
    }
    
    render() {
        return (
            <div>
                <span>
                    {this.props._id}
                    <br/>
                    {this.props.name}
                    <br/>
                    {this.props.description}
                    <br/>
                    
                    <br/>
                    <ItemForm 
                        _id={this.props._id} 
                        name={this.props.name}
                        description={this.props.description}
                    ></ItemForm>
                        <br/>
                        <button onClick={this.removeItem}>Delete</button>
                    <hr/>

                </span>
            </div>
        )
    }

}


