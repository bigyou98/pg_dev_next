export const CTS10616 = {
  // 신용카드 D
  CARD: {
    // ! 필수 항목
    PAYMETHOD: 'CARD', // 결제수단
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10616',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
    // 각 선택 항목
    // TAXFREECD: '00', // 과세여부
    // HOMEURL: 'https://www.naver.com',
    // CLOSEURL: 'https://www.naver.com',
    // FAILURL: 'https://www.naver.com',
    // APPURL: 'https://www.naver.com',
    // FREE_AMT: '0',
    // CERTTYPE: '01',
    // BILLTYPE: '1',
    // RESERVEDINDEX1: '예약항목1',
  },

  // 휴대폰
  MOBILE: {
    PAYMETHOD: 'MOBILE', // 결제수단
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10616',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
    // 각 선택 항목
    // TAXFREECD: '00', // 과세여부
    // HOMEURL: 'https://www.naver.com',
    // CLOSEURL: 'https://www.naver.com',
    // FAILURL: 'https://www.naver.com',
    // FREE_AMT: '0',
    // CERTTYPE: '01',
    // BILLTYPE: '1',
    // RESERVEDINDEX1: '예약항목1',
    // KIWOOM_ENC: 'bdb9437ae28617818090109844fabe7e86da9bd5e21c298c07b14ceed8b39317', // CARDPASSWORD: '1234',
  },
  // 가상계좌 : 입금테스트 못한다고 함.
  // VACCT: {},
  // 계좌이체
  BANK: {
    PAYMETHOD: 'BANK', // 결제수단
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10616',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '1000', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
  },
  // // 현금영수증 ?없네
  // // CARD: {},
  // 카카오페이
  KAKAOPAY: {
    PAYMETHOD: 'KAKAOPAY', // 결제수단
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10616',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
  },
  // 네이버페이
  NAVERPAY: {
    PAYMETHOD: 'NAVERPAY', // 결제수단
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10616',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
  },
  // 삼성페이
  SAMSUNGPAY: {
    PAYMETHOD: 'SAMSUNGPAY', // 결제수단
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10616',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
  },
  // 페이코
  PAYCO: {
    PAYMETHOD: 'PAYCO', // 결제수단
    TYPE: 'M', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10616',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
  },
  // 애플페이
  APPLEPAY: {
    PAYMETHOD: 'APPLEPAY', // 결제수단
    TYPE: 'M', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10616',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
  },
};

export const CTS10617 = {
  // 신용카드_수기API(수기비인증) : 카유
  CARDSUGI: {
    PAYMETHOD: 'CARD-SUGI',
    Authorization:
      'd96b492c8df4fce0c47e5727c7f2d11a13bbb09ca4b65e2a202033022cf7155d',
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10617',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
    BILLTYPE: '18', // ! 얘 중요함
  },
};

export const CTS10618 = {
  // 신용카드_수기API(수기일반) : 카유비생
  CARDSUGI: {
    PAYMETHOD: 'CARD-SUGI',
    Authorization:
      'd4adef85d5a21c386f02b533fbb095ac976cff6de4d8be525d59b387f4f4c91e',
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10618',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
    BILLTYPE: '1', // ! 얘 중요함
  },
};

export const CTS10619 = {
  // 신용카드_정기과금
  CARDBATCH: {
    PAYMETHOD: 'CARD-BATCH',
    Authorization:
      'a2f83ed706ece15c9c71d4dd78ae0035b9ba8971640d0be80012983be98c7a0c',
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10619',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
    // BILLTYPE: '1', // !  // 2: 월자동, 14:카드월자동
  },
};

export const M_CTS10616 = {
  // 신용카드 D
  CARD: {
    // ! 필수 항목
    PAYMETHOD: 'CARD', // 결제수단
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10616',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
    // 각 선택 항목
    // TAXFREECD: '00', // 과세여부
    // HOMEURL: 'https://www.naver.com',
    // CLOSEURL: 'https://www.naver.com',
    // FAILURL: 'https://www.naver.com',
    // APPURL: 'https://www.naver.com',
    // FREE_AMT: '0',
    // CERTTYPE: '01',
    // BILLTYPE: '1',
    // RESERVEDINDEX1: '예약항목1',
  },

  // 휴대폰
  MOBILE: {
    PAYMETHOD: 'MOBILE', // 결제수단
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10616',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
    // 각 선택 항목
    // TAXFREECD: '00', // 과세여부
    // HOMEURL: 'https://www.naver.com',
    // CLOSEURL: 'https://www.naver.com',
    // FAILURL: 'https://www.naver.com',
    // FREE_AMT: '0',
    // CERTTYPE: '01',
    // BILLTYPE: '1',
    // RESERVEDINDEX1: '예약항목1',
    // KIWOOM_ENC: 'bdb9437ae28617818090109844fabe7e86da9bd5e21c298c07b14ceed8b39317', // CARDPASSWORD: '1234',
  },
  // 가상계좌 : 입금테스트 못한다고 함.
  // VACCT: {},
  // 계좌이체
  BANK: {
    PAYMETHOD: 'BANK', // 결제수단
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10616',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '1000', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
  },
  // // 현금영수증 ?없네
  // // CARD: {},
  // 카카오페이
  KAKAOPAY: {
    PAYMETHOD: 'KAKAOPAY', // 결제수단
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10616',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
  },
  // 네이버페이
  NAVERPAY: {
    PAYMETHOD: 'NAVERPAY', // 결제수단
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10616',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
  },
  // 삼성페이
  SAMSUNGPAY: {
    PAYMETHOD: 'SAMSUNGPAY', // 결제수단
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10616',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
  },
  // 페이코
  PAYCO: {
    PAYMETHOD: 'PAYCO', // 결제수단
    TYPE: 'M', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10616',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
  },
  // 애플페이
  APPLEPAY: {
    PAYMETHOD: 'APPLEPAY', // 결제수단
    TYPE: 'M', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10616',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
  },
};

export const M_CTS10617 = {
  // 신용카드_수기API(수기비인증) : 카유
  CARDSUGI: {
    PAYMETHOD: 'CARD-SUGI',
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10617',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
    BILLTYPE: '18', // ! 얘 중요함
  },
};

export const M_CTS10618 = {
  // 신용카드_수기API(수기일반) : 카유비생
  CARDSUGI: {
    PAYMETHOD: 'CARD-SUGI',
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10618',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
  },
};

export const M_CTS10619 = {
  // 신용카드_정기과금
  CARDBATCH: {
    PAYMETHOD: 'CARD-BATCH',
    TYPE: 'P', // 결제방식(P:PC/M:모바일/W:웹뷰)
    CPID: 'CTS10619',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명', // 상품명
    PRODUCTCODE: '1234', // 상품코드
    USERID: 'sh_park_user', // 고객 ID
  },
};
