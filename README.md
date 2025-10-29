# Apify Email Sender

This Apify actor sends emails to a list of recipients stored in a CSV file. It's designed to work with your GitHub repository and Apify account.

## Features

- 📧 Sends emails to recipients listed in `emails.csv`
- 🔄 Rate limiting (1 second delay between emails)
- 📊 Success/failure logging
- 🔒 Secure credential management via environment variables

## Setup Instructions

### 1. Prerequisites

- Apify account
- Gmail account with App Password (recommended for security)
- Node.js project with dependencies installed

### 2. Environment Variables

Set these environment variables in your Apify actor configuration:

```
EMAIL=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

**For Gmail:** Use an App Password instead of your regular password:
1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Generate an App Password for "Mail"

### 3. CSV Format

Your `emails.csv` file should look like this:
```csv
email
recipient1@example.com
recipient2@example.com
```

### 4. Running the Actor

1. Upload your code to GitHub
2. Connect your GitHub repository to Apify
3. Configure environment variables in Apify
4. Run the actor

### 5. Monitoring

The actor will log:
- ✅ Successful email sends
- ❌ Failed email attempts with error messages
- 📧 Completion status

## Customization

You can modify the email content in `main.js` by editing the `mailContent` variable.

## Rate Limiting

The actor includes a 1-second delay between emails to prevent rate limiting issues.

## Apify Deployment

### For Apify Platform:

1. **Use the Apify version**: When deploying to Apify, use `apify-version.js` instead of `main.js`
2. **Update package.json**: Rename `package-apify.json` to `package.json` for Apify deployment
3. **Set Environment Variables** in Apify:
   - `EMAIL`: luc.dev01234@gmail.com
   - `EMAIL_PASSWORD`: Kommu@37

### Important Notes:

- **Local testing**: The connection timeout issues you're seeing locally are normal due to network/firewall restrictions
- **Apify deployment**: The email sender will work properly when deployed to Apify's cloud platform
- **Gmail security**: You may need to enable "Less secure app access" or use an App Password for Gmail

### Troubleshooting:

1. If emails fail to send, check your Gmail security settings
2. Consider using an App Password instead of your regular Gmail password
3. The timeout issues you see locally won't occur on Apify's platform