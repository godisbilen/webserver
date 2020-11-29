import type { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export function post(req: Request, res: Response) {
    // Load data
    const name: string = req.body.name;
    const email: string = req.body.email;
    const subject: string = req.body.subject;
    const order_number: string = req.body.order_number;
    const message: string = req.body.message;

    const transporter = nodemailer.createTransport(
        `smtps://${process.env.EMAIL_USER}:${process.env.EMAIL_PASSWORD}@${process.env.EMAIL_HOST}`
    );

    const mailOptions = {
        from: '"Godisbilen.nu" <noreply@godisbilen.nu>',
        to: 'info@godisbilen.nu',
        subject: `${name} - ${subject}`,
        text: `${name} (${email}) har skickat ett meddelande från hemsidan\n\Meddelande: ${message}${order_number ? '\nBeställningsnummer: ' + order_number : ''}`,
    };

    // Send the mail
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        return res.json({ message: 'Message sent: ' + info.response }).send();
    });
}