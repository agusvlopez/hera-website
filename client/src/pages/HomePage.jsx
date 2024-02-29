import About from "../components/About";
import Services from "../components/Services";
import Reiki from "../components/Reiki";
import 'firebase/firestore';
import { addSubscriber } from "../firebase/subscribers";
import { useState } from "react";

export default function HomePage() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addSubscriber({ email });
            setEmail(''); // Limpiar el campo de correo electrónico después de enviar
            alert('¡Gracias por suscribirte!');
        } catch (error) {
            console.error('Error al guardar el correo electrónico:', error);
            alert('Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <>
            <div>
                <div className='max-w-screen relative'>
                    <span className='sunLeft--image absolute top-0 left-0'></span>
                    <div className='p-4 section-home flex justify-center items-center h-[500px]'>
                        <div className='text-center mt-[-10%]'>
                            <h1 className='section-home--title'>Hera</h1>
                            <span className='section-home--description'>Tarot, Ayuda espiritual con velas y Reiki</span>
                        </div>
                    </div>
                    <span className='sunRight--image absolute top-0 right-0'></span>
                </div>
                <div className='p-4 mt-8 section-about'>
                    <About />
                </div>
                <div className='p-4 md:mt-8 h-full section-services'>
                    <Services />
                </div>
                <div className='p-4 mt-8 h-full section-reiki'>
                    <Reiki />
                </div>
                <div className='pt-8 pb-8 h-full section-newsLetter'>
                    <div className='section-newsLetter--container'>
                        <h2 className='section-newsLetter--subtitle mb-2'>¿Querés recibir todas las novedades?</h2>
                        <p className='section-newsLetter--text'>¡Suscribite al Newsletter para recibirlas!</p>
                        <div className="section-newsLetter--form mt-4 max-w-md">
                            <form action="" onSubmit={handleSubmit} >
                                <label htmlFor="email" className='invisible'>Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Escribí acá tu email..."
                                    className="p-2 pt-[10px] border rounded-l-md flex-grow"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="section-newsLetter--button p-[10px] pt-3 rounded-l-md"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}