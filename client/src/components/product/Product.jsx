import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getServiceById } from '../../firebase/services';

const Product = () => {
    const { id: id } = useParams();
    const [preferenceId, setPreferenceId] = useState(null);
    const [serviceLoading, setServiceLoading] = useState(true);
    const [buyLoading, setBuyLoading] = useState(false);
    const [service, setService] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    console.log(selectedImage);
    const handleClick = (image) => {
        setSelectedImage(image);
    };

    useEffect(() => {
        const fetchService = async () => {
            try {
                const service = await getServiceById(id);
                setService(service);
                setServiceLoading(false);
                console.log(service);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchService();
    }, []);

    initMercadoPago('TEST-1dbc2b77-18df-42ca-96b7-4b672a688d44', {
        locale: "es-AR",
    });

    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:3000/create_preference", {
                title: service.title,
                quantity: 1,
                price: service.price,
            });

            const { id } = response.data;
            return id;
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuy = async () => {
        setBuyLoading(true);
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }
        setBuyLoading(false);
    };

    return (
        <div className='card-service--container'>
            <div className='relative'>
                {serviceLoading ?
                    <div className='flex justify-center'>
                        <span className='loader'></span>
                    </div>
                    :
                    <>
                        <p className='text-center font-semibold mb-4'>Horario de atención: de 21hs a 00hs.</p>
                        <div className='card-service--data'>
                            <div className="service-grid basis-1/3">
                                <div className="big-image">
                                    {selectedImage ? <img src={`../services/${selectedImage}`} alt="Selected Service" />
                                        :
                                        <img src={`../services/${service.image}`} alt={service.title} />}
                                </div>
                                <div className="small-images">
                                    <div className="card-service--img-container-1" onClick={() => handleClick(service.image)}>
                                        <img src={`../services/${service.image}`} alt={service.title} />
                                    </div>
                                    <div className="card-service--img-container-2" onClick={() => handleClick(service.image2)}>
                                        <img src={`../services/${service.image2}`} alt={service.title} />
                                    </div>
                                    <div className="card-service--img-container-3" onClick={() => handleClick(service.image3)}>
                                        <img src={`../services/${service.image3}`} alt={service.title} />
                                    </div>
                                </div>
                            </div>
                            <div className='card-service--text-container basis-2/3'>
                                <h1 className='card-service--title'>{service.title}</h1>
                                <p className='card-service--price'>${service.price}</p>
                                <p className='card-service--description'>{service.description}</p>
                                <div className='card-service--button'>
                                    <button onClick={handleBuy}>Obtener</button>
                                </div>
                                {buyLoading &&
                                    <p>Loading...</p>
                                }
                                {preferenceId &&
                                    <Wallet initialization={{ preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />
                                }
                                <span className='sunRight--image absolute top-0 right-0'></span>
                            </div>
                        </div>
                        <div className='card-service--message'>
                            <p>Trabajo siempre con <span className='font-bold'>energías positivas</span> y la <span className='font-bold'>confidencialidad es absoluta</span></p>
                            <p>No trato con temas relacionados a enfermedades.</p>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Product;