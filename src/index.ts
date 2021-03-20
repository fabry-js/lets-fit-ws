import express = require("express");
import cors = require("cors");
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51IJJPcIzkBXCvUW1usTx6HMp1Rh2bjoWM1TOyoA05BlP9qySrnUrQ8wjq1CCIEIJie6XjLvEJsYxZEbxP5Uo7GmD00EojT4de0",
  {
    apiVersion: "2020-08-27",
    typescript: true,
  }
);

const app = express();

app.use(cors());
app.use(express.static("."));
app.use(express.json());

const calculateOrderAmount = (items: any[]) => {
  let accumulatedTotal = 0;
  items.forEach((item: any) => {
    accumulatedTotal += item.price;
  });

  return Number(`${Math.floor(accumulatedTotal)}00`);
};

app.get("/", async (_req, res) => {
  res.send({
    message: "Salve!",
  });
});

app.post("/create-payment-intent", async (req, res) => {
  const { ingredients } = req.body;

  console.log(`⚡ Nuova richiesta ${new Date()}`);
  console.log(calculateOrderAmount(ingredients))

  const paymentIntent = await stripe.paymentIntents.create({
    /**
     * €1 -> 100 (int)
     * quindi €10 -> 10000 (int)
     */
    amount: calculateOrderAmount(ingredients),
    currency: "eur",
  })
  ;
  res.send({
    clientSecret: paymentIntent.client_secret,
    paymentMethodTypes: paymentIntent.payment_method_types,
  });
});

app.listen(process.env.PORT || 5000, () =>
  console.log(
    `🗻API Pronta sulla $PORT (se presente): ${process.env.PORT}, oppure sulla def port 5000`
  )
);
