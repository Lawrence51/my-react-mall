import { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './index.module.scss';


const OrderList = (props: any) => {

  useEffect(() => {
  }, []);

  return (
    <div className={styles['home-page']}>
      <div className={styles['home-page-container']}>
        <img
          className={styles['mid-adv']}
          src="https://m.hellobike.com/resource/helloyun/10397/L4kAE_banner2.png?x-oss-process=image/quality,q_80"
          alt="哈啰酒店banner"
        />
      </div>
    </div>
  );
};

export default connect((state) => {
  return state;
})(OrderList);
