'use server';

import { stripe } from '@/lib/stripe';
import { adminAuth } from '@/lib/firebase-admin';

export async function startCheckoutSession(
  priceId: string,
  idToken: string
) {
  const decodedToken = await adminAuth.verifyIdToken(idToken);

  if (!decodedToken.email) {
    throw new Error(
      'Please register or sign in with an email before subscribing'
    );
  }

  const firebaseUID = decodedToken.uid;
  
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded_page',
    redirect_on_completion: 'never',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
  })

    if (!session.client_secret) {
    throw new Error("Stripe checkout session did not return a client secret");
    }

    return session.client_secret;
  
}

