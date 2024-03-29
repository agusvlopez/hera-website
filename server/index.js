import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from "mercadopago";

const app = express();
const port = process.env.PORT || 3000;

// Configuración de CORS para permitir solicitudes desde el origen de tu aplicación
const corsOptions = {
    origin: "https://heratarotvelasyreiki.vercel.app",
};

app.use(cors(corsOptions));
app.use(express.json());

dotenv.config();
console.log(process.env.ACCESS_TOKEN);
const client = new MercadoPagoConfig({
    accessToken: process.env.ACCESS_TOKEN,
});

app.get("/", (req, res) => {
    res.send("Soy el server :)");
});

app.post("/create_preference", async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS",
                },
            ],
            back_urls: {
                // ESTAS URL DESPUES LAS TENGO QUE CAMBIAR
                success: "https://heratarotvelasyreiki.vercel.app/",
                failure: "https://heratarotvelasyreiki.vercel.app/",
                pending: "https://heratarotvelasyreiki.vercel.app/",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({ body });

        res.json({
            id: result.id,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia :(",
        });
    }
});

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});