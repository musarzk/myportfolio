import nodemailer from 'nodemailer';

// Configure your email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    console.log('Incoming contact form data:', { name, email });

    // Validate input
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to your Gmail
    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_EMAIL}>`,
      to: process.env.GMAIL_EMAIL, // Your Gmail inbox
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Message from Portfolio Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    // Send confirmation email to the sender
    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: 'I received your message',
      html: `
        <h2>Thank you for contacting me!</h2>
        <p>Hi ${name},</p>
        <p>Thanks for your message, I will revert as soon as possible.</p>
        <p>Best regards,<br>MARZSTACK</p>
      `,
    });

    return Response.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Email error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      stack: error.stack
    });
    return Response.json(
      { 
        error: 'Failed to send email', 
        details: error.message 
      },
      { status: 500 }
    );
  }
}
