import About from "../components/About";

export default function HomePage() {
    return (
        <>
            <div className='max-w-screen relative'>
                <span className='sunLeft--image absolute top-0 left-0'></span>
                <div className='flex justify-center items-center h-screen'>
                    <div className='text-center mt-[-10%]'>
                        <h1 className='home--title'>Hera</h1>
                        <span className='home--description'>Tarot, Ayuda espiritual con velas y Reiki</span>
                    </div>
                </div>
                <span className='sunRight--image absolute top-0 right-0'></span>
            </div>
            <div className='mt-8 h-screen'>
                <About />
            </div>
        </>
    )
}