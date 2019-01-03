import React from 'react';
import { shallow } from 'enzyme';
import Stars from '../client/src/components/Stars.jsx';
import { stars } from './testDummyData.js' ;

describe('Stars', () => {
  it('should be defined', () => {
    expect(Stars).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Stars name="Star test" stars={stars} />
    );
    expect(tree).toMatchSnapshot();
  })
})
