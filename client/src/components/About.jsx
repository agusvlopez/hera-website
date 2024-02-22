import aboutMe1 from '../covers/me--about-1.jpg';
import aboutMe2 from '../covers/me--about-2.jpg';
import aboutMe3 from '../covers/me--about-3.jpg';

function About() {

    return (
        <>
            <section className="container max-w-5xl mx-auto mt-6 mb-6 p-4 pt-6 gap-8 h-full md:h-screen">
                <div id="about" className="p-2 section-about md:flex md:gap-6">
                    <div className="section-about--text">
                        <h2 className='home--subtitle mb-4'>Sobre Hera</h2>
                        <p>¡Hola, <span className='font-bold'>soy Patri!</span></p>

                        <p>¡Bienvenidos a <strong>Hera</strong>! Un espacio en donde la confidencialidad es absoluta. Hago <strong>Lecturas de Tarot</strong>, <strong>Ayuda espiritual con velas</strong> y <strong>Reiki</strong>.</p>

                        <p>Mi lema es que siempre se trasmita <span className='font-bold'>mucha luz</span>, <span className='font-bold'>buena energía</span>, <span className='font-bold'>sinceridad</span> y <span className='font-bold'>transparencia</span>. Lo cual aplico en cada <strong>Lectura de Tarot</strong>, <strong>Ayuda espiritual</strong> y <strong>Reiki</strong>.</p>
                    </div>
                    <div class="section-about--images">
                        <div class="images-container">
                            <img src={aboutMe1} alt="Patri con las cartas del Tarot." class="image-3" />
                        </div>
                        <div class="images-container">
                            <img src={aboutMe2} alt="Patri con las cartas del Tarot." class="image-2" />
                        </div>
                        <div class="images-container">
                            <img src={aboutMe3} alt="Patri con las cartas del Tarot." class="image-1" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;