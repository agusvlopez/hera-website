import { Link } from "react-router-dom";
import notFoundImage from "../covers/404.png";
export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-brown">
            <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
            <p className="text-lg text-gray-600 mb-4">Oops! Parece que la página que intentas acceder no existe.</p>
            <Link className='mb-4 notFound--section-link' to="/">Ir al inicio</Link>
            <img className="max-w-xs w-full p-4" src={notFoundImage} alt="404 Image" />
        </div>
    )
}