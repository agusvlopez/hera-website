import { Link } from "react-router-dom";

export default function Success() {
    return (
        <div className="success-section flex flex-col items-center justify-center h-screen text-brown">
            <h1 className="text-4xl font-bold mb-4">¡Pago exitoso!</h1>
            <p className="text-lg text-gray-600 mb-8">Muchas gracias!! Te deseo mucha luz y buena energía 💜</p>
            <p className='text-lg text-center text-gray-600 mb-8 max-w-md'><span className='font-bold '>Importante:</span> Enviarme el comprobante o un mensaje por <Link className='card-service--message-link' to="https://www.instagram.com/hera.tarotyvelas/">Mensaje Directo de Instagram</Link> para poder comunicarnos!</p>
        </div>
    )
}