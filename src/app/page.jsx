import { Input, TextField } from '@mui/material';
import styles from './page.module.scss';
import Button from '@mui/material/Button';
import TotalForm from '../components/TotalForm';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>키움페이 PG 테스트</h1>
      <TotalForm />
    </main>
  );
}
