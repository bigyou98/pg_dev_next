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

const PayFormAPI17 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef();

  const ctsKeys = Object.keys(LINKPayMethods).filter(key => key !== 'CTS10616');
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

  const onSubmit = async e => {
    console.log(curPayment);

    //   headers: {
    //     'Content-Type': 'application/json;charset=EUC-KR',
    //     Authorization: dummyData.Authorization,
    //   },
    // 1 : 레디

    // 2 : api 날리기
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

      <div
        // action="https://apitest.kiwoompay.co.kr/pay/link"
        // target="KIWOOMPAY"
        // method="post"
        // acceptCharset="EUC-KR" // ! 이거 중요함
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          width: '100%',
        }}
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
          onClick={onSubmit}
        >
          결제
        </Button>
      </div>
    </>
  );
};

export default PayFormAPI17;
