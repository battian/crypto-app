import React, { useEffect, useState } from 'react';
import Coin from './components/Coin';
import api from './services/api';
import './App.css';

interface ICoin {
  id: string;
  symbol: string;
  image: string;
  market_cap: number;
  current_price: number;
  total_volume: number;
  price_change_percentage_24h: number;
}

function App() {
  const [coins, setCoints] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api
      .get(
        'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      )
      .then((response) => {
        setCoints(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearchCoin = (e: any) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin: ICoin) => {
    return coin.id.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main className="crypto-app">
      <section className="crypto-search">
        <h1 className="crypto-title">Search a currency</h1>

        <form>
          <input
            value={search}
            type="text"
            placeholder="Search"
            className="crypto-input"
            onChange={handleSearchCoin}
          />
        </form>

        {filteredCoins.map((item) => (
          <Coin coin={item} />
        ))}
      </section>
    </main>
  );
}

export default App;
