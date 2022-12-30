import React from "react";
import Card from "./Card";
import cardsData from "../data";

function Cards() {
    return (
        <section className="cards-list">
            {cardsData.map((item) => (
                <Card key={item.id} {...item} />
            ))}
        </section>
    );
}

export default Cards;
