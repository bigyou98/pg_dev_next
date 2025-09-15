function pay() {
  pf = document.payForm;
  var PayServer = pf.SERVER.value;
  var PayType = pf.TYPE.value;

  if (PayServer == 'DEV') {
    fileName = 'https://apitest.kiwoompay.co.kr/pay/link';
  } else if (PayServer == 'LIVE') {
    fileName = 'https://api.kiwoompay.co.kr/pay/link';
  }

  if (PayType == 'P') {
    var KIWOOMPAY = window.open('', 'KIWOOMPAY', 'width=468,height=750');
    pf.target = 'KIWOOMPAY';
  } else if (PayType == 'M' || PayType == 'W') {
    pf.target = '_self';
  }
  pf.action = fileName;
  pf.method = 'post';
  pf.submit();
}
