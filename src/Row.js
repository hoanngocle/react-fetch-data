import Cell from "./Cell";


const Row = ({item}) => {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return (
          <Cell key={key} cellData={JSON.stringify(value)}></Cell>
        )
      })}
    </tr>
  );
};

export default Row;
