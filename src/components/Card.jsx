import React from "react";

function Card({ coverImg, stats, location, title, price, openSpots }) {
    let badgeText;
    if (openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--img" src={`./${coverImg}`} />
            <div className="card--stats">
                <img className="card--star" src="/star.png" />
                <span>{stats.rating}</span>
                <span className="text__gray">
                    ({stats.reviewCount}) • &nbsp;
                </span>
                <span className="text__gray">{location}</span>
            </div>
            <p className="card--title">{title}</p>
            <p className="card--price">
                <span className="text__bold">From ${price}</span> / person
            </p>
        </div>
    );
}

export default Card;
