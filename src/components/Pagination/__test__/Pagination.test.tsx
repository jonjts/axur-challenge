import { matchSnapshotWithProviders, renderWithProviders } from '../../../helpers/testing';

import Pagination from '../index';

const items = [
  'https://axur.com',
  'https://axur.com',
  'https://axur.com',
  'https://axur.com',
  'https://axur.com'
];

const getTotalPages = (itemsPerPage: number) => {
  if (items.length) {
    const total = items.length / itemsPerPage;
    return (total >= 0 && total <= 1) ? 1 : total.toFixed();
  }
  return 1;
};

describe('Button', () => {
  test('match with snapshot', () => {
    matchSnapshotWithProviders(<Pagination
      items={items}
      itemsPerPage={1}
      onItemClicked={() => { }}
    />);
  });

  test('renders correctly', () => {
    const result = renderWithProviders(<Pagination
      items={items}
      itemsPerPage={1}
      onItemClicked={() => { }}
    />);
    expect(result.getByTestId(`1-${getTotalPages(1)}`)).toBeInTheDocument();
  });
});
