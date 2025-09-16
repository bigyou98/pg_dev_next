import axios, { AxiosInstance } from 'axios';

// 서버 프록시 라우트로 우회 (리라이트 대신)
// 외부 호출은 /api/kiwoom/* 로 보내고, 서버에서 TLS 정책 제어
export const commonRequest: AxiosInstance = axios.create({
  baseURL: '/api/',
});
