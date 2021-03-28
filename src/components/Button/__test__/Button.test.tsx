import { matchSnapshotWithProviders, renderWithProviders } from '../../../helpers/testing';

import Button from '../index';

describe('Button', () => {
  test('match with snapshot', () => {
    matchSnapshotWithProviders(<Button />);
  });

  test('renders correctly', () => {
    renderWithProviders(<Button />);
  });

  test('renders correctly when link', () => {
    renderWithProviders(<Button isLink />);
  });

  test('renders correctly with children', () => {
    const result = renderWithProviders((
      <Button>
        <b data-testid='bold-text-id'>btn</b>
      </Button>
    ));
    expect(result.getByTestId('bold-text-id')).toBeInTheDocument();
  });
});
