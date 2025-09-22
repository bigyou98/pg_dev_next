import { commonRequest } from '@/apis/common';
import { PaymentRequest, PaymentResponse } from '@/types/payment';

// ! 우회용 : client -> next.js server

export const kiwoom = {
  // 결제 준비 - 서버에 결제 정보를 전송하고 결제 토큰을 받음
  hash: async (paymentData: PaymentRequest): Promise<PaymentResponse> => {
    try {
      const response = await commonRequest.post('kiwoom/hash', paymentData);
      return response.data;
    } catch (error) {
      console.error('Payment ready failed:', error);
      throw error;
    }
  },

  payment: async (data: any): Promise<PaymentResponse> => {
    try {
      const response = await commonRequest.post('paymentAPI', data);
      return response.data;
    } catch (error) {
      console.error('Payment ready failed:', error);
      throw error;
    }
  },

  cancelPayment: async (data: any): Promise<any> => {
    try {
      const response = await commonRequest.post('cancelPay', data);
      return response.data;
    } catch (error) {
      console.error('Payment ready failed:', error);
      throw error;
    }
  },
};
