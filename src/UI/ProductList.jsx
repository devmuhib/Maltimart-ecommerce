import React from 'react'
import ProductCard from './ProductCard'

const ProductList = (props) => {
    const item = props.data.map((item) => item)

    console.log("item", item);
    return (
        <>
            {props.data.map((item,index)=>(
                <ProductCard item={item} key={index}/>
            ))

            }

        </>
    )
}

export default ProductList