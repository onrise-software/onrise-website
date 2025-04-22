import type { APIRoute } from 'astro';

// Replace with your actual Cloudflare Turnstile secret key
const TURNSTILE_SECRET_KEY = '0x4AAAAAABRnBud0Gj1_JlQrYwgYl8x7MyI';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const turnstileResponse = formData.get('cf-turnstile-response');
    const name = formData.get('name');
    const email = formData.get('email');
    // Company is optional but collected for business context
    const company = formData.get('company');
    const message = formData.get('message');
    const disclaimer = formData.get('disclaimer');

    // Validate required fields
    if (!turnstileResponse || !name || !email || !message || !disclaimer) {
      return new Response(
        JSON.stringify({
          message: 'Missing required fields',
        }),
        { status: 400 }
      );
    }

    // Verify Turnstile response
    const verificationResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: TURNSTILE_SECRET_KEY,
          response: turnstileResponse,
        }),
      }
    );

    const verificationResult = await verificationResponse.json();

    if (!verificationResult.success) {
      return new Response(
        JSON.stringify({
          message: 'Turnstile verification failed',
        }),
        { status: 400 }
      );
    }

    // Process the form submission (e.g., send email, save to database, etc.)
    // Add your form processing logic here
    console.log('Form submission:', { name, email, company, message });

    return new Response(
      JSON.stringify({
        message: 'Form submitted successfully',
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return new Response(
      JSON.stringify({
        message: 'Internal server error',
      }),
      { status: 500 }
    );
  }
}; 