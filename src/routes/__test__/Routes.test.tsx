import { matchSnapshotWithProviders, renderWithProviders } from '../../helpers/testing';

import Routes from '../index';

describe('Routes', () => {
  test('match with snapshot', () => {
    matchSnapshotWithProviders(<Routes />);
  });

  test('renders correctly', () => {
    renderWithProviders(<Routes />);
  });
});
