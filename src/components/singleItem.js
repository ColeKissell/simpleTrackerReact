import React from 'react';
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
                description: ''
            }
    }
    
    async componentDidMount(){
        const myId = this.props._id
        const thing = await getThingsByID(myId)
        console.log(thing)
        this.setState({
            _id: this.props._id,
            name: thing.name,
            description: thing.description
        })
        console.log(this.state)
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
                    
                    <br/>
                    <ItemForm 
                        _id={this.props._id} 
                        name={this.state.name}
                        description={this.state.description}
                    ></ItemForm>
                        <br/>
                    
                    <hr/>

                </span>
            </div>
        )
    }

}


