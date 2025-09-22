'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SanghoonNotiContent() {
  const searchParams = useSearchParams();

  // Get all query parameters
  const queryParams = {};
  searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          color: '#333',
          marginBottom: '30px',
          textAlign: 'center',
        }}
      >
        Sanghoon Noti 페이지
      </h1>

      <div
        style={{
          backgroundColor: '#f5f5f5',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      >
        <h2
          style={{
            color: '#555',
            marginBottom: '15px',
            fontSize: '18px',
          }}
        >
          쿼리 파라미터 정보
        </h2>

        {Object.keys(queryParams).length === 0 ? (
          <p style={{ color: '#666', fontStyle: 'italic' }}>
            현재 쿼리 파라미터가 없습니다.
          </p>
        ) : (
          <div>
            <p
              style={{
                color: '#666',
                marginBottom: '15px',
                fontSize: '14px',
              }}
            >
              총 {Object.keys(queryParams).length}개의 파라미터가 있습니다.
            </p>

            <div
              style={{
                backgroundColor: 'white',
                padding: '15px',
                borderRadius: '4px',
                border: '1px solid #ddd',
              }}
            >
              {Object.entries(queryParams).map(([key, value], index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    marginBottom: '10px',
                    paddingBottom: '10px',
                    borderBottom:
                      index < Object.entries(queryParams).length - 1
                        ? '1px solid #eee'
                        : 'none',
                  }}
                >
                  <div
                    style={{
                      fontWeight: 'bold',
                      color: '#333',
                      minWidth: '120px',
                      marginRight: '10px',
                    }}
                  >
                    {key}:
                  </div>
                  <div
                    style={{
                      color: '#666',
                      wordBreak: 'break-all',
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div
        style={{
          backgroundColor: '#e8f4fd',
          padding: '15px',
          borderRadius: '8px',
          border: '1px solid #b3d9ff',
        }}
      >
        <h3
          style={{
            color: '#0066cc',
            marginBottom: '10px',
            fontSize: '16px',
          }}
        >
          사용법
        </h3>
        <p
          style={{
            color: '#333',
            fontSize: '14px',
            lineHeight: '1.5',
          }}
        >
          URL에 쿼리 파라미터를 추가하여 이 페이지에 접근하세요.
          <br />
          예:{' '}
          <code
            style={{
              backgroundColor: '#f0f0f0',
              padding: '2px 4px',
              borderRadius: '3px',
              fontSize: '12px',
            }}
          >
            /sanghoonNoti?name=홍길동&age=30&message=안녕하세요
          </code>
        </p>
      </div>
    </div>
  );
}

export default function SanghoonNoti() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            padding: '20px',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          로딩 중...
        </div>
      }
    >
      <SanghoonNotiContent />
    </Suspense>
  );
}
