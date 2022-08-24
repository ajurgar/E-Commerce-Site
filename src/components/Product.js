import React from "react";
import styled from "styled-components";


const Product = ({ product, addBasketProduct }) => {

    const ListOfProduct = styled.h3`
    margin: 0;
    padding: 1em;
    background-color: #ced7e0;
    color: #062c43`

const Button =  styled.button`
font-size: 1em;
padding: 1em;
margin: 5em;
border: 2px solid #ced7e0;
border-radius: 30px;
background: ${(props) => props.background || "#9ccddc"}`

    const handleAddProduct = () => {
        addBasketProduct(product)
    }


    return (
        <>
            <ul>

                <ListOfProduct>Name: </ListOfProduct>
                <p>{product.name}</p>
                <ListOfProduct>Price: </ListOfProduct>
                <p>{product.price}</p>
                <ListOfProduct>Quantity:</ListOfProduct>
                <p>{product.quantity}</p>
            </ul>

            <Button className="btn" onClick={handleAddProduct}>Add to Basket</Button>


        </>
    )

}


export default Product;