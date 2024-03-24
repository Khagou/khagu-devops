const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');

require("dotenv").config({ path: "./config/.env" });
const app = express();
require("./config/db");
const techRoutes = require("./routes/techController");
const imagesRoutes = require("./routes/imagesController");
const articleRoutes = require("./routes/articlesController");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 7000;
const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_FROM = process.env.MAIL_FROM;
const MAIL_PORT = process.env.MAIL_PORT;
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASS = process.env.MAIL_PASS;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("client/build"));


app.use("/api/tech", techRoutes);
app.use("/api/images", imagesRoutes);
app.use("/api/article", articleRoutes);

app.use('/api', createProxyMiddleware({ 
  target: 'http://back-service.default.svc.cluster.local:7000', 
  changeOrigin: true,
  onProxyRes: function (proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));



app.post("/send_mail", cors(), async (req, res) => {
  let { nom } = req.body;
  let { prenom } = req.body;
  let { mail } = req.body;
  let { text } = req.body;

  require("dotenv").config();
  const transport = nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: false,
    service: "gmail",
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  try {
    await transport.sendMail({
      from: MAIL_FROM,
      to: MAIL_HOST,
      subject: "contact Khagu-dev",
      html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
        ">
        <h2> Contact from Khagu-dev </h2>
        <p> ${nom} ${prenom}</p>
        <p> ${mail}</p>
        <p> ${text}</p>
        </div>`,
    });
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => console.log(`Server started : ${PORT}`));
