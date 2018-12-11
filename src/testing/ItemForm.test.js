import React from 'react'
import Enzyme,{shallow} from 'enzyme'
import ItemForm from '../components/ItemForm'
import Adapter from 'enzyme-adapter-react-16'
import { ExpansionPanelActions } from '@material-ui/core';

Enzyme.configure({adapter: new Adapter()})

const testItemForm = {}

testItemForm('ItemForm renders', ()=>{
    const ItemForm = shallow(<ItemForm ></ItemForm>)
    expect(ItemForm)
})

