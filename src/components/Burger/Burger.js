import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

// functional component to render UI
const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map( igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>;
            });
        }).reduce((arr, el) => {return arr.concat(el)}, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients !</p>;
    }
    //why don't we check it right at the beginning and divide into 2 cases

    // console.log(transformedIngredients);


    return(
        <div className={classes.Burger}>
            <BurgerIngredient type={'bread-top'}/>
            {transformedIngredients}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
};

export default burger;