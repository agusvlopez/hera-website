import About from "../components/About";
import Services from "../components/Services";

export default function HomePage() {
    return (
        <>
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
            <div className='p-4 mt-8 h-screen section-about'>
                <About />
            </div>
            <div className='p-4 mt-8 h-screen section-about'>
                <Services />
            </div>
        </>
    )
}