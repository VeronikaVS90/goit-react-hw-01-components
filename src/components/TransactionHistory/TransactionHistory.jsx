import PropTypes from 'prop-types';
import { Table, TableHead, BodyRow } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <tbody>
  {items.map(({ id, type, amount, currency }) => (
    <BodyRow key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </BodyRow>
  ))}
</tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;