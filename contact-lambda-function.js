
/**
 * AWS Lambda function for handling contact form submissions
 * This function integrates with Amazon SES to send emails
 * 
 * DEPLOYMENT INSTRUCTIONS:
 * 1. Create a new Lambda function in AWS Console
 * 2. Set runtime to Node.js 18.x or later
 * 3. Copy this code into the Lambda function
 * 4. Configure environment variables (see below)
 * 5. Add appropriate IAM permissions for SES
 * 6. Create API Gateway endpoint pointing to this function
 * 7. Enable CORS in API Gateway
 */

const AWS = require('aws-sdk');

// Configure AWS SES client
// The region should match where your SES is configured
const ses = new AWS.SES({ 
    region: process.env.AWS_SES_REGION || 'us-east-1' 
});

/**
 * Environment Variables Required:
 * - AWS_SES_REGION: AWS region where SES is configured (e.g., 'us-east-1')
 * - SES_FROM_EMAIL: Verified sender email address in SES (e.g., 'noreply@cittamarketingagency.in')
 * - SES_TO_EMAIL: Recipient email address for form submissions (e.g., 'team@cittamarketingagency.in')
 * - ALLOWED_ORIGINS: Comma-separated list of allowed origins for CORS (e.g., 'https://cittamarketingagency.in,https://www.cittamarketingagency.in')
 */

