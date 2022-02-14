import { Menu, Row, Col } from 'antd';
import Link from 'next/Link';
import { useRouter } from 'next/router'
import Image from 'next/image'
import LogoApp from '../assets/images/logo-mitRest.png'
import { CrownOutlined, LoginOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import styles from '../styles/Menu.module.css'
import Cart from './Cart';
import useFirebase from '../Hooks/useFirebase';

const TopMenu = () => {

  const { user, logout } = useFirebase();
  
  const isActive = (path) => {
    const router = useRouter();
    return router.pathname == path ? styles.active : "";
  }

  return (
    <>
      <div id={styles.header}>
        <Image src={LogoApp} />
      </div>
      <Row style={{ margin: '2rem 0'}}>
        <Col span={13} offset={2} className={styles.main_menu}>
        <Link as={`/restaurants/`} href="/restaurants/">
            <a className={isActive('/restaurants')} >
              <CrownOutlined />
              Restaurants
            </a>
          </Link>
          <Link as={`/account/`} href="/account/">
            <a className={isActive('/account')}>
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
        <Col span={5}>
          <div className={styles.user_info}>
            <span>hello {user.email}!</span>
          </div>
        </Col>
        <Col span={2} >
          <Cart quantity={0} total={0} />
        </Col>
      </Row>
    </>
  )
};
export default TopMenu;
