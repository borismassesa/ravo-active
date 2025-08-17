import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration
const NOTIFICATION_EMAIL = 'monalisaskawa69@gmail.com'

// Create transporter (you'll need to configure this with your email service)
const createTransporter = () => {
  // For Gmail, you'll need to:
  // 1. Enable 2-factor authentication
  // 2. Generate an App Password
  // 3. Use the App Password instead of your regular password
  
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_APP_PASSWORD, // Your Gmail App Password
    },
  })
}

// Email template for subscription notification
const createSubscriptionEmail = (subscriberEmail: string, timestamp: string) => {
  return {
    from: process.env.EMAIL_USER || 'noreply@ravoactive.com',
    to: NOTIFICATION_EMAIL,
    subject: '🎉 New RavoActive Waitlist Subscription',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Waitlist Subscription</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden; }
          .header { background: linear-gradient(135deg, #ff6b6b, #43d9ad); padding: 30px; text-align: center; }
          .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; }
          .content { padding: 30px; }
          .badge { display: inline-block; background-color: #ff6b6b; color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-bottom: 20px; }
          .subscriber-info { background-color: #f1f5f9; border-left: 4px solid #ff6b6b; padding: 20px; margin: 20px 0; border-radius: 4px; }
          .subscriber-email { font-size: 18px; font-weight: 600; color: #1e293b; margin-bottom: 8px; }
          .timestamp { color: #64748b; font-size: 14px; }
          .stats { background-color: #ecfdf5; border: 1px solid #d1fae5; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; }
          .stats-number { font-size: 32px; font-weight: bold; color: #059669; margin-bottom: 5px; }
          .stats-label { color: #047857; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
          .footer { background-color: #1e293b; color: #94a3b8; padding: 20px; text-align: center; font-size: 14px; }
          .footer strong { color: #ffffff; }
          .highlight { color: #ff6b6b; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 New Waitlist Subscription!</h1>
          </div>
          
          <div class="content">
            <div class="badge">New Subscriber Alert</div>
            
            <h2 style="color: #1e293b; margin-bottom: 10px;">Great news! Someone just joined the RavoActive waitlist.</h2>
            
            <div class="subscriber-info">
              <div class="subscriber-email">📧 ${subscriberEmail}</div>
              <div class="timestamp">⏰ Subscribed on: ${timestamp}</div>
            </div>
            
            <div class="stats">
              <div class="stats-number">+1</div>
              <div class="stats-label">New Potential Customer</div>
            </div>
            
            <h3 style="color: #1e293b;">What this means:</h3>
            <ul style="color: #475569; line-height: 1.6;">
              <li>📈 Growing interest in RavoActive products</li>
              <li>🎯 Engaged audience ready for launch updates</li>
              <li>💰 Potential customer for early access promotions</li>
              <li>📢 Someone to notify about launch day</li>
            </ul>
            
            <h3 style="color: #1e293b;">Recommended Actions:</h3>
            <ul style="color: #475569; line-height: 1.6;">
              <li>✅ Add to your email marketing list</li>
              <li>📊 Track subscription metrics</li>
              <li>🎁 Consider early bird discount for launch</li>
              <li>📱 Send welcome/confirmation email to subscriber</li>
            </ul>
            
            <p style="color: #475569; margin-top: 30px;">
              Keep building that momentum! Each subscription brings you closer to a successful launch. 
              <span class="highlight">Your audience is growing!</span>
            </p>
          </div>
          
          <div class="footer">
            <strong>RavoActive</strong> - Premium activewear for athletes who demand excellence<br>
            Coming Soon • Building the Future of Athletic Wear
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
🎉 NEW RAVOACTIVE WAITLIST SUBSCRIPTION

A new subscriber just joined your waitlist!

Subscriber Email: ${subscriberEmail}
Subscription Time: ${timestamp}

This represents:
- Growing interest in RavoActive
- Engaged audience member
- Potential early customer
- Launch day notification recipient

Recommended actions:
- Add to email marketing list
- Track subscription metrics  
- Consider early bird promotions
- Send welcome email to subscriber

Keep building that momentum!

---
RavoActive - Premium activewear for athletes who demand excellence
Coming Soon
    `
  }
}

// Welcome email template for the subscriber
const createWelcomeEmail = (subscriberEmail: string) => {
  return {
    from: process.env.EMAIL_USER || 'noreply@ravoactive.com',
    to: subscriberEmail,
    subject: '🔥 Welcome to RavoActive - You\'re In!',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to RavoActive</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden; }
          .header { background: linear-gradient(135deg, #ff6b6b, #43d9ad); padding: 40px 30px; text-align: center; }
          .header h1 { color: #ffffff; margin: 0; font-size: 28px; font-weight: bold; }
          .content { padding: 40px 30px; }
          .welcome-badge { display: inline-block; background-color: #ff6b6b; color: white; padding: 10px 20px; border-radius: 25px; font-size: 16px; font-weight: 600; margin-bottom: 25px; }
          .benefits { background-color: #f8fafc; border-radius: 8px; padding: 25px; margin: 25px 0; }
          .benefit-item { margin-bottom: 15px; color: #475569; font-size: 16px; }
          .benefit-item:last-child { margin-bottom: 0; }
          .cta-button { display: inline-block; background-color: #ff6b6b; color: white; text-decoration: none; padding: 15px 30px; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 20px 0; }
          .footer { background-color: #1e293b; color: #94a3b8; padding: 30px; text-align: center; font-size: 14px; }
          .footer strong { color: #ffffff; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Welcome to RavoActive!</h1>
          </div>
          
          <div class="content">
            <div class="welcome-badge">You're on the list!</div>
            
            <h2 style="color: #1e293b; margin-bottom: 15px;">Thanks for joining our exclusive waitlist!</h2>
            
            <p style="color: #475569; font-size: 18px; line-height: 1.6; margin-bottom: 25px;">
              You're now part of an elite group who will be the first to experience premium activewear designed for athletes who demand excellence.
            </p>
            
            <div class="benefits">
              <h3 style="color: #1e293b; margin-top: 0;">What you can expect:</h3>
              <div class="benefit-item">🚀 <strong>Early Access:</strong> Be the first to shop our collection</div>
              <div class="benefit-item">💰 <strong>Exclusive Discounts:</strong> Special launch pricing just for you</div>
              <div class="benefit-item">📧 <strong>Insider Updates:</strong> Behind-the-scenes content and launch news</div>
              <div class="benefit-item">🎁 <strong>VIP Treatment:</strong> Priority customer support and perks</div>
            </div>
            
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              We're putting the finishing touches on our revolutionary activewear line. Every piece is engineered for peak performance and designed to elevate your athletic journey.
            </p>
            
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              <strong>Get ready to elevate your performance.</strong>
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="#" class="cta-button">Follow Our Journey</a>
            </div>
            
            <p style="color: #94a3b8; font-size: 14px; text-align: center; margin-top: 30px;">
              Questions? Reply to this email - we'd love to hear from you!
            </p>
          </div>
          
          <div class="footer">
            <strong>RavoActive</strong><br>
            Premium activewear for athletes who demand excellence<br><br>
            You received this email because you subscribed to our waitlist.<br>
            <a href="#" style="color: #94a3b8;">Unsubscribe</a> | <a href="#" style="color: #94a3b8;">Update Preferences</a>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
🎉 WELCOME TO RAVOACTIVE!

Thanks for joining our exclusive waitlist!

You're now part of an elite group who will be the first to experience premium activewear designed for athletes who demand excellence.

What you can expect:
🚀 Early Access - Be the first to shop our collection
💰 Exclusive Discounts - Special launch pricing just for you  
📧 Insider Updates - Behind-the-scenes content and launch news
🎁 VIP Treatment - Priority customer support and perks

We're putting the finishing touches on our revolutionary activewear line. Every piece is engineered for peak performance and designed to elevate your athletic journey.

Get ready to elevate your performance.

Questions? Reply to this email - we'd love to hear from you!

---
RavoActive
Premium activewear for athletes who demand excellence

You received this email because you subscribed to our waitlist.
    `
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Create timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Toronto',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })

    // Check if email service is configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.log('Email service not configured. Subscription would be:', {
        email,
        timestamp,
        notificationSentTo: NOTIFICATION_EMAIL
      })
      
      return NextResponse.json({ 
        success: true, 
        message: 'Subscription successful!' 
      })
    }

    // Create transporter
    const transporter = createTransporter()

    // Send notification email to admin
    const notificationEmail = createSubscriptionEmail(email, timestamp)
    await transporter.sendMail(notificationEmail)

    // Send welcome email to subscriber
    const welcomeEmail = createWelcomeEmail(email)
    await transporter.sendMail(welcomeEmail)

    // Log successful subscription
    console.log(`New subscription: ${email} at ${timestamp}`)

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for subscribing! Check your email for confirmation.' 
    })

  } catch (error) {
    console.error('Subscription error:', error)
    
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}