import axios from 'axios';
import https from 'https';

const BASE_URL = 'https://apitest.kiwoompay.co.kr/pay';

const httpsAgent =
  process.env.NODE_ENV === 'development'
    ? new https.Agent({ rejectUnauthorized: false })
    : undefined;

export async function POST(
  req: Request,
  { params }: { params: { path: string[] } }
) {
  try {
    const url = `${BASE_URL}/${(params.path || []).join('/')}`;
    const body = await req.json().catch(() => ({}));
    const response = await axios.post(url, body, {
      httpsAgent,
      headers: { 'Content-Type': 'application/json' },
      // headers: { 'Content-Type': 'application/json;charset=EUC-KR' },
    });
    return new Response(JSON.stringify(response.data), {
      status: response.status,
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
