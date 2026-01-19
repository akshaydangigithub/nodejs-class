import transporter from "../config/mailer.js";

export const sendTestMail = async (req, res) => {
    try {
        const { recieverEmail, message, subject } = req.body;

        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: recieverEmail,
            text: message,
            subject: subject
        }

        await transporter.sendMail(mailOption);

        return res.json({
            message:"Email send successfully"
        })


    } catch (error) {
        console.log(error);

    }
}