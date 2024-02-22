import sunLeft from '../covers/sun-vector--left.png';
import sunRight from '../covers/sun-vector--right.png';

export default function HomePage() {
    return (
        <>
            <div className='flex justify-between'>
                <span className='sunLeft--image'></span>
                <div className='items-center text-center flex flex-col justify-center'>
                    <h1 className='self-center home--title'>Hera</h1>
                    <h2 className='self-center home--subtitle'>Tarot, Ayuda espiritual con velas y Reiki</h2>
                </div>
                <span className='sunRight--image'></span>
            </div>

        </>
    )
}