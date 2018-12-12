import React from 'react'
import Enzyme,{shallow, mount, render} from 'enzyme'
import ItemForm from '../components/ItemForm'
import Adapter from 'enzyme-adapter-react-16'
import { ExpansionPanelActions } from '@material-ui/core';

Enzyme.configure({adapter: new Adapter()})

const testItemForm = {}

// testItemForm('ItemForm renders', (testItemForm)=>{
//     const ItemForm = shallow(<ItemForm ></ItemForm>)
//     expect(ItemForm)
// })


describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<ItemForm />).contains(<label>Name</label>)).toBe(true);
  });

});
