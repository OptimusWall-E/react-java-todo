function TodoRowItem() {

  const rowNumber = 1;
  const rowDescription = 'Type up notes';
  const rowAssigned = 'Eric';

  return (
    <tr>
     <th scope='row'>{rowNumber}</th>
      <td>{rowDescription}</td>
      <td>{rowAssigned}</td>
    </tr>
  )
}

export default TodoRowItem