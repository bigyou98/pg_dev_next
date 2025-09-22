// iconv-lite 라이브러리가 필요합니다. 아래 명령어로 설치하세요:
// npm install iconv-lite

import axios from 'axios';
import https from 'https';
import iconv from 'iconv-lite';

type PaymentReadyResponse = {
  RETURNURL: string;
  TOKEN: string;
};

const httpsAgent =
  process.env.NODE_ENV === 'development'
    ? new https.Agent({ rejectUnauthorized: false })
    : undefined;

export async function POST(req: Request) {
  try {
    const { Authorization, ...reqData } = await req.json();

    const {
      data: { RETURNURL, TOKEN },
    } = await axios.post<PaymentReadyResponse>(
      'https://apitest.kiwoompay.co.kr/pay/ready',
      {
        CPID: reqData.CPID,
        PAYMETHOD: reqData.PAYMETHOD,
        CANCELREQ: reqData.CANCELREQ,
      },
      {
        httpsAgent,
        headers: {
          'Content-Type': 'application/json;charset=EUC-KR',
          Authorization: Authorization,
        },
      }
    );

    // reqData를 EUC-KR로 인코딩
    const encodedBody = iconv.encode(JSON.stringify(reqData), 'euc-kr');

    const payCancelRes = await axios.post<PaymentReadyResponse>(
      RETURNURL,
      encodedBody,
      {
        httpsAgent,
        headers: {
          'Content-Type': 'application/json;charset=EUC-KR',
          Authorization: Authorization,
          TOKEN: TOKEN,
        },
      }
    );

    console.log(payCancelRes.data);
    return new Response(JSON.stringify(payCancelRes.data), {
      status: payCancelRes.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    const status = error?.response?.status || 500;
    const data = error?.response?.data || { message: 'Proxy POST error' };
    console.log(error);
    return new Response(JSON.stringify(data), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
