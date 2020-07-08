// class component, used to manage state
import React, { Component } from 'react';
import Burger from "../../components/Burger/Burger";

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
        }
        // the 'ingredients' object will receive the value from the build controls
        // when customers can select how many of each ingredient they want to add
    }


    render() {
        return(
            <div>
                <Burger ingredients = {this.state.ingredients}/>
                <div>Build Controls</div>
            </div>
        )
    }
}


export default BurgerBuilder;