import React from 'react'
import './Coin.css'

const Coin = ({name,image ,symbol,price,volume,marketcap,priceChange}) => {
  let store= 0;
    if(price>100000){
       price=price/100000; 
       price=price.toLocaleString()+'L';
    }
    if(volume>1000000000){
       store=volume/1000000000;
        volume=store.toLocaleString()+'B';
        if(store>1000){
            store/=1000;
            volume=store.toLocaleString()+'T';
            
        }

    }
    if(marketcap>1000000000){
        store=marketcap/1000000000;
         marketcap=store.toLocaleString()+'B';
         if(store>1000){
             store/=1000;
             marketcap=store.toLocaleString()+'T';
             
         }
 
     }
    
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} className="image" alt={name}></img>
                    <div className="coin-name">{name}</div>
                    <div className='coin-symbol'>{symbol} </div>
                    

                </div>
                <div className="coin-data">
                    <div className="coin-price">{price}₹</div>
                    <div className="coin-volume">Volume&nbsp;:{volume}</div>
                    <div className="coin-marketCap">MktCap&nbsp;:{marketcap}</div>
                    {priceChange < 0 ? (
            <p className='coin-percent red'>In Loss ({priceChange.toFixed(2)})% from 24hrs</p>
          ) : (
            <p className='coin-percent green'>In Profit ({priceChange.toFixed(2)})% from 24 hrs</p>
          )}
          </div>
            </div>
        </div>
    )
}

export default Coin
