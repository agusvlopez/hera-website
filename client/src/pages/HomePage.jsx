import About from "../components/About";

export default function HomePage() {
    return (
        <>
            <div className='max-w-screen md:flex md:justify-between'>
                <span className='sunLeft--image'>
                    <div className='p-4 pt-0 text-center h-full w-screen flex flex-col justify-center md:mt-[-5%]'>
                        <h1 className='home--title md:self-center'>Hera</h1>
                        <span className='md:self-center home--description'>Tarot, Ayuda espiritual con velas y Reiki</span>
                    </div></span>
                <span className='sunRight--image'></span>
            </div>
            <div className='mt-8 h-screen'>
                <About />
            </div>
        </>
    )
}