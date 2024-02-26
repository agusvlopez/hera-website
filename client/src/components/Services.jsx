import Card from "./Card";
import lecturaCompleta from "../covers/services/lectura-completa.jpg";
import metodoCelta from "../covers/services/metodo-celta.jpg";
import preguntas from "../covers/services/preguntas.jpg";
import ayudaEspiritual from "../covers/services/ayuda-con-velas.jpg";

function Services() {

    const truncateText = (text) => {
        if (text.length > 100) {
            return text.substring(0, 100) + '...';
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
                    <Card
                        title="Lectura completa de Tarot"
                        price="$3000"
                        paragraph={truncateText("Esta Lectura está orientada a la introspección y reflexión. Consultá a las cartas acerca del tema que quieras o un panorama general para un momento de introspección y reflexión acerca del momento que estés atravesando.")}
                        imageUrl={lecturaCompleta}
                    />
                    <Card
                        title="Lectura de Tarot: Método Celta"
                        price="$2500"
                        paragraph={truncateText("El método Celta se trata de una lectura de Tarot milenaria que se lee solo con los Arcanos Mayores.")}
                        imageUrl={metodoCelta}
                    />
                    <Card
                        title="Preguntas por si o por no a las cartas"
                        price="$500 por pregunta"
                        paragraph={truncateText("Si tenes alguna pregunta especifica por si o por no, esta es la opción: te respondo por si o por no con las cartas.")}
                        imageUrl={preguntas}
                    />
                    <Card
                        title="Ayuda espiritual con velas"
                        price="$2500"
                        paragraph={truncateText("La Ayuda espiritual con velas consiste en una ayuda energética con velas para destrabar algún miedo concreto que sientas o alguna traba que tengas.")}
                        imageUrl={ayudaEspiritual}
                    />
                </div>
            </section>
        </>
    )
}

export default Services;