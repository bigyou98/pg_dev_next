// app/api/payment/hash/route.ts
import { CTS10616 } from '@/constants/LINKPayMethod';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // 클라이언트에서 요청한 JSON 데이터 파싱
    const body = await request.json();

    console.log(body);
    // 키움페이 PG API URL (개발용)
    const kiwoomUrl = 'https://apitest.kiwoompay.co.kr/pay/hash';

    // PG API로 요청 보내기
    const response = await fetch(kiwoomUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 필요한 인증 헤더 추가 (예: API 키)
      },
      // body: JSON.stringify(body),
      body: JSON.stringify({
        ...CTS10616.CARD,
      }),
    });

    // PG API 응답 JSON 받기
    const result = await response.json();

    console.log(result);
    // 클라이언트에 결과 리턴
    console.log('안녕 1');
    return NextResponse.json(result);
  } catch (error) {
    console.log('안녕 슈');
    console.log(error);
    return NextResponse.json(
      { error: '서버 처리 중 오류 발생' },
      { status: 500 }
    );
  }
}
