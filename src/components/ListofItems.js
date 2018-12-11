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
import CircularIndeterminate from './loadingCircle'
// import AutoGrid from './Layout'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import { GridListTileBar } from '@material-ui/core';
// import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';



const styles = theme => ({
    root: {
        flexGrow: 1,
        
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
      },
    paper: {
        padding: theme.spacing.unit * 2,
        height: '100%',
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.primary,
        marginBottom: theme.spacing.unit,
        },
    gridItem: {
        spacing: 8,
    }
});
  

class ListofItems extends React.Component {
    constructor(props){
        super(props)
        this.state={
            thingsId: [],
            loaded: false,
            names: [],
            search: ''
        }
    }
    async componentDidMount(){
        const items = await fetch('https://nowhapi-t1e1gfktt.now.sh/item')
                    .then((response)=> {return response.json();})
                    .then((myJson)=> {return myJson}).catch(err =>console.log(err))
            if(items){
                const ids = this.mapItemsId(items)
                this.setState({thingsId: ids,
                loaded: true})
            }
    }
    mapItemsId(data){
        const result = data.map((datum)=>{const wanted = datum._id; return wanted})
        return result
    }
    mapNames(data){
        const result = data.map((datum)=>{const wanted = datum.name; return wanted})
        return result
    }
    getAllThings=async()=>{
        const items = await getThings();
        const data = this.mapItemsId(items);
        this.setState({thingsId: data})
    }
    getAllNames=async ()=>{
        const allNames = await getThings();
        const data = this.mapNames(allNames)
        this.setState({names: data})
    }
    search = () => {

    }

    render(){
        const { classes } = this.props;
        return(
            <div>
                
                
                {/* <Grid container justify="center" spacing={8} className={classes.container}> */}
                        <button onClick={this.getAllThings}>get stuff</button>
                        <Grid container justify="center" spacing={16}>
                        {this.state.thingsId.map((thingId, i )=>{
                            return <Grid key={i} item>
                                { this.state.loaded ?
                                            <Paper className={classes.paper}>
                                                <SingleItem
                                                    _id={this.state.thingsId[i]} 
                                                ></SingleItem>
                                            </Paper>
                                : <CircularIndeterminate></CircularIndeterminate>}
                                
                            </Grid>
                        })}
                        </Grid>
                    <Paper>
                        <Typography variant='h6'>New Item</Typography>
                    <ItemForm></ItemForm>
                    </Paper>
                
            </div>
        )
    }


}
ListofItems.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(ListofItems); 