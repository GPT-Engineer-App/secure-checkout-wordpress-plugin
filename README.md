# secure-checkout-wordpress-plugin

Secure Checkout Plugin for WordPress: A plugin designed to securely transmit cart details and payment information to an external payment processor, ensuring the confidentiality of delivery addresses, and enabling cart sharing features. It integrates with Stripe for payment processing and offers a REST API endpoint for generating shareable cart links. The plugin is structured with a main controller class that extends the WP_REST_Controller, providing methods for processing payments, validating and sanitizing request parameters, decrypting data, and generating shareable cart links. It's designed to ensure user authentication for sensitive actions and to store shared cart details securely in the database.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/secure-checkout-wordpress-plugin.git
cd secure-checkout-wordpress-plugin
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
