import React from "react";
import Button from './../../UI/Button/Button';

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
            <p><strong>Total Price: ${props.price.toFixed(2)} </strong></p>
            <p>Continue to checkout ?</p>
            <Button clicked={props.purchaseCancelled} btnType={"Danger"}>CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType={"Success"}>CONTINUE</Button>
        </div>
    )
}

export default orderSummary;