import Card from "./Card";
import { getServices } from "../firebase/services";
import { useEffect, useState } from "react";

function Services() {
    const [servicesLoading, setServicesLoading] = useState(true);
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const allServices = await getServices();
                setServices(allServices);
                setServicesLoading(false);
                console.log(allServices);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchServices();
    }, []);

    console.log(services);
    const truncateText = (text) => {
        if (text.length > 70) {
            return text.substring(0, 70) + '...';
        }
        return text;
    };

    return (
        <>
            <section id='services' className='container max-w-5xl mx-auto mt-6 mb-6 p-4 pt-6 gap-8 h-full'>
                <h2 className='section-services--subtitle mb-4'>Servicios</h2>
                <div className='text-center pb-6'>
                    <p>Trabajo siempre con <span className='font-bold'>energías positivas</span> y la <span className='font-bold'>confidencialidad es absoluta</span></p>
                    <p>No trato con temas relacionados a enfermedades.</p>
                </div>
                <div className='md:flex gap-1 md:flex-wrap container md:justify-center'>
                    {servicesLoading &&
                        <span className='loader'></span>
                    }
                    {services.map((service) => (

                        <Card
                            id={service.id}
                            title={service.title}
                            price={`$${service.price}`}
                            description={truncateText(service.description)}
                            imageUrl={`./services/${service.image}`}
                        />

                    ))}
                </div>
            </section>
        </>
    )
}

export default Services;