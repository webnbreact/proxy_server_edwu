import React from 'react';
import { shallow} from 'enzyme';
import PageBar from '../client/src/components/PageBar.jsx';
import { reviews } from './testDummyData.js';

describe('PageBar', () => {
    it('should be defined', () => {
      expect(PageBar).toBeDefined();
    });
    it('should render correctly', () => {
      const tree = shallow(
        <PageBar name='PageBar test' reviews={reviews} />
      );
      expect(tree).toMatchSnapshot();
    });
   });