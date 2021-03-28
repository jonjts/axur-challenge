import { matchSnapshotWithProviders, renderWithProviders } from '../../../helpers/testing';

import Card from '../index';

describe('Card', () => {
  test('match with snapshot', () => {
    matchSnapshotWithProviders(<Card />);
  });

  test('renders correctly', () => {
    renderWithProviders(<Card />);
  });

  test('renders correctly with buttons', () => {
    renderWithProviders(<Card showBackButton showSubmitButton/>);
  });

  test('renders correctly with children', () => {
    const result = renderWithProviders((
      <Card>
        <div data-testid='div-id'>element</div>
      </Card>
    ));
    expect(result.getByTestId('div-id')).toBeInTheDocument();
  });
});
