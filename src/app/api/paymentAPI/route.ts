// iconv-lite 라이브러리가 필요합니다. 아래 명령어로 설치하세요:
// npm install iconv-lite

import axios from 'axios';
import https from 'https';
import iconv from 'iconv-lite';

type PaymentReadyResponse = {
  RETURNURL: string;
  TOKEN: string;
};

const BASE_URL = 'https://apitest.kiwoompay.co.kr/pay';

const httpsAgent =
  process.env.NODE_ENV === 'development'
    ? new https.Agent({ rejectUnauthorized: false })
    : undefined;

export async function POST(req: Request) {
  try {
    const readyUrl = BASE_URL + '/ready';
    const body = await req.json().catch(() => ({}));

    const readyRes = await axios.post<PaymentReadyResponse>(
      readyUrl,
      {
        CPID: body.CPID,
        PAYMETHOD: body.PAYMETHOD,
      },
      {
        httpsAgent,
        headers: {
          'Content-Type': 'application/json;charset=EUC-KR',
          Authorization: body.Authorization,
        },
      }
    );

    // Authorization 키를 제거한 새 객체 생성 (구조분해 할당)
    const { Authorization, ...customBody } = body;

    // customBody를 EUC-KR로 인코딩
    const encodedBody = iconv.encode(JSON.stringify(customBody), 'euc-kr');

    console.log(readyRes.data.RETURNURL);
    console.log(customBody);
    const payRes = await axios.post<PaymentReadyResponse>(
      readyRes.data.RETURNURL,
      encodedBody,
      // customBody,
      {
        httpsAgent,
        headers: {
          'Content-Type': 'application/json;charset=EUC-KR',
          Authorization: Authorization,
          TOKEN: readyRes.data.TOKEN,
        },
      }
    );

    return new Response(JSON.stringify(payRes.data), {
      status: payRes.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    const status = error?.response?.status || 500;
    const data = error?.response?.data || { message: 'Proxy POST error' };
    return new Response(JSON.stringify(data), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
