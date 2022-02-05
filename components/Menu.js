import { Menu, Row, Col } from 'antd';
import { CrownOutlined, AppstoreOutlined, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import styles from '../styles/Menu.module.css'
import Cart from './Cart';

const TopMenu = () => {
  return (
    <>
      <div id={styles.header_title}>
        <h1><span>MIT</span>RESTAURANT APP</h1>
      </div>
      <Row style={{ margin: '2rem 0'}}>
        <Col span={16} offset={2}>
            <CrownOutlined />
            All Restaurants
        </Col>
        <Col span={4} >
          <Cart quantity={0} total={0} />
        </Col>
      </Row>
    </>
  )
};
export default TopMenu;
