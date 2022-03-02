import { Row, Col } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Image from 'next/image'
import LogoApp from '../assets/images/logo-mitRest.png'
import { CrownOutlined, LoginOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import styles from '../styles/Menu.module.css'
import Cart from './Cart';
import useFirebase from '../Hooks/useFirebase';

const TopMenu = () => {

  const { user, logout } = useFirebase();
  
  const router = useRouter();
  
  const isActive = (path) => {
    return router.pathname == path ? styles.active : "";
  }

  const showMenu = () => {
    return router.pathname == "/" ? styles.menu_hidden : "";
  }

  return (
    <>
      <div id={styles.header}>
        <Link as={`/`} href="/">
          <a><Image src={LogoApp} alt="Logo MIT Restaurants" href="/"/></a>
        </Link>
      </div>
      <div className={showMenu()}>
        <Row style={{ margin: '2rem auto' }}>
          <Col span={15} xs={22} md={15} offset={2} className={styles.main_menu}>
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
          </Col>
          <Col span={3} xs={12} md={3}>
            <div className={styles.user_info}>
              <span className={styles.show_user}>
                {user?.email ? 
                  <>
                      Hello, {user.email}
                      <Link as={'/'} href="/">
                        <a onClick={logout}> <LogoutOutlined /> Logout</a>
                      </Link>
                  </>
                : 
                  <>
                    Account
                    <Link as={'/login/'} href="/login/">
                      <a><LoginOutlined /> Login</a>
                    </Link>
                  </>  
                }
              </span>
            </div>
          </Col>
          <Col span={2} xs={10} md={2}>
            <Cart quantity={0} total={0} />
          </Col>
        </Row>
      </div>
    </>
  )
};
export default TopMenu;
