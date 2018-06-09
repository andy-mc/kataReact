import React from 'react';
import {shallow} from 'enzyme';
import Exercise3 from '../Exercise3';

describe('Exercise3', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Exercise3/>);
    instance = component.instance();
  });
  
  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({});
    });

    it('should walk the array in spiral', () => {
      const array = instance.generateArray();
      
      expect(instance.generateWalk(array)).toEqual('1-2-3-4-5-6-12-18-17-16-15-14-13-7-8-9-10-11');
    });
  });
});
