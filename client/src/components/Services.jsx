import Card from "./Card";
import lecturaCompleta from "../covers/services/lectura-completa.jpg";
import metodoCelta from "../covers/services/metodo-celta.jpg";
import preguntas from "../covers/services/preguntas.jpg";
import ayudaEspiritual from "../covers/services/ayuda-con-velas.jpg";

function Services() {

    return (
        <>
            <section id='services' className='container max-w-5xl mx-auto mt-6 mb-6 p-4 pt-6 gap-8 h-full'>
                <h2 className='section-services--subtitle mb-4'>Servicios</h2>
                <div className='md:flex gap-2 md:flex-wrap container'>
                    <Card
                        title="Lectura completa de Tarot"
                        price="$3000"
                        paragraph1="Esta Lectura está orientada a la introspección y reflexión."
                        paragraph2="Consultá a las cartas acerca del tema que quieras o un panorama general para un momento de introspección y reflexión acerca del momento que estés atravesando."
                        message1="Trabajo siempre con energías positivas y la confidencialidad es absoluta."
                        message2="No trato con temas relacionados a enfermedades."
                        imageUrl={lecturaCompleta}
                    />
                    <Card
                        title="Lectura de Tarot: Método Celta"
                        price="$2500"
                        paragraph1="El método Celta se trata de una lectura de Tarot milenaria que se lee solo con los Arcanos Mayores."
                        message1="Trabajo siempre con energías positivas y la confidencialidad es absoluta."
                        message2="No trato con temas relacionados a enfermedades."
                        imageUrl={metodoCelta}
                    />
                    <Card
                        title="Preguntas por si o por no a las cartas"
                        price="$500 por pregunta"
                        paragraph1="Si tenes alguna pregunta especifica por si o por no, esta es la opción: te respondo por si o por no con las cartas."
                        paragraph2="¡La pregunta tiene que ser lo más concreta posible!"
                        message1="Trabajo siempre con energías positivas y la confidencialidad es absoluta."
                        message2="No trato con temas relacionados a enfermedades."
                        imageUrl={preguntas}
                    />
                    <Card
                        title="Ayuda espiritual con velas"
                        price="$2500"
                        paragraph1="La Ayuda espiritual con velas consiste en una ayuda energética con velas para destrabar algún miedo concreto que sientas o alguna traba que tengas."
                        paragraph2="Me comunicás de qué tema se trata y realizaré la ayuda por 3 días."
                        message1="Trabajo siempre con energías positivas y la confidencialidad es absoluta."
                        message2="No trato con temas relacionados a enfermedades."
                        imageUrl={ayudaEspiritual}
                    />
                </div>
            </section>
        </>
    )
}

export default Services;