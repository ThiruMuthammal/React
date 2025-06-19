import PropTypes from 'prop-types'
import { useState } from 'react';

function Product(props) {


    // let isPurchased = false;
    // useState Hook
    // Purpose: When we want to rerender the component we should use useState hook
    const [purchased, setPurchased] = useState(false);
    function BuyProduct(discount) {
        console.log(props.name, "laptop purchased", discount + "% discount");
        setPurchased(true);
    }
    return (
        <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button onClick={() => { BuyProduct(20) }}>Buy Now</button>
            <button onClick={() => props.delete(props.id)}>Delete</button>
            <p>{purchased ? "Already purchased" : "Get it Now"}</p>
        </div>
    );
}

Product.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
}

export default Product