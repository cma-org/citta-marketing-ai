
# Contact Form Integration Setup Guide

This guide provides step-by-step instructions for setting up the contact form integration with Amazon SES.

## Prerequisites

- AWS Account with appropriate permissions
- Domain verified in Amazon SES (or sandbox mode for testing)
- Basic knowledge of AWS Lambda and API Gateway

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

## Step 4: API Gateway Setup

### 4.1 Create REST API
1. Go to API Gateway Console
2. Click "Create API"
3. Choose "REST API" (not private)
4. API name: `contact-form-api`
5. Click "Create API"

### 4.2 Create Resource and Method
1. Click "Actions" > "Create Resource"
2. Resource name: `contact`
3. Resource path: `/contact`
4. Click "Create Resource"
5. Select the `/contact` resource
6. Click "Actions" > "Create Method"
7. Choose "POST"
8. Integration type: Lambda Function
9. Select your Lambda function
10. Click "Save"

### 4.3 Enable CORS
1. Select the `/contact` resource
2. Click "Actions" > "Enable CORS"
3. Access-Control-Allow-Origin: `*` (or specific domains)
4. Access-Control-Allow-Headers: `Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Requested-With`
5. Access-Control-Allow-Methods: `POST,OPTIONS`
6. Click "Enable CORS and replace existing CORS headers"

### 4.4 Deploy API
1. Click "Actions" > "Deploy API"
2. Deployment stage: `prod`
3. Click "Deploy"
4. Note the "Invoke URL" - this is your API endpoint

## Step 5: Frontend Configuration

### 5.1 Set Environment Variable
Create or update your `.env` file (this would be in your deployment environment):

```
VITE_API_GATEWAY_URL=https://your-api-id.execute-api.us-east-1.amazonaws.com/prod/contact
```

Replace with your actual API Gateway URL from Step 4.4.

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
- API Gateway access logs
- SES sending statistics

### 6.3 Error Handling
- Check Lambda function errors in CloudWatch
- Verify SES bounce/complaint handling
- Test error messages in frontend

## Security Considerations

1. **Rate Limiting**: The current implementation has basic rate limiting. Consider AWS WAF for additional protection.

2. **Input Validation**: All inputs are sanitized, but consider additional validation rules.

3. **CORS Configuration**: Restrict CORS to specific domains in production.

4. **API Authentication**: Consider adding API keys or other authentication for additional security.

5. **Email Content**: Auto-replies and notifications are sanitized to prevent XSS.

## Troubleshooting

### Common Issues

1. **"Email address not verified" error**
   - Verify sender email in SES console
   - If in sandbox mode, verify recipient emails too

2. **CORS errors**
   - Check API Gateway CORS configuration
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
4. Test API Gateway endpoint with tools like Postman
5. Check browser network tab for frontend requests

## Maintenance

### Regular Tasks
- Monitor SES bounce/complaint rates
- Review CloudWatch logs for errors
- Update Lambda function dependencies
- Review and update CORS origins
- Monitor API Gateway usage

### Scaling Considerations
- SES sending limits may need increases
- Lambda concurrent execution limits
- API Gateway throttling limits
- Consider DLQ for failed email attempts

## Cost Optimization

- SES: $0.10 per 1,000 emails
- Lambda: Very low for contact form usage
- API Gateway: $3.50 per million requests
- CloudWatch Logs: Monitor retention settings

Total estimated cost for typical contact form usage: < $5/month
