import React from 'react';
import PercentChange from './PercentChange';

const TableLine = ({ coin, index }) => {
    const priceFormater = (num) => {
        if (Math.round(num).toString().length < 4) {
            return new Intl.NumberFormat("us-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 7
            }).format(num)
        } else {
            return num
        }
    }
    const billionFormater = (num) => {
        let newNum = (num / 1000000000).toFixed(2)
        return newNum
    }
    const millionFormater = (num) => {
        let newNum = (num / 1000000).toFixed(2)
        return newNum
    }
    return (
        <div className="table-line">
            <div className="infos-container">
                <span>*</span>
                <p>{index + 1}</p>
                <div className="img">
                    <img src={coin.image} height="20" alt="logo" />
                </div>
                <div className="infos">
                    <div className="chart-img">
                        <img src="./assets/chart-icon.svg" alt="chart-icon" />
                    </div>
                    <h4>{coin.name}</h4>
                    <span>- {coin.symbol.toUpperCase()}</span>
                    <a
                        target="_blank"
                        href={"https://www.coingecko.com/fr/pi%C3%A8ces/" + coin.name
                            .toLowerCase().replace(" ", "-").replace(" ", "-").replace(" ", "-").replace(" ", "-")
                        }
                    >
                        <img src="./assets/info-icon.svg" alt="info-icon" />
                    </a>
                </div>
            </div>
            <p>{priceFormater(coin.current_price).toLocaleString()}</p>
            <p className="mktcap">{billionFormater(coin.market_cap)} Md$</p>
            <p className="volume">{millionFormater(coin.total_volume)} M$</p>
            <PercentChange percent={coin.price_change_percentage_1h_in_currency} />
            <PercentChange percent={coin.price_change_percentage_24h_in_currency} />
            <PercentChange percent={coin.price_change_percentage_30d_in_currency} />
            <PercentChange percent={coin.price_change_percentage_200d_in_currency} />
            <PercentChange percent={coin.price_change_percentage_1y_in_currency} />
            {coin.ath_change_percentage > -5 ? (
                <p> ATH !</p>
            ) : (
                <PercentChange percent={coin.ath_change_percentage} />
            )}
        </div >
    );
};

export default TableLine;