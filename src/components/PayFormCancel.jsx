'use client';

import * as LINKPayMethods from '@/constants/LINKPayMethod';
import {
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const PayForm30 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef();

  const ctsKeys = Object.keys(LINKPayMethods);
  const [selectedCtsKey, setSelectedCtsKey] = useState(
    ctsKeys.includes('CTS10616') ? 'CTS10616' : ctsKeys[0]
  );

  const selectedCTS = useMemo(
    () => LINKPayMethods[selectedCtsKey] || {},
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

  const onSubmit = async data => {
    window.open('', 'KIWOOMPAY', 'width=468,height=750');
    formRef.current.submit();
  };

  const cancelMutation = useMutation(async data => {
    const response = await fetch('/api/cancelPay', {
      method: 'POST',

      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log(response);
    return response.json();
  });

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

      <form
        action="https://apitest.kiwoompay.co.kr/pay/link"
        target="KIWOOMPAY"
        method="post"
        acceptCharset="EUC-KR" // ! 이거 중요함
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
                key={key}
                value={curPayment[key]}
                {...register(key)}
              />
            );
          })}
        </div>
        <Button
          variant="contained"
          type="submit"
          style={{
            width: '200px',
          }}
        >
          결제
        </Button>
      </form>

      <h2>결제 취소</h2>
      <Button
        variant="contained"
        type="submit"
        style={{
          width: '200px',
        }}
        onClick={() => {
          cancelMutation.mutate();
        }}
      >
        결제 취소
      </Button>
    </>
  );
};

export default PayForm30;
