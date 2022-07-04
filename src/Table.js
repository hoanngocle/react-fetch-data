import Row from "./Row";


const Table = ({items}) => {
  return (
    <div className="table-container">
      <table>
        <tbody>
        {items.map(item => (
          <Row key={item.id} item={item}></Row>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
