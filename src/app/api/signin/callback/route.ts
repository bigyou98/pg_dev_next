import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const redirect_uri = searchParams.get('redirect_uri');

  try {
    const tokenInfo = await axios.post(
      `${process.env.NEXT_PUBLIC_ACCOUNT_DAOUDATA}/api/token`,
      {
        grantType: 'authorization_code',
        code: code,
      },
      {
        headers: {
          ContentType: 'application/json',
        },
      }
    );

    console.log('토큰 정보:', tokenInfo.data);
  } catch (error) {
    console.error('토큰 에러:', error);
  }

  return NextResponse.redirect(redirect_uri as string);
}
