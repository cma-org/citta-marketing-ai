
# Contact Form Integration Setup Guide

This guide provides step-by-step instructions for setting up the contact form integration with Amazon SES using Lambda Function URL.

## Prerequisites

- AWS Account with appropriate permissions
- Domain verified in Amazon SES (or sandbox mode for testing)
- Basic knowledge of AWS Lambda

## Step 1: Amazon SES Setup

### 1.1 Verify Your Domain/Email
1. Go to AWS SES Console
2. Navigate to "Verified identities"
3. Click "Create identity"
4. Choose "Domain" (recommended) or "Email address"
5. Enter your domain (e.g., `cittamarketingagency.in`)
6. Follow verification steps (DNS records or email confirmation)

### 1.2 Request Production Access (if needed)
- If sending to unverified email addresses, request production access
- This may take 24-48 hours for AWS to review

## Step 2: AWS Lambda Function Setup

### 2.1 Create Lambda Function
1. Go to AWS Lambda Console
2. Click "Create function"
3. Choose "Author from scratch"
4. Function name: `contact-form-handler`
5. Runtime: Node.js 18.x (or later)
6. Click "Create function"

### 2.2 Configure Function Code
1. Copy the code from `src/utils/contact-lambda-function.js`
2. Paste it into the Lambda function editor
3. Click "Deploy"

### 2.3 Set Environment Variables
In the Lambda function configuration, add these environment variables:

```
AWS_SES_REGION=us-east-1
SES_FROM_EMAIL=noreply@cittamarketingagency.in
SES_TO_EMAIL=team@cittamarketingagency.in
ALLOWED_ORIGINS=https://cittamarketingagency.in,https://www.cittamarketingagency.in
```

### 2.4 Configure Function Settings
- Timeout: 30 seconds
- Memory: 128 MB (default is sufficient)

## Step 3: IAM Role Configuration

### 3.1 Create SES Policy
1. Go to IAM Console
2. Create new policy with this JSON:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ses:SendEmail",
                "ses:SendRawEmail"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "logs:CreateLogGroup",
                "logs:CreateLogStream",
                "logs:PutLogEvents"
            ],
            "Resource": "arn:aws:logs:*:*:*"
        }
    ]
}
```

### 3.2 Attach Policy to Lambda Role
1. Go to your Lambda function
2. Click "Configuration" > "Permissions"
3. Click on the execution role
4. Attach the policy created above

## Step 4: Lambda Function URL Setup

### 4.1 Enable Function URL
1. Go to your Lambda function in AWS Console
2. Click "Configuration" tab
3. Select "Function URL" from the left menu
4. Click "Create function URL"

### 4.2 Configure Function URL
1. **Auth type**: NONE (for public access)
2. **Invoke mode**: BUFFERED (default)
3. Click "Save"

### 4.3 Configure CORS
1. In the Function URL configuration, expand "Cross-origin resource sharing (CORS)"
2. Configure the following:
   - **Allow origin**: `*` (or specify your domains like `https://cittaai.com`)
   - **Allow headers**: `content-type, x-requested-with`
   - **Allow methods**: `POST, OPTIONS`
   - **Max age**: `86400` (optional, for caching preflight requests)
3. Click "Save"

### 4.4 Copy Function URL
- Copy the generated Function URL (ends with `.lambda-url.region.on.aws/`)
- This is your endpoint for the contact form

## Step 5: Frontend Configuration

### 5.1 Set Environment Variable
Create or update your environment configuration (this would be in your deployment environment):

```
VITE_LAMBDA_FUNCTION_URL=https://abc123def456.lambda-url.us-east-1.on.aws/
```

Replace with your actual Lambda Function URL from Step 4.4.

### 5.2 Test Integration
1. Deploy your frontend application
2. Fill out the contact form
3. Check that emails are received
4. Verify auto-reply emails are sent

## Step 6: Testing and Monitoring

### 6.1 Test Cases
- Valid form submission
- Invalid email format
- Missing required fields
- Rate limiting (multiple quick submissions)
- CORS from different origins

### 6.2 Monitor Logs
- Lambda function logs in CloudWatch
- Lambda Function URL access logs
- SES sending statistics

### 6.3 Error Handling
- Check Lambda function errors in CloudWatch
- Verify SES bounce/complaint handling
- Test error messages in frontend

## Security Considerations

1. **Rate Limiting**: The current implementation has basic rate limiting. Consider AWS WAF for additional protection.

2. **Input Validation**: All inputs are sanitized, but consider additional validation rules.

3. **CORS Configuration**: Restrict CORS to specific domains in production.

4. **Function URL Security**: Consider implementing authentication if additional security is needed.

5. **Email Content**: Auto-replies and notifications are sanitized to prevent XSS.

## Troubleshooting

### Common Issues

1. **"Email address not verified" error**
   - Verify sender email in SES console
   - If in sandbox mode, verify recipient emails too

2. **CORS errors**
   - Check Lambda Function URL CORS configuration
   - Ensure frontend origin is in ALLOWED_ORIGINS

3. **Lambda timeout errors**
   - Increase Lambda timeout to 30+ seconds
   - Check for SES region configuration

4. **Rate limiting issues**
   - Check SES sending limits
   - Verify Lambda concurrent execution limits

5. **Email not received**
   - Check SES bounce/complaint notifications
   - Verify email addresses are correct
   - Check spam folders

### Debug Steps

1. Check CloudWatch logs for Lambda function
2. Test Lambda function directly with test events
3. Verify SES sending statistics
4. Test Lambda Function URL with tools like Postman
5. Check browser network tab for frontend requests

## Maintenance

### Regular Tasks
- Monitor SES bounce/complaint rates
- Review CloudWatch logs for errors
- Update Lambda function dependencies
- Review and update CORS origins
- Monitor Lambda Function URL usage

### Scaling Considerations
- SES sending limits may need increases
- Lambda concurrent execution limits
- Lambda Function URL has no additional throttling limits
- Consider DLQ for failed email attempts

## Cost Optimization

- SES: $0.10 per 1,000 emails
- Lambda: Very low for contact form usage
- Lambda Function URL: No additional charges beyond Lambda
- CloudWatch Logs: Monitor retention settings

Total estimated cost for typical contact form usage: < $3/month (no API Gateway costs)
