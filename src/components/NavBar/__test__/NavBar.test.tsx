import { matchSnapshotWithProviders, renderWithProviders } from '../../../helpers/testing';

import NavBar from '../index';

describe('NavBar', () => {
  test('match with snapshot', () => {
    matchSnapshotWithProviders(<NavBar />);
  });

  test('renders correctly', () => {
    renderWithProviders(<NavBar />);
  });
});
