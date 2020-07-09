import React from "react";

const orderSummary = (props) => {
    const orderSummary = Object.keys(props.ingredients)
        .map(igKey => {return (<li key={igKey}>{igKey.toUpperCase()}: {props.ingredients[igKey]}</li>)});

    return(
        <div>
            <h3>Your order</h3>
            <p>A healthy burger with the following ingredients:</p>
            <ul>
                {orderSummary}
            </ul>
        </div>
    )
}

export default orderSummary;