export interface PaymentRef {
    _id: string,
    institution_id: string,
    subscription_id: string,
    service_provider: string,
    ref: string,
    currency: string,
    amount: string,
    timestamp: number
}