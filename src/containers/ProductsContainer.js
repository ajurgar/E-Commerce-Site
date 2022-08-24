import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Basket from "../components/Basket";
import styled from "styled-components";


const ProductsContainer = () => {

    const Title = styled.h1`
    text-align: center;
    font-size: 1.5em:;
    color: #fff;
    background-color: #062c43;
    margin: 0;
    padding: 1em`;

    const allProducts = [{
        name: "Bottle",
        price: 10,
        quantity: 10
    },
    {
        name: "Jacket",
        price: 50,
        quantity: 2
    }
    ]

    const [products, setProducts] = useState([])
    const [basketProduct, setBasketProduct] = useState([])






    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        setProducts(allProducts)
    }

    const addBasketProduct = (product) => {
        const addedProduct = [...basketProduct, product]
        setBasketProduct(addedProduct)
    }
    // const removeBasketProduct = () => {
    //     setBasketProduct(current =>
    //         current.filter(product =>{
    //             return product.name !== 2;
    //         }),
    //         );
    // };

    const removeBasketProduct = (productToRemove) => {
        console.log('function called');
        let newArray = [];
        for(let element of basketProduct){
            if(element.name != productToRemove.name){
                newArray.push(element)
            }
        }
        setBasketProduct(newArray)
    }

    const checkout = () => {
        const updatedProducts = [...products]
        updatedProducts.forEach(product => {
            basketProduct.forEach(checkoutProduct => {
                if (product.name === checkoutProduct.name && product.quantity > 0) {
                    checkoutProduct.quantity = checkoutProduct.quantity - 1
                }
            })
        })
        setProducts(updatedProducts)
        setBasketProduct([])
    }

    const totalCheckout = () => {
       
    }






    return (
        <>
            <Title>CodeClan Market</Title>
            <ProductList products={products} addBasketProduct={addBasketProduct} />
            <h1>Basket Content</h1>
            <hr></hr>
            <Basket basketProduct={basketProduct} checkout={checkout} removeBasketProduct={removeBasketProduct} />
        </>
    )
}


export default ProductsContainer;