import React from "react";
import styled from "styled-components";

const Basket = ({ basketProduct, checkout, removeBasketProduct }) => {

    const Button = styled.button`
font-size: 1em;
padding: 1em;
margin: 5em;
border: 2px solid #ced7e0;
border-radius: 30px;
background: ${(props) => props.background || "#9ccddc"}`


const handleRemove = () => {
    let foundProduct
    for(let element of basketProduct){
        if(element.name )
    }
    removeBasketProduct(basketProduct)
}


    const listOfAddedProduct = basketProduct.map((product, index) => {

        const ListOfProduct = styled.h3`
        margin: 0;
        padding: 1em;
        background-color: #ced7e0;
        color: #062c43`

        return (
            <div key={index}>

                <ul>
                    <hr></hr>

                    <ListOfProduct>Name: </ListOfProduct>
                    <p>{product.name}</p>
                    <ListOfProduct>Price: </ListOfProduct>
                    <p>{product.price}</p>
                    <ListOfProduct>Quantity:</ListOfProduct>
                    <p>{product.quantity}</p>
                </ul>

                <button onClick={handleRemove}>Remove</button>
               
                <hr></hr>

            </div>
        )
    })





    return (
        <>
            {listOfAddedProduct}
<Button className="btn" onClick={checkout}>Checkout</Button>
        </>

    )
}


export default Basket;