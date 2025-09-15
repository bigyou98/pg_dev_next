import { commonRequest } from '@/apis/common';
import { PaymentRequest, PaymentResponse } from '@/types/payment';

// https://apitest.kiwoompay.co.kr/pay/linkEnc

export const linkENC = {
  // 결제 준비 - 서버에 결제 정보를 전송하고 결제 토큰을 받음
  ready: async (paymentData: PaymentRequest): Promise<PaymentResponse> => {
    try {
      const response = await commonRequest.post('hash', paymentData);
      return response.data;
    } catch (error) {
      console.error('Payment ready failed:', error);
      throw error;
    }
  },
};
