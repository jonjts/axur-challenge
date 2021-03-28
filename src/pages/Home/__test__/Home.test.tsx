import { matchSnapshotWithProviders, renderWithProviders } from '../../../helpers/testing';

import Home from '../index';

describe('Home', () => {
  test('match with snapshot', () => {
    matchSnapshotWithProviders(<Home />);
  });

  test('renders correctly', () => {
    renderWithProviders(<Home />);
  });
});
