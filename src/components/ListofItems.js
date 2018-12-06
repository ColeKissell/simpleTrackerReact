// this component will call the single item component 
// it needs the data from th api
// it will loop over the aray of data from the api 
// and use the single item component to display each item
// this component will push data to the single item component
// needs to have a button to get to the edit/create form

import React from 'react';
import {getThings} from '../store/ApiCalls';
import SingleItem from './singleItem';
import ItemForm from './ItemForm'


class ListofItems extends React.Component {
    constructor(props){
        super(props)
        this.state={
            thingsId: []
        }
        
    }
    async componentDidMount(){
        const items = await fetch('https://hapiapi-nwwwdcogfv.now.sh/item')
        .then((response)=> {
            return response.json();
        })
        .then((myJson)=> {
            return myJson
        });

        const ids = this.mapItemsId(items)
        this.setState({thingsId: ids})
    }
    mapItemsId(data){
        const result = data.map((datum)=>{const wanted = datum._id; return wanted})
        return result
    }
    getAllThings=async()=>{
        const items = await getThings();
        const data = this.mapItemsId(items);
        this.setState({thingsId: data})
    }

    render(){
        return(
            <div>
                <button onClick={this.getAllThings}>get stuff</button>
                
                <ul>
                    {this.state.thingsId.map((thingId, i )=>{
                        return <li key={i}>
                            <SingleItem 
                                _id={this.state.thingsId[i]} 
                            ></SingleItem>
                        </li>
                    })}
                </ul>
                <ItemForm></ItemForm>
            </div>
        )
    }


}

export default ListofItems 