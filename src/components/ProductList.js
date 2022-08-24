import React from "react";
import Product from "./Product";

const ProductList = ({products, addBasketProduct}) =>{
const productsNode = products.map((product, index) => {
    return <Product product={product} key={index} addBasketProduct={addBasketProduct}/>
})

    return(
<>
    {productsNode}
</>
    )
};

export default ProductList;