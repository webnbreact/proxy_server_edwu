import React from 'react';
import { shallow} from 'enzyme';
import Review from '../client/src/components/Review.jsx';
import { reviews, stars } from './testDummyData.js';

describe('Review', () => {
    it('should be defined', () => {
      expect(Review).toBeDefined();
    });
    it('should render correctly', () => {
      const tree = shallow(
        <Review name='Review test' review={reviews} />
      );
      expect(tree).toMatchSnapshot();
    });
   });