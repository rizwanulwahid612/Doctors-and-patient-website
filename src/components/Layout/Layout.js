import React from 'react';
// import Nav from '../Nav/Nav';
import './Layout.css';
const Layout = ({children}) => {
    return (
       <div>
           {/*<Nav></Nav>*/}

           <main className="main">
               <div className="container">
                   {children}
               </div>
           </main>

       </div>
    );
};

export default Layout;