import React from 'react'
import Navbar from './navbar';
import Footbar from './footbar';

interface Props {
    children: React.ReactNode;
}

function Layout({ children }:Props) {
  return (
    <div>
        <Navbar/>
        {children}
        <Footbar/>
    </div>
  )
}

export default Layout