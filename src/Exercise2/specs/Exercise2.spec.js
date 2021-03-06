import React from 'react';
import {shallow} from 'enzyme';
import Exercise2 from '../Exercise2';

describe('Exercise2', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Exercise2/>);
    instance = component.instance();
  });
  
  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({});
    });

    it('should walk the array in spiral', () => {
      const array = instance.generateArray();

      expect(instance.generateWalk(array)).toEqual('1-2-3-4-8-12-16-15-14-13-9-5-6-7-11-10');
    });
  });
});
