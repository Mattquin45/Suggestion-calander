const express = require('express');
const nodemailer = require('nodemailer');
const cron = require("node-cron");
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));

// --- store user schedules in memory (better: use DB like Firestore)
let scheduledUsers = [];

// Function to send email
function sendEmail({ email, weekData }) {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "Your Email",
                pass: "Your Email-pass"
            },
        });

        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        const todaysSchedule = weekData[today];
        if (!todaysSchedule || !todaysSchedule.title) {
            return resolve({ message: `No schedule found for ${today}` });
        }

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
            if (error) {
                console.error("Email error:", error);
                reject(error);
            } else {
                console.log(`Email sent for ${today}:`, info.response);
                resolve({ message: `Email sent for ${today}` });
            }
        });
    });
}

// Endpoint to register user schedules
app.post("/send-email", (req, res) => {
    console.log("Request body:", req.body);
    const { email, weekData } = req.body;

    if (!email || !weekData) {
        return res.status(400).send("Missing email or weekData");
    }

    // Save schedule (for cron job use)
    scheduledUsers.push({ email, weekData });

    res.send("Weekly email reminders scheduled!");
});

// Cron job runs every day at 10:00 AM
cron.schedule('0 10 * * *', () => {
    console.log("Running daily reminder job...");
    scheduledUsers.forEach(user => {
        sendEmail(user).catch(err => console.error("Cron email error:", err));
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Email scheduler listening at port ${port}`);
});
