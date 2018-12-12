import React, { Fragment } from 'react';
import ItemForm from './ItemForm';
import { getThingsByID } from '../store/ApiCalls'
import ItemCard from './ItemCard'



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
            description: thing.description,
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
                    <ItemCard
                        _id= {this.props._id}
                        name = {this.state.name}
                        description = {this.state.description}
                    ></ItemCard>

                        <button onClick={this.editClick}>Edit</button>
                        {this.state.edit ?
                            <ItemForm 
                                my_id={this.state._id} 
                                myName={this.state.name}
                                myDescription={this.state.description}
                            ></ItemForm> : 
                            <Fragment></Fragment>
                        }
                </span>
            </div>
        )
    }

}


