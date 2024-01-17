/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.

import App from '../App';

it('renders correctly', () => {
  renderer.create(<App />);
});
