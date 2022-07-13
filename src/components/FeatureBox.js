import './FeatureBox.css'
import React from 'react'


function openOffer(e,link){
    e.preventDefault();
    console.log('You clicked submit.');

}

export default function FeatureBox(offer) {
    let dealLink = `https://www.cheapshark.com/redirect?dealID=${offer.dealID}`
    return (
        <div className="feature-box shadow">
            <img src= {offer.thumb}></img>
                <div className="feature-box-model">
                    {offer.title}
                </div>
                <div className="feature-box-price">
                    
                    ${offer.salePrice}
                </div>
                <center>
                <a id ={offer.id}  href={dealLink} target="_blank" >
               go to deal
                </a>
                </center>
                
                {/*  */}
        </div>
    )
}
// href={`https://www.cheapshark.com/redirect?dealID=${offer.dealID}