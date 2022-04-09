import React,{useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import {Nav,NavbarContainer,NavLogo,MobileIcon, NavManu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarElements';
import {Link, useNavigate} from 'react-router-dom'
import Account from "../account/account";
const Navbar = ({toggle}) => {

const [scrollNav, setScrollNav] = useState(false)

const changeNav = ()=> {

  if(window.scrollY >= 80){
    setScrollNav(true)
  }else{
    setScrollNav(false)
  }
};

useEffect(() =>{
  window.addEventListener('scroll',changeNav)
}, []);

const toggleHome = () => {
  scroll.scrollToTop();
};
const navigate=useNavigate();
const changeRoute=()=>{
    navigate('/Signup')

    }

    return (
       <>
<IconContext.Provider value={{color:'#fff'}}>

       <Nav scrollNav={scrollNav}>
       <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>Doctors Portal</NavLogo> 
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavManu>
              <NavItem>
                  <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLinks>
                  </NavItem>
              <NavItem>
                <NavLinks to="doctors" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Doctors</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                  </NavItem>
                  <NavItem>
                  <NavLinks to="/Appointment" onClick={()=>{navigate('/Appointment')}}>Appointment</NavLinks>
                  </NavItem>
                  <NavItem>
                  <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Contact</NavLinks>
                  </NavItem>
                  <NavItem>
                  <NavLinks to="admin" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Admin</NavLinks>
                  </NavItem>
              <NavItem>
              <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} ><Account/></NavLinks>
                      </NavItem>
          </NavManu>
         <NavBtn>

         </NavBtn>

       </NavbarContainer>
       </Nav>
       </IconContext.Provider>
       </>
    );
};

export default Navbar;
