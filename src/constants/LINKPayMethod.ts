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
    // 헤더 필수 값 --
    Authorization:
      'd96b492c8df4fce0c47e5727c7f2d11a13bbb09ca4b65e2a202033022cf7155d',
    // --
    // 바디 필수 값 --
    CPID: 'CTS10617',
    PAYMETHOD: 'CARD-SUGI',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    BILLTYPE: '18', // ! 얘 중요함과금 유형 , (1: 일반, 2: 월자동, 14:카드월자동 13:수기일반, 18:수기비인증)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명1', // 상품명
    IPADDRESS: '192.168.55.27', // 고객 IP정보
    USERID: 'sh_park_user', // 고객 ID
    // --
    // -- 타입별(CARD-SUGI)  필수 값
    CARDNO: '5118450016674199', // 카드번호
    EXPIREDT: '202904', //6 카드유효기간(YYYYMM)
    QUOTA: '00', // 할부 개월(00~12)
    TAXFREECD: '00', // 과세 비과세 여부      (00: 과세, 01: 비과세, 02: 복합)
    // --
  },
};

export const CTS10618 = {
  // 신용카드_수기API(수기일반) : 카유비생
  CARDSUGI: {
    // 헤더 필수 값 --
    Authorization:
      'd4adef85d5a21c386f02b533fbb095ac976cff6de4d8be525d59b387f4f4c91e',
    // --
    // 바디 필수 값 --
    CPID: 'CTS10618',
    PAYMETHOD: 'CARD-SUGI',
    ORDERNO: '20250908135359', // 주문번호
    PRODUCTTYPE: '1', // 	상품구분(1: 디지털, 2: 실물)
    BILLTYPE: '13', // ! 얘 중요함과금 유형 , (1: 일반, 2: 월자동, 14:카드월자동 13:수기일반, 18:수기비인증)
    AMOUNT: '100', // 결제 금액
    PRODUCTNAME: '상품명1', // 상품명
    IPADDRESS: '192.168.55.27', // 고객 IP정보
    USERID: 'sh_park_user', // 고객 ID
    // --
    // -- 타입별(CARD-SUGI)  필수 값
    CARDNO: '5118450016674199', // 카드번호
    EXPIREDT: '202904', //6 카드유효기간(YYYYMM)
    QUOTA: '00', // 할부 개월(00~12)
    TAXFREECD: '00', // 과세 비과세 여부      (00: 과세, 01: 비과세, 02: 복합)
    CARDAUTH: '980326', // 카드명의자 주민/사업자번호 , (과금유형 13,14인 경우에만 전송) , 주민 : YYMMDD 형식
    CARDPASSWORD: '98', // 카드명의자 비밀번호     (비밀번호 앞 2자리)     (과금유형 13,14인 경우에만 전송)
    // --

    // 카드 수기(수기일반) 필수 값
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
    PRODUCTCODE: '1234', // 상품코드 : 월자동배치에만 필요함.
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
