'use client';

import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import { useState } from 'react';
import PayForm30 from './PayForm30';
import PayForm31 from './PayForm31';
import PayFormAPI17 from './PayFormAPI17';
import PayFormCancel from './PayFormCancel';

const TotalForm = () => {
  const [selectedPay, setSelectedPay] = useState('');

  const payArr = [
    {
      name: '통합 Link 3.0 테스트',
      key: 'link3.0',
    },
    {
      name: '통합 Link 3.1 테스트',
      key: 'link3.1',
    },
    {
      name: '통합 API 1.7 테스트',
      key: 'API1.7',
    },
    {
      name: '취소 API 2.0 테스트',
      key: 'CANCELAPI2.0',
    },
  ];

  const renderSelectedComponent = () => {
    switch (selectedPay) {
      case 'link3.0':
        return <PayForm30 />;
      case 'link3.1':
        return <PayForm31 />;
      case 'API1.7':
        return <PayFormAPI17 />;
      case 'CANCELAPI2.0':
        return <PayFormCancel />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      <FormControl
        fullWidth
        sx={{
          mb: 3,
        }}
      >
        <InputLabel id="pay-select-label">결제 방식 선택</InputLabel>
        <NativeSelect
          labelId="pay-select-label"
          value={selectedPay}
          onChange={e => setSelectedPay(e.target.value)}
          label="결제 방식 선택"
        >
          <option value="">선택하세요</option>
          {payArr.map(pay => (
            <option key={pay.key} value={pay.key}>
              {pay.name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>

      {renderSelectedComponent()}
    </div>
  );
};

export default TotalForm;
