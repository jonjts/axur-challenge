import { matchSnapshotWithProviders, renderWithProviders } from '../../../../helpers/testing';

import Show from '../index';

describe('Show Inspection', () => {
  test('match with snapshot', () => {
    matchSnapshotWithProviders(<Show />);
  });

  test('renders correctly', () => {
    renderWithProviders(<Show />);
  });
});
