import {useEffect, useState} from 'react';
import FormData from "./FormData";
import List from "./List";
import Table from "./Table";


function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [items, setItems] = useState([]);
  const [reqType, setReqType] = useState('users');
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    }
    
    fetchItems();
    
  }, [reqType]);
  
  return (
    <div className="App">
      <FormData reqType={reqType} setReqType={setReqType}/>
      {/*<List items={items}/>*/}
      <Table items={items}/>
    </div>
  );
}

export default App;
