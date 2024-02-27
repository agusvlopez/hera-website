import aboutMe1 from '../covers/me--about-1.jpg';
import aboutMe2 from '../covers/me--about-2.jpg';
import aboutMe3 from '../covers/me--about-3.jpg';

function About() {

    return (
        <>
            <section id='about' className="container max-w-4xl mx-auto mt-6 mb-6 p-6 pt-6 gap-8 h-full">
                <div id="about" className="p-2 md:flex md:gap-6 section-about--container">
                    <div className="section-about--text">
                        <span className='section-about--stars-left'></span>
                        <h2 className='section-about--subtitle mb-4'>Sobre Hera</h2>
                        <div className='section-about--text'>
                            <p>¡Hola, <span className='font-bold'>soy Patri!</span></p>

                            <p>¡Bienvenidos a <strong>Hera</strong>! Un espacio en donde la confidencialidad es absoluta.</p>

                            <p>Hago <strong>Lecturas de Tarot</strong>, <strong>Ayuda espiritual con velas</strong> y <strong>Reiki</strong>.</p>

                            <p>Mi lema es que siempre se trasmita <span className='font-bold'>mucha luz</span>, <span className='font-bold'>buena energía</span>, <span className='font-bold'>sinceridad</span> y <span className='font-bold'>transparencia</span>. Lo cual aplico en todas las áreas.</p>

                            <p>Soy de <strong>Argentina</strong> pero todo lo hago de manera <strong>online</strong> asique si hablas español no importa desde dónde me hables, <span className='font-bold'>¡con gusto y buena energía te atenderé!</span></p>
                        </div>
                        <span className='section-about--stars-right'></span>
                        <div className='mt-8 mb-8'>
                            <button>¡Quiero una sesión!</button>
                        </div>
                    </div>
                    <div className="section-about--images">
                        <div className="images-container">
                            <img src={aboutMe1} alt="Patri con las cartas del Tarot." className="image-3" />
                        </div>
                        <div className="images-container">
                            <img src={aboutMe2} alt="Patri con las cartas del Tarot." className="image-2" />
                        </div>
                        <div className="images-container">
                            <img src={aboutMe3} alt="Patri con las cartas del Tarot." className="image-1" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;