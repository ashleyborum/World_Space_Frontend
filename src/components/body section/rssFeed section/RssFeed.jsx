import React from "react";
import './rssFeed.css';

const RssFeed = ({ image, title, date, link }) => {
    return (
        <div className="rssFeedSection">
            <div className="article_container" >
                <div className="link">
                    <img className="image" src={image}></img>
                    <span className="date">{date}</span>
                    <h3 className="title" >{title} 
                        <a href ={link} target = "_blank" rel= "noopener noreferrer"></a>
                    </h3>
                </div>
            </div>
        </div>  
    )
}

export default RssFeed;