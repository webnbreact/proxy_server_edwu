import React from 'react';
import { shallow} from 'enzyme';
import Reviews from '../client/src/components/Reviews.jsx';
import { reviews, stars } from './testDummyData.js';

describe('Reviews', () => {
    it('should be defined', () => {
      expect(Reviews).toBeDefined();
    });
    it('should render correctly', () => {
      const tree = shallow(
        <Reviews name='Reviews test' visibleReviews={reviews} stars={stars[0]}/>
      );
      expect(tree).toMatchSnapshot();
    });
   });