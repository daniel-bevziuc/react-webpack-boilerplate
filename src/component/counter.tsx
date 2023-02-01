import { useState } from 'react';
import styles from './counter.module.scss';

const counter = () => {
  const [count, setCount] = useState(0);
  const countHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p className={styles.count}>{count}</p>
      <button onClick={countHandler}>Count</button>
    </div>
  );
};

export default counter;
