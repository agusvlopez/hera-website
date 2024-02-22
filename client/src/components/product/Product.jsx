import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from "axios";
import { useState } from 'react';

const Product = () => {
    const [preferenceId, setPreferenceId] = useState(null);

    initMercadoPago('TEST-1dbc2b77-18df-42ca-96b7-4b672a688d44', {
        locale: "es-AR",
    });

    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:3000/create_preference", {
                title: "Bananita contenta",
                quantity: 1,
                price: 100,
            });

            const { id } = response.data;
            return id;
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }
    };

    return (
        <div className='card-product-container'>
            <div className='card-product'>
                <div className='card bg-indigo-500'>
                    {/* <img src={} alt='Product Image' /> */}
                    <h3>Bananita contenta</h3>
                    <p className='price'>100 $</p>
                    <button onClick={handleBuy}>Buy</button>
                    {preferenceId &&
                        <Wallet initialization={{ preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Product;