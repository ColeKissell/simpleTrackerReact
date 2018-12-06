import React, { Fragment } from 'react';
import ItemForm from './ItemForm';
import { getThingsByID }from '../store/ApiCalls'
// this component displayed all of details of the item in the database.
// it will need to recieve data from another component 
export default class SingleItem extends React.Component {
    constructor(props){
        super(props)
            this.state={
                _id: this.props._id,
                name: '',
                description: '',
                edit: false
            }
    }
    
    async componentDidMount(){
        const myId = this.props._id
        const thing = await getThingsByID(myId)
        this.setState({
            _id: this.props._id,
            name: thing.name,
            description: thing.description
        })
    }

    editClick=(e)=>{
        e.preventDefault();
        this.setState({edit: !this.state.edit})
    }
    
    render() {
        return (
            <div>
                <span>
                    {this.props._id}
                    <br/>
                    {this.state.name}
                    <br/>
                    {this.state.description}
                    <br/>
                        <button onClick={this.editClick}>Edit</button>
                        {this.state.edit ?
                            <ItemForm 
                            my_id={this.state._id} 
                            myName={this.state.name}
                            myDescription={this.state.description}
                        ></ItemForm> : 
                        <Fragment></Fragment>
                        }

                    <hr/>

                </span>
            </div>
        )
    }

}


