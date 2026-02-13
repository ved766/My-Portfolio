# Quick EmailJS Setup - 5 Minutes

## Step-by-Step Instructions

### 1. Get Your EmailJS Credentials

**A. Service ID:**
- Go to: https://dashboard.emailjs.com/admin/integration
- Click on your email service (or create one if you haven't)
- Copy the **Service ID** (looks like: `service_abc123`)

**B. Template ID:**
- Go to: https://dashboard.emailjs.com/admin/template
- Click on your template (or create one)
- Copy the **Template ID** (looks like: `template_xyz789`)

**C. Public Key (MOST IMPORTANT!):**
- Go to: https://dashboard.emailjs.com/admin/account
- Scroll to **API Keys** section
- Copy the **PUBLIC KEY** (the visible one, NOT the Private Key!)
- It's a long string like: `AbCdEfGhIjKlMnOpQrStUvWxYz123456`

### 2. Update Your Code

**Option A: Using Environment Variables (Recommended)**

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and replace the values:
   ```
   VITE_EMAILJS_SERVICE_ID=service_your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=template_your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

3. Restart your dev server:
   ```bash
   npm run dev
   ```

**Option B: Direct Update (Quick Test)**

1. Open `src/components/portfolio/Contact.tsx`
2. Find lines 60, 63, and 67
3. Replace the placeholder values:

```typescript
// Line 60 - Replace 'YOUR_SERVICE_ID'
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_your_actual_id';

// Line 63 - Replace 'YOUR_TEMPLATE_ID'  
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_your_actual_id';

// Line 67 - Replace 'YOUR_PUBLIC_KEY'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_actual_public_key';
```

### 3. Test the Form

1. Fill out the contact form on your website
2. Click "Send Message"
3. You should see a success message
4. Check your email inbox!

## Common Mistakes to Avoid

❌ **Copying Private Key instead of Public Key**
- ✅ Use the PUBLIC KEY (visible, copyable)
- ❌ Don't use Private Key (hidden, starts with "prv_")

❌ **Extra spaces in the key**
- Make sure there are no spaces before/after when pasting

❌ **Wrong Service ID format**
- Should start with `service_`
- Should be from Email Services page

❌ **Wrong Template ID format**
- Should start with `template_`
- Should be from Email Templates page

## Still Not Working?

1. Check browser console (F12) for detailed errors
2. Verify all three IDs are correct in EmailJS dashboard
3. Make sure your email service is connected
4. Ensure template is published (not draft)
5. Check if you've exceeded free tier limit (200 emails/month)

## Need Help?

- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Dashboard: https://dashboard.emailjs.com/
- Check the full guide: `EMAILJS_SETUP.md`
