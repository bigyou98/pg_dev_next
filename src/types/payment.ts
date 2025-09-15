export interface PaymentRequest {
  payMethod: string;
  amount: number;
  orderId: string;
  orderName: string;
  customerName: string;
  customerEmail: string;
  customerMobile: string;
  [key: string]: any;
}

export interface PaymentResponse {
  success: boolean;
  message: string;
  data?: {
    paymentUrl?: string;
    paymentToken?: string;
    orderId?: string;
  };
}

export interface PaymentCallback {
  success: boolean;
  orderId: string;
  amount: number;
  paymentMethod: string;
  transactionId?: string;
  errorMessage?: string;
}
