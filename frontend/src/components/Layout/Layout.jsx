import React from 'react'

import Header from '../Header/Header'
import Routers from '../../routes/Router'
import Footer from '../Footer/Footer'
function Layout() {
  return (
    <>
       <Header />
       <Routers />
       <Footer />
    </>
  )
}

export default Layout