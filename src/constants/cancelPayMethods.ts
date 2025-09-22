interface CancelInfo {
  CPID: string;
  PAYMETHOD: string;
  Authorization: string;
  TRXID: string;
  AMOUNT: string;
  CANCELREQ: 'Y';
  CANCELREASON: string;
}

export const CTS10616_cancel: Record<string, CancelInfo> = {
  // 신용카드 D
  CARD: {
    Authorization:
      'bdb9437ae28617818090109844fabe7e86da9bd5e21c298c07b14ceed8b39317',
    PAYMETHOD: 'CARD',
    CPID: 'CTS10616',
    AMOUNT: '100',
    CANCELREQ: 'Y',
    TRXID: '',
    CANCELREASON: '상훈결제취소테스트중',
  },

  // 휴대폰
  MOBILE: {
    Authorization:
      'bdb9437ae28617818090109844fabe7e86da9bd5e21c298c07b14ceed8b39317',
    PAYMETHOD: 'MOBILE',
    CPID: 'CTS10616',
    AMOUNT: '100',
    CANCELREQ: 'Y',
    TRXID: '',
    CANCELREASON: '상훈결제취소테스트중',
  },
  // 가상계좌 : 입금테스트 못한다고 함.
  // VACCT: {},
  // 계좌이체
  BANK: {
    Authorization:
      'bdb9437ae28617818090109844fabe7e86da9bd5e21c298c07b14ceed8b39317',
    PAYMETHOD: 'BANK',
    CPID: 'CTS10616',
    AMOUNT: '1000',
    CANCELREQ: 'Y',
    TRXID: '',
    CANCELREASON: '상훈결제취소테스트중',
  },
  // 카카오페이
  KAKAOPAY: {
    Authorization:
      'bdb9437ae28617818090109844fabe7e86da9bd5e21c298c07b14ceed8b39317',
    PAYMETHOD: 'KAKAOPAY',
    CPID: 'CTS10616',
    AMOUNT: '100',
    CANCELREQ: 'Y',
    TRXID: '',
    CANCELREASON: '상훈결제취소테스트중',
  },
  // 네이버페이
  NAVERPAY: {
    Authorization:
      'bdb9437ae28617818090109844fabe7e86da9bd5e21c298c07b14ceed8b39317',
    PAYMETHOD: 'NAVERPAY',
    CPID: 'CTS10616',
    AMOUNT: '100',
    CANCELREQ: 'Y',
    TRXID: '',
    CANCELREASON: '상훈결제취소테스트중',
  },
  // 삼성페이
  SAMSUNGPAY: {
    Authorization:
      'bdb9437ae28617818090109844fabe7e86da9bd5e21c298c07b14ceed8b39317',
    PAYMETHOD: 'SAMSUNGPAY',
    CPID: 'CTS10616',
    AMOUNT: '100',
    CANCELREQ: 'Y',
    TRXID: '',
    CANCELREASON: '상훈결제취소테스트중',
  },
  // 페이코
  PAYCO: {
    Authorization:
      'bdb9437ae28617818090109844fabe7e86da9bd5e21c298c07b14ceed8b39317',
    PAYMETHOD: 'PAYCO',
    CPID: 'CTS10616',
    AMOUNT: '100',
    CANCELREQ: 'Y',
    TRXID: '',
    CANCELREASON: '상훈결제취소테스트중',
  },
  // 애플페이
  APPLEPAY: {
    Authorization:
      'bdb9437ae28617818090109844fabe7e86da9bd5e21c298c07b14ceed8b39317',
    PAYMETHOD: 'APPLEPAY',
    CPID: 'CTS10616',
    AMOUNT: '100',
    CANCELREQ: 'Y',
    TRXID: '',
    CANCELREASON: '상훈결제취소테스트중',
  },
};

// export const CTS10617_cancel: Record<string, CancelInfo> = {
//   // 신용카드_수기API(수기비인증) : 카유
//   // ⚠️ CARD-SUGI는 취소 가능한 PAYMETHOD 목록에 없음
//   CARDSUGI: {
//     Authorization:
//       'd96b492c8df4fce0c47e5727c7f2d11a13bbb09ca4b65e2a202033022cf7155d',
//     CPID: 'CTS10617',
//     PAYMETHOD: 'CARD-SUGI',
//     AMOUNT: '100',
//     CANCELREQ: 'Y',
//     TRXID: '',
//     CANCELREASON: '상훈결제취소테스트중',
//   },
// };

// export const CTS10618_cancel: Record<string, CancelInfo> = {
//   // 신용카드_수기API(수기일반) : 카유비생
//   // ⚠️ CARD-SUGI는 취소 가능한 PAYMETHOD 목록에 없음
//   CARDSUGI: {
//     Authorization:
//       'd4adef85d5a21c386f02b533fbb095ac976cff6de4d8be525d59b387f4f4c91e',
//     CPID: 'CTS10618',
//     PAYMETHOD: 'CARD-SUGI',
//     AMOUNT: '100',
//     CANCELREQ: 'Y',
//     TRXID: '',
//     CANCELREASON: '상훈결제취소테스트중',
//   },
// };

export const CTS10619_cancel: Record<string, CancelInfo> = {
  // 신용카드_정기과금
  // ⚠️ CARD-KEYGEN은 취소 가능한 PAYMETHOD 목록에 없음
  // CARDKEYGEN: {
  //   Authorization:
  //     'a2f83ed706ece15c9c71d4dd78ae0035b9ba8971640d0be80012983be98c7a0c',
  //   CPID: 'CTS10619',
  //   PAYMETHOD: 'CARD-KEYGEN',
  //   AMOUNT: '100',
  //   CANCELREQ: 'Y',
  //   TRXID: '',
  //   CANCELREASON: '상훈결제취소테스트중',
  // },
  CARDBATCH: {
    Authorization:
      'a2f83ed706ece15c9c71d4dd78ae0035b9ba8971640d0be80012983be98c7a0c',
    CPID: 'CTS10619',
    PAYMETHOD: 'CARD-BATCH',
    AMOUNT: '100',
    CANCELREQ: 'Y',
    TRXID: '',
    CANCELREASON: '상훈결제취소테스트중',
  },
};
