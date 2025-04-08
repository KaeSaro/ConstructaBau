import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phoneNumber, message } = await req.json();

    if (!name || !email || !phoneNumber || !message) {
      return NextResponse.json({ message: 'All fields are required!' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            .email-container {
              max-width: 600px;
              margin: 0 auto;
              font-family: Arial, sans-serif;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .header {
              background-color: #000000;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 5px 5px 0 0;
            }
            .content {
              background-color: white;
              padding: 20px;
              border-radius: 0 0 5px 5px;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .field {
              margin-bottom: 20px;
            }
            .label {
              font-weight: bold;
              color: #666;
              display: block;
              margin-bottom: 5px;
            }
            .value {
              color: #333;
              line-height: 1.6;
            }
            .message-box {
              background-color: #f5f5f5;
              padding: 15px;
              border-radius: 5px;
              margin-top: 10px;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h2 style="margin: 0;">Neue Anfrage von <span style="text-decoration: underline;">${name}</span></h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <span class="label">Telefonnummer:</span>
                <div class="value">${phoneNumber}</div>
              </div>
              <div class="field">
                <span class="label">Nachricht:</span>
                <div class="value message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Diese Nachricht wurde von Ihrem Kontakformular gesendet.</p>
              <p>Uhrzeit: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'Neue Kontaktformular Anfrage',
      text: `From: ${name} (${email})\nTelefon: ${phoneNumber}\n\nMessage: ${message}`, // Plain text version
      html: htmlContent,
    });

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
  }
}