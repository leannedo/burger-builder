// class component, used to manage state
import React, { Component } from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_PRICE = {
    salad: 0.3,
    meat: 1.5,
    cheese: 0.9,
    bacon: 1.2
}

// class component to control state
class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = props;
    // }

    state = {
        ingredients: {
            cheese : 0,
            bacon : 0,
            meat : 0,
            salad : 0
        },
        // the 'ingredients' object will receive the value from the build controls
        // when customers select how many of each ingredient they want to add
        totalPrice: 4,
        purchasable: false,
        //when the order button can be clicked
        purchasing: false,
        //when to show the order summary modal
    }

    updatePurchase(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            }).reduce((sum, el) => {return sum + el}, 0);
        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const updatedPrice = INGREDIENTS_PRICE[type] + oldPrice;
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
        this.updatePurchase(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
            // this function will stop executing at the point where return is called
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - INGREDIENTS_PRICE[type];
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
        this.updatePurchase(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert("You continue!");
    }


    render() {
        const disableInfo = {...this.state.ingredients};
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <=0;
        }
        // an array of true or false

        return(
            <div>
                <Burger ingredients = {this.state.ingredients}/>
                {this.state.purchasing ? <Modal purchaseClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalPrice}/>
                </Modal> : null}
                <BuildControls
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler}
                    disableInfo={disableInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchased={this.purchaseHandler}/>
            </div>
        )
    }
}


export default BurgerBuilder;