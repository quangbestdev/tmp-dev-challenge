import React from 'react';
import Footer from '../Footer';

const Layout = ({ children, hideFooter = false }) => {
  return (
    <>
      <main>
        {children}
      </main>
      {!hideFooter && (
        <Footer />
      )}
    </>
  )
}

export default Layout;