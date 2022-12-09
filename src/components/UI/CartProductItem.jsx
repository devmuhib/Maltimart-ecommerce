import React from 'react';

function CartProductItem({data}) {
    return (
        <>
            {
                data?.map((item, index) => (
                    <tr key={index}>
                        <th scope="row">X</th>
                        <td>{item.productName}</td>
                        <td>{item.price} $</td>
                        <td>12</td>
                        <td>{item.price} $</td>
                    </tr>
                ))
            }
        </>
    );
}

export default CartProductItem;