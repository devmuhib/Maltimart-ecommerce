import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products'
import ProductDetailCard from '../components/UI/ProducDetailCard'



function ProductDetail() {

    // const [data, setData] = useState()
    const {id} = useParams()
    const idProduct = id.split(".")[0];
    const res = products.filter((item) => item.id === idProduct);
    const data = res[0]
    // useEffect(() => {
    //     const idProduct = id.split(".")[0];
    //     const getDetailProduct = () => {
    //         const respone = products.filter((item) => item.id === idProduct);
    //         setData(respone[0])
    //         console.log(respone[0])
    //     }
    //     getDetailProduct()
    // }, [])
    return (
        <>
            <ProductDetailCard data={data}/>
        </>
    );
}

export default ProductDetail;