import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './index.scss';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DropDownMenu = () => {
  const history = useNavigate();
  const [title, setTitle] = useState<string>('欢迎光临');

  const onShopMenuClick = useCallback(
    (value) => {
        history(`/${value.key}`);
    },
    [history]
  );

  const shopMenu = useMemo(() => {
    return (
      <Menu onClick={onShopMenuClick}>
        <Menu.Item key="personal">个人中心</Menu.Item>
        <Menu.Item key="order-list">订单列表</Menu.Item>
        <Menu.Item key="login">退出登录</Menu.Item>
      </Menu>
    );
  }, [onShopMenuClick]);

  useEffect(() => {
    setTitle(
        '欢迎光临'
    );
  }, []);

  return (
    <div className="mall-dropdown-menu">
      <div className="cart-menu">
        <span className="name">人</span>
      </div>
      <Dropdown overlay={shopMenu}>
        <div className="shop-menu">
          <span className="name">{title}</span>
          <DownOutlined className="icon" />
        </div>
      </Dropdown>
    </div>
  );
};

export default DropDownMenu;
