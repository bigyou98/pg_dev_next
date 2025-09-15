// app/api/payment/hash/route.ts
import { CTS10616 } from '@/constants/LINKPayMethod';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // 클라이언트에서 요청한 JSON 데이터 파싱
    const body = await request.json();

    console.log('body로 들어온 값');
    console.log(body);

    // PG API로 요청 보내기
    const response = await fetch('https://apitest.kiwoompay.co.kr/pay/ready', {
      method: 'POST',
      headers: {
        // ? fetch에 'Content-Type': 'application/json; charset=EUC-KR' 헤더만 넣는다고 EUC-KR 포맷으로 변환되지 않음.
        // ? EUC-KR 포맷이 필요한 경우 보낼 데이터를 직접 EUC-KR 바이트로 인코딩 후 body에 Uint8Array로 넘겨야 함.
        'Content-Type': 'application/json; charset=EUC-KR',
        Authorization:
          'bdb9437ae28617818090109844fabe7e86da9bd5e21c298c07b14ceed8b39317',
      },
      // body: JSON.stringify(body),
      body: JSON.stringify({
        CPID: 'CTS10616',
        TRXID: '', // 승인거래번호
        AMOUNT: '', // 금액
        CANCELREASON: '상훈테스트', // 금액
      }),
    });

    // PG API 응답 JSON 받기
    const readyResult = await response.json();
    console.log(readyResult);
    // 클라이언트에 결과 리턴
    return NextResponse.json(readyResult);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: '상훈 서버 처리 중 오류 발생' },
      { status: 500 }
    );
  }
}
