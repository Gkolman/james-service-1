import 'jsdom-global/register';
import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { configure, mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from '../src/components/App.jsx';

configure({ adapter: new Adapter() });

describe('App Tests', () => {
  it(`should create object`, () => {
    const wrapper = mount(<App/>);
    expect(App.prototype).to.not.be.null;
  });
});