import React from 'react';
import { shallow} from 'enzyme';
import App from '../client/src/components/App.jsx';
import { reviews, stars } from './testDummyData.js';

describe('App', () => {
    it('should be defined', () => {
      expect(App).toBeDefined();
    });
    it('should render correctly', () => {
      const tree = shallow(
        <App name='App test' reviews={reviews} stars={stars[0]}/>
      );
      expect(tree).toMatchSnapshot();
    });
   });