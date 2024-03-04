import { Link } from "react-router-dom";

export default function Pending() {
    return (
        <div className="success-section flex flex-col items-center justify-center h-screen text-brown">
            <h1 className="text-4xl font-bold mb-4">Pago pendiente...</h1>
            <p className="text-lg text-gray-600 mb-8">Hubo problemas al intentar realizar el pago :/</p>
            <p className='text-lg text-center text-gray-600 mb-8 max-w-md'>Es un problema de mercado pago o la tarjeta. Por favor, intentá nuevamente más tarde.</p>
            <p className='text-lg text-center text-gray-600 mb-8 max-w-md'><Link className='card-service--message-link' to="/">Volver a Hera</Link></p>
        </div>
    )
}