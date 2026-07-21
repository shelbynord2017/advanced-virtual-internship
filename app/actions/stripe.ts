// 'use server'

// import { headers } from 'next/headers'
// import { stripe } from 'app/stripe'

// export async function startCheckoutSession(productId: string) {
//   // Implement your product catalog lookup.
//   const product = await getProduct(productId)

//   // Create Checkout Sessions from body params.
//   const session = await stripe.checkout.sessions.create({
//     ui_mode: 'embedded',
//     redirect_on_completion: 'never',
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: "Premium Plus",
//             description: "Yearly Subscription with 7-day free trial",
//           },
//           unit_amount: 9999,
//         },
//         quantity: 1,
//       },
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: "Premium",
//             description: "Monthly Subscription with 7-day free trial",
//           },
//           unit_amount: 999,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//   })

//   return session.client_secret
// }