import {Link} from "react-router-dom";
import React from "react";
import "./card.css";

const Card = ({product}) => {
    return (
        <div className="product" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div className="product-info">
                <p className="info-name">{product.title}</p>
                <p className="info-Category">{product.category}</p>
                <p className="info-price">${product.price}</p>
                <Link to={`/product/${product.id}`} className="info__button btn btn-outline-primary">View</Link>
            </div>
        </div>
    )
}

export default Card;