import React from "react";
import { Link } from "react-router-dom";

function CardItem() {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link">
          <figure className="cards_item_pic-wrap">
            <img src="" alt="Travel Image" className="cards__item__img" />
          </figure>
          <div className="cards_item__info">
            <h5 className="cards__item__text"></h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;