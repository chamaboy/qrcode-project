import * as functions from 'firebase-functions';
import Stripe from 'stripe';

export const stripe = new Stripe(functions.config().stripe.key, {
  apiVersion: '2020-03-02',
});
