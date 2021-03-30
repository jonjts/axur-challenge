import { matchSnapshotWithProviders, renderWithProviders } from '../../../helpers/testing';

import Button from '../index';

describe('Button', () => {
  test('match with snapshot', () => {
    matchSnapshotWithProviders(<Button />);
  });

  test('renders correctly', () => {
    const result = renderWithProviders(<Button />);
    expect(result.getByTestId('btn')).toBeInTheDocument();
  });

  test('renders correctly when link', () => {
    const result = renderWithProviders(<Button isLink />);
    expect(result.getByTestId('btn-link')).toBeInTheDocument();
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
