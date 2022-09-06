import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CreateProduct() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchproducts();
    }, []);
    const fetchproducts = async () => {
        const res = await axios.get("https://ty-shop.herokuapp.com/api/products");
        console.log(res);
        setProducts(res.data.products);
    };
    return (
        <div>
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Product Description</th>
                </tr>

                {products.map((val) => {
                    return (
                        <tr>
                            <td>{val.productName}</td>
                            <td>{val.productDescription}</td>
                        </tr>
                    )
                })
                }
            </table>
        </div>
    )
}
export default CreateProduct