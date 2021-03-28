import { matchSnapshotWithProviders, renderWithProviders } from '../../../helpers/testing';

import Inspections from '../index';

describe('Inspections', () => {
  test('match with snapshot', () => {
    matchSnapshotWithProviders(<Inspections />);
  });

  test('renders correctly', () => {
    renderWithProviders(<Inspections />);
  });
});
