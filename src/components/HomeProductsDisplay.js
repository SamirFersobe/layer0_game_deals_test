import {useState,useEffect} from 'react'
import './HomeProductsDisplay.css';
import FeatureBox from './FeatureBox';

// takes in the upper price limit and react hook for setting it 
function gameTitles(upperPrice,setOffers){
    const promise = fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=${upperPrice}`)
    .then(response =>response.json())
    .then(results =>generateResults(results,setOffers))
    
}

function generateResults(results,setOffers){
    let countOffers = Object.keys(results).length;
    if(countOffers < 21){
        setOffers(results);
    }
    else{
        setOffers(results.slice(0,21))
    }
    
    
}


export default function HomeProductsDisplay() {
//dummy data for starting
let initialOffer = [
    {
        internalName: "LOSTORBITTERMINALVELOCITY",
        title: "LOST ORBIT: Terminal Velocity",
        dealID: "OsKa%2Bh8jGrTvdlGT4mJfR3RuCEnDRHHavu2aUf77Rxw%3D",
        gameID: "203244",
        salePrice: "0.99",
        steamAppID: "372320",
        dealRating: "9.1",
        thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/372320/capsule_sm_120.jpg?t=1563995743"
    },
    {
        internalName: "LOSTORBITTERMINALVELOCITY",
        title: "LOST ORBIT: Terminal Velocity",
        dealID: "OsKa%2Bh8jGrTvdlGT4mJfR3RuCEnDRHHavu2aUf77Rxw%3D",
        gameID: "203244",
        salePrice: "0.99",
        steamAppID: "372320",
        dealRating: "9.1",
        thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/372320/capsule_sm_120.jpg?t=1563995743"
    },
    {
        internalName: "LOSTORBITTERMINALVELOCITY",
        title: "LOST ORBIT: Terminal Velocity",
        dealID: "OsKa%2Bh8jGrTvdlGT4mJfR3RuCEnDRHHavu2aUf77Rxw%3D",
        gameID: "203244",
        salePrice: "0.99",
        steamAppID: "372320",
        dealRating: "9.1",
        thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/372320/capsule_sm_120.jpg?t=1563995743"
    },
    {
        internalName: "LOSTORBITTERMINALVELOCITY",
        title: "LOST ORBIT: Terminal Velocity",
        dealID: "OsKa%2Bh8jGrTvdlGT4mJfR3RuCEnDRHHavu2aUf77Rxw%3D",
        gameID: "203244",
        salePrice: "0.99",
        steamAppID: "372320",
        dealRating: "9.1",
        thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/372320/capsule_sm_120.jpg?t=1563995743"
    },
    {
        internalName: "LOSTORBITTERMINALVELOCITY",
        title: "LOST ORBIT: Terminal Velocity",
        dealID: "OsKa%2Bh8jGrTvdlGT4mJfR3RuCEnDRHHavu2aUf77Rxw%3D",
        gameID: "203244",
        salePrice: "0.99",
        steamAppID: "372320",
        dealRating: "9.1",
        thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/372320/capsule_sm_120.jpg?t=1563995743"
    },

]
const [offers,setOffers] = useState(initialOffer);

gameTitles(15,setOffers)
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
