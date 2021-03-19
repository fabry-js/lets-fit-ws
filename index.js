const express = require("express");
const stripe = require("stripe")(
  "sk_test_51IJJPcIzkBXCvUW1usTx6HMp1Rh2bjoWM1TOyoA05BlP9qySrnUrQ8wjq1CCIEIJie6XjLvEJsYxZEbxP5Uo7GmD00EojT4de0"
);
const cors = require("cors");

const app = express();

app.use(cors());

const calculateOrderAmount = (items) => {
  let accumTotal = 0;
  items.forEach((item) => {
    item.price += accumTotal;
  });

  return accumTotal;
};

app.get("/", async (_req, res) => {
  res.send({
    message: "Salve!",
  });
});

app.post("/create-payment-intent", async (req, res) => {
  if (req.body.ingredients) {
    const { ingredients } = req.body;
    console.log(ingredients);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(ingredients),
      currency: "eur",
    });

    res.send({
      clientSecret: paymentIntent.clientSecret,
    });
  } else {
    res.send({
      message: "no ingredients",
    });
  }
});

app.listen(process.env.PORT || 5000, () => console.log("pronto."));
