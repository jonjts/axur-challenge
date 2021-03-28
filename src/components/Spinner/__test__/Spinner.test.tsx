import { matchSnapshotWithProviders, renderWithProviders } from '../../../helpers/testing';

import Spinner from '../index';

describe('NavBar', () => {
  test('match with snapshot', () => {
    matchSnapshotWithProviders(<Spinner />);
  });

  test('renders correctly', () => {
    renderWithProviders(<Spinner />);
  });
});
