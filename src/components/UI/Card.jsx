import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/card.css'

function Card({item }) {
    return (
        <div className="card__item" key={item.id}>
            <Link to={`/product-detail/${item.id}`}>
                <div className="card__img">
                    <img src={item.imgUrl} alt="image" />
                </div>
                <div className="card__infor">
                    <h3 className="card__name">
                        {item.productName}
                    </h3>
                    <span>{item.price} $</span>
                </div>
            </Link>
        </div>
    );
}

export default Card;