# EmailJS Setup Guide

## Quick Setup Steps

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account (200 emails/month free)

2. **Add Email Service**
   - Go to Dashboard > Email Services
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Copy your **Service ID**

3. **Create Email Template**
   - Go to Dashboard > Email Templates
   - Click "Create New Template"
   - Use this template structure:
   
   ```
   Subject: New Contact Form Submission from {{user_name}}
   
   From: {{user_email}}
   Name: {{user_name}}
   Project Type: {{project_type}}
   
   Message:
   {{message}}
   ```
   
   - Save and copy your **Template ID**

4. **Get Public Key**
   - Go to Dashboard > Account > API Keys
   - Copy your **Public Key**

5. **Get Your Credentials**

   **Service ID:**
   - Go to Dashboard > Email Services
   - Click on your service
   - Copy the **Service ID** (starts with `service_`)

   **Template ID:**
   - Go to Dashboard > Email Templates
   - Click on your template
   - Copy the **Template ID** (starts with `template_`)

   **Public Key (IMPORTANT - Most Common Error!):**
   - Go to Dashboard > **Account** (top right) > **API Keys**
   - Copy the **PUBLIC KEY** (NOT the Private Key!)
   - It should look like: `AbCdEfGhIjKlMnOpQrStUvWxYz123456`
   - Make sure you're copying the PUBLIC KEY, not Private Key!

6. **Update Contact.tsx**

   **Option 1: Direct Update (Quick)**
   - Open `src/components/portfolio/Contact.tsx`
   - Find these lines (around line 57-59):
   ```typescript
   const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
   const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
   const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
   ```
   - Replace `'YOUR_SERVICE_ID'`, `'YOUR_TEMPLATE_ID'`, and `'YOUR_PUBLIC_KEY'` with your actual values:
   ```typescript
   const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_abc123';
   const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xyz789';
   const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'AbCdEfGhIjKlMnOpQrStUvWxYz123456';
   ```

   **Option 2: Environment Variables (Recommended for Production)**
   - Create a `.env` file in your project root:
   ```
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOpQrStUvWxYz123456
   ```
   - Add `.env` to `.gitignore` to keep credentials secure
   - Restart your dev server after creating `.env`

6. **Test the Form**
   - Fill out the contact form
   - Submit and check your email inbox
   - You should receive the email instantly!

## Form Field Names (Already Configured)
- `user_name` - Name field
- `user_email` - Email field  
- `project_type` - Project type field
- `message` - Message field

These match the EmailJS template variables: `{{user_name}}`, `{{user_email}}`, `{{project_type}}`, `{{message}}`

## Troubleshooting

### "Public Key is invalid" Error
- **Most Common Issue!** Make sure you're copying the **PUBLIC KEY**, not the Private Key
- Go to Dashboard > Account > API Keys
- Copy the **PUBLIC KEY** (the one you can see, not hidden)
- Double-check there are no extra spaces when pasting
- The Public Key should be a long string like: `AbCdEfGhIjKlMnOpQrStUvWxYz123456`

### "Service ID is invalid" Error
- Check that your Service ID starts with `service_`
- Make sure your email service is active in EmailJS dashboard
- Verify the service is connected to your email provider

### "Template ID is invalid" Error
- Check that your Template ID starts with `template_`
- Make sure the template is published (not draft)
- Verify template variables match form field names:
  - `{{user_name}}`
  - `{{user_email}}`
  - `{{project_type}}`
  - `{{message}}`

### General Issues
- Make sure all three IDs are correct (no typos, no extra spaces)
- Check EmailJS dashboard for any errors
- Verify your email service is connected properly
- Check browser console (F12) for detailed error messages
- Make sure you've restarted your dev server after updating credentials
- Free tier allows 200 emails/month - check if you've exceeded limit
