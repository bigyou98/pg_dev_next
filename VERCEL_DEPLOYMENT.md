# Vercel 배포 시 환경변수 설정 가이드

## 1. Vercel 대시보드에서 환경변수 설정

### 방법 1: Vercel 대시보드 사용 (권장)

1. **Vercel 대시보드 접속**
   - https://vercel.com/dashboard 에 로그인
   - 프로젝트 선택

2. **환경변수 설정**
   - 프로젝트 페이지에서 `Settings` 탭 클릭
   - 왼쪽 메뉴에서 `Environment Variables` 클릭
   - `Add New` 버튼 클릭

3. **환경변수 추가**

   ```
   Name: CARD_NO
   Value: 5118450016674199
   Environment: Production, Preview, Development (모두 선택)
   ```

4. **모든 환경변수 추가**
   ```
   CARD_NO=5118450016674199
   CARD_EXPIRED_DATE=202904
   CARD_AUTH=980326
   CARD_PASSWORD=98
   QUOTA=00
   TAX_FREE_CD=00
   DIRECT_YN=N
   CTS10616_AUTH_TOKEN=bdb9437ae28617818090109844fabe7e86da9bd5e21c298c07b14ceed8b39317
   CTS10617_AUTH_TOKEN=d96b492c8df4fce0c47e5727c7f2d11a13bbb09ca4b65e2a202033022cf7155d
   CTS10618_AUTH_TOKEN=d4adef85d5a21c386f02b533fbb095ac976cff6de4d8be525d59b387f4f4c91e
   CTS10619_AUTH_TOKEN=a2f83ed706ece15c9c71d4dd78ae0035b9ba8971640d0be80012983be98c7a0c
   AUTO_KEY=C20259G907186
   ```

### 방법 2: Vercel CLI 사용

1. **Vercel CLI 설치**

   ```bash
   npm i -g vercel
   ```

2. **프로젝트 로그인**

   ```bash
   vercel login
   ```

3. **환경변수 설정**

   ```bash
   vercel env add CARD_NO
   vercel env add CARD_EXPIRED_DATE
   vercel env add CARD_AUTH
   vercel env add CARD_PASSWORD
   vercel env add QUOTA
   vercel env add TAX_FREE_CD
   vercel env add DIRECT_YN
   vercel env add CTS10616_AUTH_TOKEN
   vercel env add CTS10617_AUTH_TOKEN
   vercel env add CTS10618_AUTH_TOKEN
   vercel env add CTS10619_AUTH_TOKEN
   vercel env add AUTO_KEY
   ```

4. **환경변수 적용**
   ```bash
   vercel env pull .env.local
   ```

## 2. 배포 후 확인

### 환경변수 확인 방법

1. **Vercel 대시보드에서 확인**
   - Settings > Environment Variables에서 설정된 값들 확인

2. **런타임에서 확인 (개발용)**
   ```javascript
   // 임시로 API 라우트에 추가하여 확인
   console.log('CARD_NO:', process.env.CARD_NO);
   console.log('CTS10616_AUTH_TOKEN:', process.env.CTS10616_AUTH_TOKEN);
   ```

## 3. 보안 주의사항

### ⚠️ 중요사항

1. **환경별 분리**
   - Production: 실제 운영용 값
   - Preview: 테스트용 값
   - Development: 개발용 값

2. **토큰 관리**
   - 실제 운영환경에서는 다른 API 토큰 사용
   - 테스트용 토큰과 운영용 토큰 분리

3. **접근 권한**
   - 팀원들에게 필요한 환경변수만 공유
   - 민감한 정보는 최소 권한으로 관리

## 4. 배포 명령어

```bash
# Vercel에 배포
vercel --prod

# 또는 GitHub 연동 시 자동 배포
git push origin main
```

## 5. 문제 해결

### 환경변수가 적용되지 않는 경우

1. **재배포 필요**
   - 환경변수 추가 후 반드시 재배포
   - `vercel --prod` 또는 GitHub push

2. **캐시 문제**
   - Vercel 대시보드에서 `Redeploy` 클릭

3. **환경변수 이름 확인**
   - 대소문자 정확히 일치하는지 확인
   - `process.env.VARIABLE_NAME`과 정확히 일치

### 디버깅 방법

```javascript
// API 라우트에서 환경변수 확인
export async function GET() {
  console.log('Environment check:', {
    CARD_NO: process.env.CARD_NO ? 'Set' : 'Not set',
    CTS10616_AUTH_TOKEN: process.env.CTS10616_AUTH_TOKEN ? 'Set' : 'Not set',
  });

  return Response.json({
    envCheck: {
      CARD_NO: process.env.CARD_NO ? 'Set' : 'Not set',
      CTS10616_AUTH_TOKEN: process.env.CTS10616_AUTH_TOKEN ? 'Set' : 'Not set',
    },
  });
}
```

# Cursor에서 Vercel 배포 가이드

## 1. Vercel CLI 설치 및 설정

### Vercel CLI 설치

```bash
npm i -g vercel
```

### Vercel 로그인

```bash
vercel login
```

- 브라우저가 열리면 GitHub/GitLab/Bitbucket 계정으로 로그인
- 또는 이메일로 로그인

