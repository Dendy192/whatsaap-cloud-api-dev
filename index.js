const express = require("express");
const body_parser = require("body-parser");
const axios = require("axios");
require("dotenv").config();

const app = express().use(body_parser.json());
const token = process.env.TOKEN;
const myToken = process.env.MYTOKEN;

app.listen(process.env.PORT, () => {
  console.log("webhook is listening");
});

app.get("/webhook", (req, res) => {
  let mode = req.query["hub.mode"];
  let challange = req.query["hub.challenge"];
  let token = req.query["hub.verify_token"];

  if (mode && token) {
    if (mode === "subscribe" && token === myToken) {
      res.status(200).send(challange);
    } else {
      res.status(403);
    }
  }
});

app.post("/webhook", (req, res) => {
  let body_param = req.body;

  console.log(JSON.stringify(body_param, null, 2));

  if (body_param.object) {
    if (
      body_param.entry &&
      body_param.entry[0].changes &&
      body_param.entry[0].changes[0].value.message &&
      value.message[0]
    ) {
      let phone_no_id =
        body_param.entry[0].changes[0].value.metadata.phone_number_id;
      let from = body_param.entry[0].challange[0].value.messages[0].from;
      let msg_body =
        body_param.entry[0].challange[0].value.messages[0].text.body;
      console.log("Dari conselo log body messege" + msg_body);
      axios({
        method: "POST",
        url:
          "https://graph.facebook.com/v14.0/" +
          phone_no_id +
          "/messages?access_token=" +
          token,
        data: {
          messageging_product: "whatsapp",
          to: from,
          text: {
            body: "hi test",
          },
        },
        Headers: {
          "Content-Type": "application/json",
        },
      });

      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
});

app.get("/", (req, res) => {
  //   res.sendStatus(200).send("Hello");
  res.status(200).send("Hello this webhook");
});
