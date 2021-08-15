import {useEffect, useState} from 'react';
import './App.css';
import TableCoins from './components/TableCoins'
import axios from 'axios'

function App() {
  
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('');
  
  const getData =  async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1');
    console.log(res)
    setCoins(res.data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="container">   
      <input type="text" placeholder="Search a Coin" className="form-control" onChange={(e) => setSearch(e.target.value)} value={search} />  
      <TableCoins coins={coins} search={search} />
    </div>
  );
}

export default App;