## 2. 프로젝트 배포

### 첫 배포

```bash
# 프로젝트 루트에서 실행
vercel

# 또는 프로덕션 배포
vercel --prod
```

### 배포 과정

1. **프로젝트 설정 확인**
   - Project name: `pg_dev_next` (또는 원하는 이름)
   - Framework: `Next.js` (자동 감지)
   - Root Directory: `./` (현재 디렉토리)

2. **환경변수 설정**
   - 배포 중에 환경변수를 설정할 수 있습니다
   - 또는 나중에 Vercel 대시보드에서 설정

## 3. 환경변수 설정

### 방법 1: 배포 중 설정

```bash
vercel env add CARD_NO
# 입력: 5118450016674199

vercel env add CARD_EXPIRED_DATE
# 입력: 202904

vercel env add CARD_AUTH
# 입력: 980326

vercel env add CARD_PASSWORD
# 입력: 98

vercel env add QUOTA
# 입력: 00

vercel env add TAX_FREE_CD
# 입력: 00

vercel env add DIRECT_YN
# 입력: N

vercel env add CTS10616_AUTH_TOKEN
# 입력: bdb9437ae28617818090109844fabe7e86da9bd5e21c298c07b14ceed8b39317

vercel env add CTS10617_AUTH_TOKEN
# 입력: d96b492c8df4fce0c47e5727c7f2d11a13bbb09ca4b65e2a202033022cf7155d

vercel env add CTS10618_AUTH_TOKEN
# 입력: d4adef85d5a21c386f02b533fbb095ac976cff6de4d8be525d59b387f4f4c91e

vercel env add CTS10619_AUTH_TOKEN
# 입력: a2f83ed706ece15c9c71d4dd78ae0035b9ba8971640d0be80012983be98c7a0c

vercel env add AUTO_KEY
# 입력: C20259G907186
```

### 방법 2: Vercel 대시보드에서 설정

1. https://vercel.com/dashboard 접속
2. 프로젝트 선택
3. `Settings` → `Environment Variables`
4. 각 환경변수 추가:
   ```
   Name: CARD_NO
   Value: 5118450016674199
   Environment: Production, Preview, Development (모두 선택)
   ```

## 4. 배포 명령어들

### 기본 배포

```bash
# 개발 환경 배포
vercel

# 프로덕션 배포
vercel --prod

# 특정 환경으로 배포
vercel --target production
```

### 환경변수와 함께 배포

```bash
# 환경변수 설정 후 재배포
vercel env pull .env.local
vercel --prod
```

## 5. 배포 후 확인

### 배포 상태 확인

```bash
# 배포 상태 확인
vercel ls

# 특정 배포 상세 정보
vercel inspect [deployment-url]
```

### 환경변수 확인

```bash
# 환경변수 목록 확인
vercel env ls

# 특정 환경변수 확인
vercel env pull .env.local
```

## 6. 자동 배포 설정 (GitHub 연동)

### GitHub 저장소 연동

1. Vercel 대시보드에서 `Import Project`
2. GitHub 저장소 선택
3. 자동 배포 설정:
   - `Production Branch`: `main` 또는 `master`
   - `Preview Deployments`: 활성화
   - `Automatic HTTPS`: 활성화

### 자동 배포 워크플로우

```bash
# 로컬에서 변경사항 커밋
git add .
git commit -m "Update payment API"
git push origin main

# Vercel이 자동으로 배포
```

## 7. 문제 해결

### 환경변수가 적용되지 않는 경우

```bash
# 환경변수 재설정
vercel env rm CARD_NO
vercel env add CARD_NO

# 재배포
vercel --prod
```

### SSL 인증서 문제

- 이미 코드에서 `rejectUnauthorized: false`로 설정했으므로 해결됨
- 추가 문제가 있다면 Vercel 대시보드에서 `Redeploy` 클릭

### 빌드 오류

```bash
# 로컬에서 빌드 테스트
npm run build

# 빌드 오류 수정 후 재배포
vercel --prod
```

## 8. 유용한 명령어들

```bash
# 프로젝트 정보 확인
vercel project ls

# 도메인 설정
vercel domains add your-domain.com

# 로그 확인
vercel logs [deployment-url]

# 프로젝트 삭제
vercel project rm [project-name]
```

## 9. 보안 주의사항

### 환경변수 보안

- 실제 운영환경에서는 다른 API 토큰 사용
- 테스트용과 운영용 토큰 분리
- 민감한 정보는 최소 권한으로 관리

### 배포 전 체크리스트

- [ ] 환경변수 모두 설정됨
- [ ] SSL 인증서 문제 해결됨
- [ ] 빌드 오류 없음
- [ ] API 엔드포인트 테스트 완료

## 10. 빠른 배포 스크립트

### package.json에 스크립트 추가

```json
{
  "scripts": {
    "deploy": "vercel --prod",
    "deploy:preview": "vercel",
    "env:setup": "vercel env add"
  }
}
```

### 사용법

```bash
# 프로덕션 배포
npm run deploy

# 프리뷰 배포
npm run deploy:preview

# 환경변수 설정
npm run env:setup
```
