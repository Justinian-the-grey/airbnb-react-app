import React from 'react';
import './Card.css';
import star from '../../assets/images/star.png';

function Card(props) {
  const cards = props.data;

  return (
    <section className="card-section">
      {cards.map((card) => {
        let badge = (card.openSpots === 0 && card.location === "Online") ? "SOLD OUT" : "ONLINE"

        if(card.location !== "Online" && card.openSpots !== 0) badge = undefined
        
        return (
          <div key={card.id} className="card-container">
            {badge && <div className="card-badge">{badge}</div>}
            <img
              className="card-image"
              src={card.coverImg}
              alt="katerina zaferes"
            />
            <div className="inner-card-container">
              <img className="card-star" src={star} alt="star" />
              <span>{card.stats.rating}</span>
              <span className="gray">({card.stats.reviewCount}) •</span>
              <span className="gray">{card.location}</span>
            </div>
            <p>{card.title}</p>
            <div className="price-text">
              <p className="price bold">From ${card.price} </p>
              <p> / person</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Card;
