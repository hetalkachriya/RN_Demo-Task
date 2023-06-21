import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../app/screens/HomeScreen';

// Mock any required dependencies or data here

jest.mock('../app/data', () => ({
  pageContentOne: {
    page: {
      title: 'Page 1',
      'content-items': {
        content: [
          {
            name: 'Movie 1',
            'poster-image': 'image-url-1',
          },
          // Add more movie objects if necessary
        ],
      },
    },
  },
}));

describe('HomeScreen', () => {
  test('renders the component', () => {
    render(<HomeScreen />);
    // Add assertions to check if the component renders correctly
  });
});
