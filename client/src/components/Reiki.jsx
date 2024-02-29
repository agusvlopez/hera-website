import { Link } from "react-router-dom";
import reiki from "../covers/reiki-5.jpg";

function Reiki() {

    return (
        <>
            <section id='reiki' className="mx-auto gap-8 h-full section-reiki">
                <span className='mt-[28px] ml-[20px] section-about--stars-left-dark'></span>
                <div className='section-reiki--container max-w-3xl mx-auto'>
                    <div className='section-reiki--container-subtitle'>
                        <h2 className='section-reiki--subtitle mb-4'>Reiki</h2>
                    </div>
                    <div className='md:flex md:items-center container p-4'>
                        <div className='p-2 pb-4 section-reiki--img w-[100%] basis-1/3'>
                            <img src={reiki} alt="" className='w-[100%]' />
                        </div>
                        <div className='p-4 pt-0 section-reiki--text basis-2/3'>
                            <p>El <strong>Reiki</strong> despierta, integra, transforma y logra. Abre la visión interior a todos nuestros potenciales, talentos, habilidades, recursos y fortalezas internas. Una <strong>sesión de Reiki</strong> es la oportunidad de ponernos en contacto con poderosas y profundas fuerzas de <span className='font-bold'>transformación</span>, <span className='font-bold'>equilibrio</span>, <span className='font-bold'>armonía</span>, <span className='font-bold'>alineación con la parte más esencial de nuestro ser</span>, y esto de una manera sumamente amorosa, porque <span className='font-bold'>Reiki</span> no es más que eso: <span className='font-bold'>amor</span>.</p>
                            <p>El Reiki se realiza para:
                                <ul>
                                    <li>- Desbloqueo energético</li>
                                    <li>- Sanación energética</li>
                                </ul>
                            </p>
                            <p>Se trata de <strong>Reiki Usui</strong> <strong>a distancia</strong>, se realiza en <span className='font-bold'>tres sesiones</span>.</p>
                            <p>Solo necesito tu nombre y por qué lo necesitas.</p>
                        </div>
                    </div>
                    <div className='flex justify-center md:justify-end p-6 pt-0'>
                        <Link to="./product/A8J82vdgqJmTCIYwmamc">
                            <button>¡Quiero una sesión de Reiki!</button>
                        </Link>
                    </div>
                </div>
                <span className='section-about--stars-right-dark mr-[18px]'></span>
            </section>
        </>
    )
}

export default Reiki;