import {useState,useEffect} from 'react'
import './HomeProductsDisplay.css';
import FeatureBox from './FeatureBox';

// takes in the upper price limit and react hook for setting it 
function gameTitles(upperPrice,setOffers){
    const promise = fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=2&upperPrice=${upperPrice}`)
    .then(response =>response.json())
    .then(results =>generateResults(results,setOffers))
    
}

function generateResults(results,setOffers){
    let countOffers = Object.keys(results).length;
    if(countOffers < 30){
        setOffers(results);
    }
    else{
        setOffers(results.slice(0,30))
    }
    
    
}


export default function ProductsDisplay(props) {

initialOffer = {}
const [offers,setOffers] = useState(initialOffer);

gameTitles(props.value,setOffers)
    return (
        <div　className = "feature">
            <div className = "feature-text">
                人気にある商品
            </div>
            <div className = "feature-container">
                {offers.map((offer) => ( <FeatureBox {...offer} />))}
            
            </div>
            <div className ="clearboth"></div>
        </div>
        
    )
}
