import { matchSnapshotWithProviders, renderWithProviders } from '../../../../helpers/testing';

import New from '../index';

describe('New Inspection', () => {
  test('match with snapshot', () => {
    matchSnapshotWithProviders(<New />);
  });

  test('renders correctly', () => {
    renderWithProviders(<New />);
  });
});
