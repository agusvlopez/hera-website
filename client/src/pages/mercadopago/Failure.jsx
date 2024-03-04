import { Link } from "react-router-dom";

export default function Failure() {
    return (
        <div className="success-section flex flex-col items-center justify-center h-screen text-brown">
            <h1 className="text-4xl font-bold mb-4">Pago rechazado :(</h1>
            <p className="text-lg text-gray-600 mb-8">No se pudo realizar el pago :/</p>
            <p className='text-lg text-center text-gray-600 mb-8 max-w-md'>Puede que haya fondos insuficientes o no esté funcionando bien mercado pago. Por favor, intentá nuevamente más tarde.</p>
            <p className='text-lg text-center text-gray-600 mb-8 max-w-md'><Link className='card-service--message-link' to="/">Volver a Hera</Link></p>
        </div>
    )
}