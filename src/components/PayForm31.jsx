'use client';

import { kiwoom } from '@/apis/kiwoom';
import * as payMethods from '@/constants/payMethods';
import {
  Alert,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const PayForm31 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef();

  const ctsKeys = Object.keys(payMethods).filter(key => key === 'CTS10616');
  const [selectedCtsKey, setSelectedCtsKey] = useState(
    ctsKeys.includes('CTS10616') ? 'CTS10616' : ctsKeys[0]
  );

  const selectedCTS = useMemo(
    () => payMethods[selectedCtsKey] || {},
    [selectedCtsKey]
  );

  const [curPayment, setCurPayment] = useState(() => {
    const firstMethodKey = Object.keys(selectedCTS)[0];
    return selectedCTS[firstMethodKey] || {};
  });

  useEffect(() => {
    const firstMethodKey = Object.keys(selectedCTS)[0];
    setCurPayment(selectedCTS[firstMethodKey] || {});
  }, [selectedCtsKey, selectedCTS]);

  const readyMutation = useMutation({
    mutationFn: async formData => {
      console.log(formData);
      // 폼 데이터를 PaymentRequest 형태로 변환
      return await kiwoom.hash({
        PAYMETHOD: formData.PAYMETHOD,
        TYPE: formData.TYPE,
        CPID: formData.CPID,
        ORDERNO: formData.ORDERNO,
        AMOUNT: formData.AMOUNT,
      });
    },
    onSuccess: paymentWindow => {
      if (paymentWindow) {
        console.log('Payment window opened successfully');
        // 결제창이 성공적으로 열렸을 때의 처리
      }
    },
    onError: error => {
      console.error('Payment failed:', error);
      // 에러 처리
    },
  });

  // openPaymentWindow: (
  //   paymentUrl: string,
  //   windowName: string = 'KIWOOMPAY'
  // ): Window | null => {
  //   const windowFeatures = 'width=468,height=750,scrollbars=yes,resizable=yes';
  //   return window.open(paymentUrl, windowName, windowFeatures);
  // },

  const onSubmit = async data => {
    console.log(curPayment);

    try {
      const res = await readyMutation.mutateAsync(curPayment);

      // 보안을 위한 값이 담긴 요소 추가하여 form 제출
      const KIWOOM_ENC_input = document.createElement('input');

      KIWOOM_ENC_input.type = 'hidden';
      KIWOOM_ENC_input.name = 'KIWOOM_ENC';
      KIWOOM_ENC_input.value = res.KIWOOM_ENC;

      formRef.current.appendChild(KIWOOM_ENC_input);

      const popupName = 'KIWOOMPAY';

      if (!formRef.current) return;
      window.open('', popupName, 'width=468,height=750');

      formRef.current.action = 'https://apitest.kiwoompay.co.kr/pay/linkEnc';
      formRef.current.target = popupName;
      formRef.current.method = 'post';
      formRef.current.acceptCharset = 'EUC-KR';

      formRef.current.submit();

      // 추가한 요소 삭제
      setTimeout(() => {
        if (
          formRef.current &&
          KIWOOM_ENC_input.parentNode === formRef.current
        ) {
          formRef.current.removeChild(KIWOOM_ENC_input);
        }
      }, 1000);
    } catch (error) {
      console.error('Payment submission failed:', error);
    }
  };

  return (
    <>
      {/* CTS 선택 박스 */}
      <FormControl fullWidth style={{ marginBottom: '12px' }}>
        <InputLabel variant="standard" htmlFor="cts-select-native">
          CTS
        </InputLabel>
        <NativeSelect
          value={selectedCtsKey}
          inputProps={{
            name: 'ctsKey',
            id: 'cts-select-native',
          }}
          onChange={e => {
            setSelectedCtsKey(e.target.value);
          }}
        >
          {ctsKeys.map(key => (
            <option value={key} key={key + '-cts-option'}>
              {key}
            </option>
          ))}
        </NativeSelect>
      </FormControl>

      {/* PAYMENT METHOD 선택 박스 */}
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          PAYMENT METHOD
        </InputLabel>
        <NativeSelect
          defaultValue={Object.keys(selectedCTS)[0]}
          inputProps={{
            name: 'paymentMethod',
            id: 'uncontrolled-native',
          }}
          onChange={e => {
            setCurPayment(selectedCTS[e.target.value]);
          }}
        >
          {Object.keys(selectedCTS).map(key => {
            return (
              <option value={key} key={key + 'qweqwe'}>
                {key}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>

      {/* 에러 메시지 표시 */}
      {readyMutation.isError && (
        <Alert severity="error" style={{ marginBottom: '16px' }}>
          결제 처리 중 오류가 발생했습니다: {readyMutation.error?.message}
        </Alert>
      )}

      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          width: '100%',
        }}
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
          }}
        >
          {Object.keys(curPayment).map(key => {
            return (
              <TextField
                variant="outlined"
                style={{ flex: 1, flexBasis: '201px' }}
                label={key}
                name={key}
                key={key}
                value={curPayment[key] ?? ''}
                onChange={e => {
                  setCurPayment(prev => ({
                    ...prev,
                    [key]: e.target.value,
                  }));
                }}
              />
            );
          })}

          {/* <TextField
            variant="outlined"
            style={{ flex: 1, flexBasis: '201px' }}
            label={'KIWOOM_ENC'}
            key={'KIWOOM_ENC'}
            value={
              'MGI2M2E5MDM5YmI2OTVlNjE2MzEyNzU5MGE4YWYxZGZmZDdiNzhkODQxODEwMzA4YzA5YjFjNTViOTA3MDFjZg=='
            }
            {...register('KIWOOM_ENC')}
          /> */}
        </div>
        <pre
          style={{
            width: '100%',
            background: '#0f172a',
            color: '#e2e8f0',
            padding: '12px',
            borderRadius: '8px',
            overflowX: 'auto',
          }}
        >
          {JSON.stringify(curPayment, null, 2)}
        </pre>
        <Button
          variant="contained"
          type="submit"
          disabled={readyMutation.isPending}
          style={{
            width: '200px',
          }}
        >
          {readyMutation.isPending ? (
            <>
              <CircularProgress size={20} style={{ marginRight: '8px' }} />
              처리중...
            </>
          ) : (
            '결제'
          )}
        </Button>
      </form>
    </>
  );
};

export default PayForm31;
