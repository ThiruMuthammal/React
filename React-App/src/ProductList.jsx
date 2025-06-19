
import Product from './Product';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';

function ProductList() {


    const [products, setProducts, dummy, error, setDummy] = useFetch('http://localhost:3000/products')
    // handle delete
    function handleDelete(id) {
        console.log(id);
        const newProduct = products.filter((product) => product.id != id)
        setProducts(newProduct);
    }

    //products.sort((x, y) => y.price - x.price);

    // const filteredProducts = products.filter((x) => x.price > 600)

    if (!products) {
        return (
            <>
                {!error && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </>)
    }

    const productList = products.map(
        (product) =>
            <Product key={product.id} name={product.name}
                image={product.image}
                price={product.price} delete={handleDelete} id={product.id} />)

    return (
        <>
            {productList}
            <button onClick={() => setDummy(false)}>Dummy Button</button>
        </>
    );
}

export default ProductList