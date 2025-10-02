const express = require('express');
const nodemailer = require('nodemailer');
const cron = require("node-cron");
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));

function sendEmail({ email, weekData }) {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "noreplycalendarreminder@gmail.com",
                pass: "isfm woly ufog ryst"
            },
        });
        //scheduler cron
        cron.schedule('0 10 * * *', () => {
            // Get current day name, e.g., "Monday"
            const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

            // Get the schedule for today
            const todaysSchedule = weekData[today];
            if (!todaysSchedule) return;

            const { title, description, hour, minute } = todaysSchedule;

            const mail_config = {
                from: "noreplycalendarreminder@gmail.com",
                to: email,
                subject: `Your daily calendar reminder for ${today}: ${title}`,
                text: `Today at ${hour}:${minute} you have: 
                ${description}
                When it comes to getting your schedule for today, you can always count on us! 
                Have a blessed day! :)`
            };

            transporter.sendMail(mail_config, (error, info) => {
                if (error) console.error("Email error:", error);
                else console.log(`Email sent for ${today}:`, info.response);
            });
        });

        resolve({ message: "Weekly email reminders scheduled for 10:00 AM every day!" });
    });
}

// Endpoint
app.post("/send-email", (req, res) => {
    console.log("Request body:", req.body);
    sendEmail(req.body)
        .then((response) => res.send(response.message))
        .catch((error) => {
            console.error("Email error:", error);
            res.status(500).send(error.message);
        });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Email scheduler listening at port ${port}`);
});
