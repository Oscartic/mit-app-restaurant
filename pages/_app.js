import '../styles/globals.css'
import 'antd/dist/antd.css'
import TopMenu from '../components/Menu'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopMenu />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
