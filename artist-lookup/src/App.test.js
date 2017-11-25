import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe ('Test suite for the app component', () => {
	it('only one element in App class', () => {
		const wrapper = shallow(<App/>);
		expect(wrapper.find('.App')).length(1);
	});

});