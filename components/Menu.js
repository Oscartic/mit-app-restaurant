import { Menu, Row, Col } from 'antd';
import Link from 'next/Link'
import { useRouter } from 'next/router'
import { CrownOutlined, LoginOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import styles from '../styles/Menu.module.css'
import Cart from './Cart';

const TopMenu = () => {
  
  const isActive = () => {
    const router = useRouter();
    return router.pathname == "/restaurants" ? styles.active : "";
  }

  return (
    <>
      <div id={styles.header_title}>
        <h1><span>MIT</span>RESTAURANT APP</h1>
      </div>
      <Row style={{ margin: '2rem 0'}}>
        <Col span={16} offset={2}>
        <Link as={`/restaurants/`} href="restaurants/">
            <a className={styles.main_menu} className={isActive()}>
              <CrownOutlined />
              Restaurants
            </a>
          </Link>
          <Link as={`/restaurants/`} href="restaurants/">
            <a className={styles.main_menu}>
              <SettingOutlined />
              Account
            </a>
          </Link>
          <Link as={'/'} href="/">
            <a className={styles.main_menu}>
              <LogoutOutlined />
              Logout
            </a>
          </Link>
        </Col>
        <Col span={4} >
          <Cart quantity={0} total={0} />
        </Col>
      </Row>
    </>
  )
};
export default TopMenu;
