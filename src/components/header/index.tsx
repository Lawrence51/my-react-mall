import DropDown from '../dropDown';
import styles from './index.module.scss';

const Header = (props: { showSearchBar?: boolean; showDropDown?: boolean }) => {
  return (
    <div className={styles['mall-header']}>
      <div className={styles['mall-header-container']}>
        {props.showDropDown && <DropDown />}
      </div>
    </div>
  );
};

export default Header;
