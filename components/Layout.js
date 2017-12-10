
import Head from 'next/head';
import stylesheet from 'styles/index.scss'
import Header from './Header';
const Layout = (props) => (
  <div>

    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Header />

    {props.children}

  </div>
)

export default Layout
