import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, mobile, service, company } = body;

    // Create transporter using Gmail with App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password (not regular password)
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER, // Send to yourself
      subject: '🚀 New Form Submission - Strategy Lab',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #4DD1F4, #54453E); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Lead! 🎉</h1>
            <p style="color: #f0f0f0; margin: 10px 0 0 0;">Strategy Lab Contact Form</p>
          </div>
          
          <div style="padding: 30px; background-color: white; margin: 0 20px;">
            <h2 style="color: #54453E; border-bottom: 3px solid #4DD1F4; padding-bottom: 10px;">Contact Details</h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #54453E; width: 40%;">👤 Full Name:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #333;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #54453E;">📧 Email:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #333;"><a href="mailto:${email}" style="color: #4DD1F4; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #54453E;">📱 Mobile:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #333;"><a href="tel:${mobile}" style="color: #4DD1F4; text-decoration: none;">${mobile}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #54453E;">🎯 Service:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #333;">${service || 'Not specified'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #54453E;">🏢 Company:</td>
                  <td style="padding: 12px 0; color: #333;">${company || 'Not specified'}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #4DD1F4; color: white; padding: 15px; border-radius: 8px; text-align: center; margin-top: 30px;">
              <p style="margin: 0; font-weight: bold;">⏰ Follow up within 24-48 hours for best conversion!</p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #6c757d; font-size: 14px;">
            <p>This email was sent from your Strategy Lab website contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      message: 'Email sent successfully',
      success: true 
    }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : 'Unknown error',
        success: false 
      },
      { status: 500 }
    );
  }
}
