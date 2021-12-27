import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { unstable_batchedUpdates } from "react-dom";
import styles from './index.module.scss';
import { Button } from 'antd';


const HomePage = (props: any) => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(false);
  useEffect(() => {
  }, []);

  function handleClick() {
    setTimeout(() => {
		  unstable_batchedUpdates(() => { // 性能优化 可将多次更改state合并成一个
	      setCount((c) => c + 1); // Causes a re-render
	      setValue((f) => !f); // Causes a re-render
	    })
	  }, 100)
  }

  return (
    <div className={styles['home-page']}>
      <div className={styles['home-page-container']}>
        <img
          className={styles['mid-adv']}
          src="https://m.hellobike.com/resource/helloyun/10397/L4kAE_banner2.png?x-oss-process=image/quality,q_80"
          alt="哈啰酒店banner"
        />
      </div>
      <Button onClick={handleClick}>Next</Button>
    </div>
  );
};

export default connect((state) => {
  return state;
})(HomePage);
