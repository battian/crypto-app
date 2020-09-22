import React from 'react';

import './styles.css';

interface Coin {
  id: string;
  symbol: string;
  image: string;
  market_cap: number;
  current_price: number;
  total_volume: number;
  price_change_percentage_24h: number;
}

interface CoinProps {
  coin: Coin;
}

const Coin: React.FC<CoinProps> = ({ coin }) => {
  return (
    <section className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={coin.image} alt={coin.id} />
          <h1>{coin.id}</h1>
          <p className="coin-symbol">{coin.symbol}</p>
        </div>

        <div className="coin-data">
          <p className="coin-price">{coin.current_price.toLocaleString()}</p>
          <p className="coin-volume">{coin.total_volume.toLocaleString()}</p>
          {coin.price_change_percentage_24h < 0 ? (
            <p className="coin-percent red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          )}
          <p className="coin-marketcap">
            Mkt Cap: ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Coin;
