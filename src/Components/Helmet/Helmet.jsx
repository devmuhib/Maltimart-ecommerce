import React from 'react'
import Services from '../../assets/Services/Services';

const Helmet = (props) => {
    document.title = 'E-Mart -' + props.title;
    return (
        <>
        <div className='w-100'>{props.children}</div>
      
        </>
)
}

export default Helmet;