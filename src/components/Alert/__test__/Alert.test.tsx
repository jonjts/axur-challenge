import { matchSnapshotWithProviders, renderWithProviders } from '../../../helpers/testing';

import Alert from '../index';

describe('Alert', () => {
  test('match with snapshot', () => {
    matchSnapshotWithProviders(<Alert />);
  });

  test('renders correctly', () => {
    renderWithProviders(<Alert />);
  });
});
