import Stripe from 'stripe';
import config from "config";

const stripe = new Stripe(config.get("stripeKey") as string, { apiVersion: '2020-08-27' });

export const createCharge = async (amount: number, source: string) => {
    return stripe.charges.create({ amount, currency: 'gbp', source });
}