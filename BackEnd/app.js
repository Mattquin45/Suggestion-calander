const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 4000;
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    next();
});

function sendEmail({ email, message }) {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "noreplycalendarreminder@gmail.com",
                pass: "isfm woly ufog ryst"
            },
        });
        
        const mail_config = {
            from: "noreplycalendarreminder@gmail.com",
            to: email,
            subject: "Your daily calendar reminder!",
            text: message,
        
        };
        transporter.sendMail(mail_config, function (error, info) {
            if (error) {
                console.log(error);
                return reject({ message: 'An error has occured, please try again later ' })
            }   return resolve({ message: "Email has been sent successfully" });
        });
    });
} app.post("/send-email", (req, res) => {
    console.log("Request body:", req.body);
    sendEmail(req.body)
        .then((response) => res.send(response.message))
        .catch((error) => { console.error("Email error:", error); res.status(500).send(error.message); });
});
app.listen(port, () => {
    console.log(`nodemailer is listening at http://localhost:${port}`);
    });