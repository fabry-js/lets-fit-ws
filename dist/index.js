"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const stripe_1 = __importDefault(require("stripe"));
const stripe = new stripe_1.default("sk_test_51IJJPcIzkBXCvUW1usTx6HMp1Rh2bjoWM1TOyoA05BlP9qySrnUrQ8wjq1CCIEIJie6XjLvEJsYxZEbxP5Uo7GmD00EojT4de0", {
    apiVersion: "2020-08-27",
    typescript: true,
});
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.static("."));
app.use(express.json());
const calculateOrderAmount = (items) => {
    if (typeof items === "undefined") {
        console.log(`⚠ La prop items non è array ma undefined, rompo il calcolo del prezzo.`);
        return;
    }
    else {
        let accumulatedTotal = 0;
        items.forEach((item) => {
            accumulatedTotal += item.price;
        });
        return accumulatedTotal * 100;
    }
};
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`🤔 Nuova GET Request, chi ha scovato la API?, 📅 ${new Date()}`);
    console.log(`🔎 IP Della GET: ${req.ip}, User Agent: ${(req.headers["user-agent"])}`);
    res.send({
        message: "Ti piacciono i biscotti?",
    });
}));
app.post("/create-payment-intent", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ingredients } = req.body;
    console.log(`⚡ Nuova richiesta ${new Date()}`);
    if (typeof ingredients === "object" && ingredients.length > 0) {
        console.log(`✅ Richiesta accettata`);
        console.log(`💸 Totale Previsto: €${calculateOrderAmount(ingredients) / 100}`);
        try {
            const paymentIntent = yield stripe.paymentIntents.create({
                amount: calculateOrderAmount(ingredients),
                currency: "eur",
            });
            res.send({
                clientSecret: paymentIntent.client_secret,
                paymentMethodTypes: paymentIntent.payment_method_types,
            });
        }
        catch (error) {
            throw new Error(`🤯 Errore nel paymentIntent!`);
        }
    }
    else {
        console.log(`❌ Nessun Ingrediente, Richiesta chiusa.`);
    }
}));
app.listen(process.env.PORT || 5000, () => console.log(`🗻 API Pronta sulla porta ${process.env.PORT ? process.env.PORT : "5000"}`));
//# sourceMappingURL=index.js.map