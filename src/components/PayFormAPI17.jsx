'use client';

import { kiwoom } from '@/apis/kiwoom';
import * as payMethods from '@/constants/payMethods';
import {
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const PayFormAPI17 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef();

  const ctsKeys = Object.keys(payMethods).filter(key => key !== 'CTS10616');
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

  const onSubmit = async e => {
    console.log(curPayment);

    try {
      const res = await kiwoom.payment(curPayment);
    } catch (error) {
      console.log(error);
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
