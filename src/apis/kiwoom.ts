import { commonRequest } from '@/apis/common';
import { PaymentRequest, PaymentResponse } from '@/types/payment';

// https://apitest.kiwoompay.co.kr/pay/linkEnc

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

  // API 연동에서 사용되는 것
  ready: async (data: any): Promise<PaymentResponse> => {
    try {
      const response = await commonRequest.post('paymentAPI', data);
      return response.data;
    } catch (error) {
      console.error('Payment ready failed:', error);
      throw error;
    }
  },
};
