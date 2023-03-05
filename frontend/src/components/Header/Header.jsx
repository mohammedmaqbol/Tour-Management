import React, {useRef, useEffect} from 'react'
import {Container, Row, Button} from 'reactstrap'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import '../Header/Header.css'
const nav__links= [
    {
        path:'/home',
        display: 'Home'
    },
    {
        path:'/#',
        display:'About'
    },
    {
        path:'/tours',
        display:'Tours'
    }
]
export const Header = () => {

  const headerRef = useRef()
  
  const stickyHeaderFunc = ()=> {
    window.addEventListener('scroll', ()=>{
        if(document.body.scrollTo > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('sticky__header')
        }else{
            headerRef.current.classList.remove('stick_header')
        }
    })
  }
  useEffect(()=>{
    stickyHeaderFunc()
    return window.removeEventListener('scroll', stickyHeaderFunc)
  })

  return <header className='header' ref={headerRef}>
    <Container>
        <Row>
            <div className="nav__warpper d-flex align-item-center justify-content-between">
               {/*************** Logo *****************/}
                <div className='logo'>
                  <img src={logo} alt=''></img>
                </div>
               {/*************** End Logo *****************/}
               {/***************  Menu *****************/}
               <div className="navigation">
                 <ul className='menu d-flex aling-items-center gap-5'>
                    {nav__links.map((item, index) => (
                        <li className='nav__item' key={index}>
                            <NavLink to={item.path}>{item.display}</NavLink>
                        </li>
                    ))}
                 </ul>
               </div>
               {/*************** End Menu *****************/}

               <div className="nav__right d-flex align-items-center gap-4">
                  <div className="nav__btns  d-flex align-items-center gap-4">
                    <Button className='btn secondary__btn'>
                    <Link to='/login'>Login</Link>
                    </Button>
                    <Button className='btn primary__btn'>
                        <Link to='/register'>Register</Link>
                    </Button>
                    </div>

                    <span className='mobile__menu'>
                        <i className='ri-menu-line'></i>
                    </span>  
               </div>
            </div>
        </Row>
    </Container>
  </header>
}

export default Header;
