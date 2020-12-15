// import { render, screen } from '@testing-library/react';
import {App} from './App';

import {shallow} from 'enzyme'

import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe('App',()=>{



  test('renders learn react link', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug())
    // expect(wrapper.).toBe(1)
    // console.log('output of expect',expect(wrapper.contains(<div />)))
  });
})