exports.handler = async (event) => {
    // Configure CORS headers for browser compatibility
    // These headers allow the frontend to make requests to this Lambda function
    const allowedOrigins = (process.env.ALLOWED_ORIGINS || '').split(',');
    const origin = event.headers?.origin || event.headers?.Origin;
    const corsOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
    
    const headers = {
        'Access-Control-Allow-Origin': corsOrigin || '*',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };
    
    try {
        // Handle preflight OPTIONS request for CORS
        if (event.httpMethod === 'OPTIONS') {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ message: 'CORS preflight successful' })
            };
        }
        
        // Only allow POST requests for form submissions
        if (event.httpMethod !== 'POST') {
            return {
                statusCode: 405,
                headers,
                body: JSON.stringify({ 
                    success: false, 
                    message: 'Method not allowed. Only POST requests are accepted.' 
                })
            };
        }
        
        // Parse and validate the incoming request body
        if (!event.body) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ 
                    success: false, 
                    message: 'Request body is required' 
                })
            };
        }
        
        const body = JSON.parse(event.body);
        console.log('Received contact form submission:', {
            timestamp: body.timestamp,
            name: body.name,
            email: body.email,
            source: body.source
        });
        
        // Validate required fields
        const { name, email, message, company, timestamp, source } = body;
        
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ 
                    success: false, 
                    message: 'Name, email, and message are required fields' 
                })
            };
        }
        
        // Validate email format using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ 
                    success: false, 
                    message: 'Invalid email format' 
                })
            };
        }
        
        // Validate message length to prevent spam
        if (message.length < 10 || message.length > 2000) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ 
                    success: false, 
                    message: 'Message must be between 10 and 2000 characters' 
                })
            };
        }
        
        // Sanitize input data to prevent XSS in emails
        const sanitizedData = {
            name: name.replace(/[<>]/g, ''),
            email: email.toLowerCase().trim(),
            company: company ? company.replace(/[<>]/g, '') : 'Not provided',
            message: message.replace(/[<>]/g, ''),
            timestamp: timestamp || new Date().toISOString(),
            source: source || 'unknown'
        };
        
        // Configure email parameters for SES
        const fromEmail = process.env.SES_FROM_EMAIL || 'noreply@cittamarketingagency.in';
        const toEmail = process.env.SES_TO_EMAIL || 'team@cittamarketingagency.in';
        
        // Create HTML email template with professional styling
        const htmlBody = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>New Contact Form Submission</title>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                    .content { background-color: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
                    .field { margin-bottom: 15px; }
                    .label { font-weight: bold; color: #1e40af; }
                    .value { margin-top: 5px; padding: 10px; background-color: white; border-radius: 4px; border-left: 4px solid #2563eb; }
                    .message-content { white-space: pre-wrap; }
                    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>New Contact Form Submission</h1>
                        <p>You have received a new inquiry from your website contact form.</p>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">Name:</div>
                            <div class="value">${sanitizedData.name}</div>
                        </div>
                        <div class="field">
                            <div class="label">Email:</div>
                            <div class="value">${sanitizedData.email}</div>
                        </div>
                        <div class="field">
                            <div class="label">Company:</div>
                            <div class="value">${sanitizedData.company}</div>
                        </div>
                        <div class="field">
                            <div class="label">Message:</div>
                            <div class="value message-content">${sanitizedData.message}</div>
                        </div>
                        <div class="footer">
                            <p><strong>Submission Details:</strong></p>
                            <p>Submitted at: ${sanitizedData.timestamp}</p>
                            <p>Source: ${sanitizedData.source}</p>
                            <p>This message was sent from your website contact form.</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;
        
        // Create plain text version for email clients that don't support HTML
        const textBody = `
New Contact Form Submission

Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Company: ${sanitizedData.company}
Message: ${sanitizedData.message}

Submission Details:
Submitted at: ${sanitizedData.timestamp}
Source: ${sanitizedData.source}

This message was sent from your website contact form.
        `;
        
        // Configure SES email parameters
        const emailParams = {
            Destination: {
                ToAddresses: [toEmail]
            },
            Message: {
                Body: {
                    Html: {
                        Data: htmlBody,
                        Charset: 'UTF-8'
                    },
                    Text: {
                        Data: textBody,
                        Charset: 'UTF-8'
                    }
                },
                Subject: {
                    Data: `New Contact Form Submission from ${sanitizedData.name}`,
                    Charset: 'UTF-8'
                }
            },
            Source: fromEmail,
            ReplyToAddresses: [sanitizedData.email], // Allow direct reply to the sender
            Tags: [
                {
                    Name: 'MessageType',
                    Value: 'ContactForm'
                },
                {
                    Name: 'Source',
                    Value: sanitizedData.source
                }
            ]
        };
        
        // Send email via Amazon SES
        console.log('Sending email via SES:', {
            from: fromEmail,
            to: toEmail,
            subject: emailParams.Message.Subject.Data
        });
        
        const sesResult = await ses.sendEmail(emailParams).promise();
        
        console.log('Email sent successfully:', {
            messageId: sesResult.MessageId,
            timestamp: new Date().toISOString()
        });
        
        // Send auto-reply email to the person who submitted the form
        const autoReplyParams = {
            Destination: {
                ToAddresses: [sanitizedData.email]
            },
            Message: {
                Body: {
                    Html: {
                        Data: `
                            <!DOCTYPE html>
                            <html>
                            <head>
                                <meta charset="UTF-8">
                                <title>Thank you for your inquiry</title>
                                <style>
                                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                                    .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
                                    .content { background-color: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
                                </style>
                            </head>
                            <body>
                                <div class="container">
                                    <div class="header">
                                        <h1>Thank You for Your Inquiry!</h1>
                                    </div>
                                    <div class="content">
                                        <p>Dear ${sanitizedData.name},</p>
                                        <p>Thank you for reaching out to us! We have received your message and will get back to you within 24 hours.</p>
                                        <p>Our team is excited to learn more about your project and discuss how we can help transform your digital marketing strategy.</p>
                                        <p>Best regards,<br>The Citta Marketing Agency Team</p>
                                        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
                                        <p style="font-size: 12px; color: #64748b;">
                                            This is an automated response. Please do not reply to this email. 
                                            If you have any urgent questions, please contact us directly at team@cittamarketingagency.in
                                        </p>
                                    </div>
                                </div>
                            </body>
                            </html>
                        `,
                        Charset: 'UTF-8'
                    }
                },
                Subject: {
                    Data: 'Thank you for your inquiry - Citta Marketing Agency',
                    Charset: 'UTF-8'
                }
            },
            Source: fromEmail,
            Tags: [
                {
                    Name: 'MessageType',
                    Value: 'AutoReply'
                }
            ]
        };
        
        // Send auto-reply (don't fail the main request if this fails)
        try {
            await ses.sendEmail(autoReplyParams).promise();
            console.log('Auto-reply sent successfully');
        } catch (autoReplyError) {
            console.warn('Failed to send auto-reply, but main email was successful:', autoReplyError);
        }
        
        // Return success response to the frontend
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                message: 'Email sent successfully',
                messageId: sesResult.MessageId
            })
        };
        
    } catch (error) {
        // Comprehensive error logging for debugging
        console.error('Error processing contact form submission:', {
            error: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString(),
            event: {
                httpMethod: event.httpMethod,
                origin: event.headers?.origin,
                userAgent: event.headers?.['User-Agent']
            }
        });
        
        // Return appropriate error response based on error type
        let statusCode = 500;
        let errorMessage = 'Internal server error. Please try again later.';
        
        if (error.code === 'MessageRejected') {
            statusCode = 400;
            errorMessage = 'Email could not be sent. Please check your email address.';
        } else if (error.code === 'SendingQuotaExceeded') {
            statusCode = 429;
            errorMessage = 'Service temporarily unavailable. Please try again later.';
        } else if (error.name === 'SyntaxError') {
            statusCode = 400;
            errorMessage = 'Invalid request format.';
        }
        
        return {
            statusCode,
            headers,
            body: JSON.stringify({
                success: false,
                message: errorMessage,
                timestamp: new Date().toISOString()
            })
        };
    }
};

/**
 * SETUP INSTRUCTIONS:
 * 
 * 1. AWS SES Configuration:
 *    - Verify your sending domain in SES
 *    - Verify the sender email address (SES_FROM_EMAIL)
 *    - If in sandbox mode, verify recipient email addresses
 *    - Request production access if needed
 * 
 * 2. Lambda Function Setup:
 *    - Create new Lambda function with Node.js runtime
 *    - Set timeout to at least 30 seconds
 *    - Configure environment variables (see list above)
 *    - Add execution role with SES permissions
 * 
 * 3. IAM Permissions:
 *    Add this policy to your Lambda execution role:
 *    {
 *        "Version": "2012-10-17",
 *        "Statement": [
 *            {
 *                "Effect": "Allow",
 *                "Action": [
 *                    "ses:SendEmail",
 *                    "ses:SendRawEmail"
 *                ],
 *                "Resource": "*"
 *            }
 *        ]
 *    }
 * 
 * 4. API Gateway Setup:
 *    - Create new REST API
 *    - Create POST method pointing to Lambda function
 *    - Enable CORS with appropriate origins
 *    - Deploy API and note the endpoint URL
 * 
 * 5. Frontend Configuration:
 *    - Set VITE_API_GATEWAY_URL environment variable to your API endpoint
 *    - Test the integration end-to-end
 */
