'use client';

import { kiwoom } from '@/apis/kiwoom';
import * as cancelPayMethods from '@/constants/cancelPayMethods';
import {
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const PayFormCancel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef();

  const ctsKeys = Object.keys(cancelPayMethods);

  // 선택된 CPID
  const [selectedCtsKey, setSelectedCtsKey] = useState(ctsKeys[0]);

  // CPID에 맵핑된 결제수단들
  const selectedCTSMethods = useMemo(
    () => cancelPayMethods[selectedCtsKey] || {},
    [selectedCtsKey]
  );

  // 선택된 결제 수단
  const [curPayment, setCurPayment] = useState(() => {
    const firstMethodKey = Object.keys(selectedCTSMethods)[0];
    return selectedCTSMethods[firstMethodKey] || {};
  });

  // init : 결제수단 0번째걸로 지정
  useEffect(() => {
    const firstMethodKey = Object.keys(selectedCTSMethods)[0];
    setCurPayment(selectedCTSMethods[firstMethodKey] || {});
  }, [selectedCtsKey, selectedCTSMethods]);

  const onSubmit = async () => {
    try {
      const res = await kiwoom.cancelPayment(curPayment);
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
          defaultValue={Object.keys(selectedCTSMethods)[0]}
          inputProps={{
            name: 'paymentMethod',
            id: 'uncontrolled-native',
          }}
          onChange={e => {
            setCurPayment(selectedCTSMethods[e.target.value]);
          }}
        >
          {Object.keys(selectedCTSMethods).map(key => {
            return (
              <option value={key} key={key + 'qweqwe'}>
                {key}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>

      <div
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

export default PayFormCancel;
