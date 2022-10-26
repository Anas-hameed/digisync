import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import { Link } from 'react-router-dom';
import { Button, KIND } from 'baseui/button';
import { ThemeProvider, createTheme, lightThemePrimitives } from 'baseui';

import MainLogo from "../../media/Images/logo.png";
import { Fragment } from 'react';


function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-white  ">
        <div className="max-w-7xl   px-4 sm:px-6 lg:px-0">
          <div className="flex items-center  justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <div onClick={() => { navigate("/home"); }}>
                        <img src={MainLogo} className="w-[220px] cursor-pointer my-[5px]" alt="Digisync Logo" />
                </div>
                
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex  items-baseline space-x-4">
                  
                  
                  <Link to="/" className="text-inherit no-underline  hover:bg-slate-100  p-3 rounded-full ">
                  <button  className="text-black font-roboto"  style={{ fontWeight: '600', textTransform: 'none', borderRadius: '25px', fontSize: '18px',  }}
                  >HOME</button>
                  </Link>
                  
                  <Link to="/poster-generation" className="text-inherit no-underline  hover:bg-slate-100  p-3 rounded-full ">
                  <button  className="text-black font-roboto"  style={{ fontWeight: '600', textTransform: 'none', borderRadius: '25px', fontSize: '18px',  }}
                  >CREATE</button>
                  </Link>
                  
                  <Link to="/#feature" className="text-inherit no-underline  hover:bg-slate-100  p-3 rounded-full">
                  <button  className="text-black font-roboto"  style={{ fontWeight: '600', textTransform: 'none', borderRadius: '25px', fontSize: '18px',  }}
                  >FEATURE</button>
                  </Link>
                  
                  <Link to="/#faq" className="text-inherit no-underline  hover:bg-slate-100  p-3 rounded-full  ">
                    <button  className="text-black font-roboto"  style={{ fontWeight: '600', textTransform: 'none', borderRadius: '25px', fontSize: '18px',  }}
                  >FAQ</button>
                  </Link>

                    {props?.config?.loggedIn ? (
                        <Fragment>
                            <Button style={{ margin: '5px', fontWeight: '600', textTransform: 'none', borderRadius: '25px', fontSize: '18px',  }} aria-haspopup="true" onClick={handleProfileMenuOpen}><Avatar alt="Profile Menu" src={props.config.avatar} style={{ height: '35px', width: '35px', backgroundColor: '#bbb', fontSize: '14px' }}>{`${props.config.firstName[0]}${props.config.lastName[0]}`}</Avatar></Button>
                        </Fragment>
                    ) : (
                        <Fragment>
                            
                                <Link to="/login" className="text-inherit hover:bg-slate-100 no-underline mr-[40px]  p-2 rounded-full ">
                                    <button  className="text-violet-400 font-roboto"  style={{ fontWeight: '600', textTransform: 'none', borderRadius: '25px', fontSize: '18px',  }}
                                        
                                        
                                    >Login</button>
                                </Link>
                            
                                <Link to="/signup" className="text-inherit no-underline mr-[40px]  bg-violet-400 p-2 rounded-full  hover:bg-violet-500">
                                    <button  className="text-white font-roboto"  style={{ fontWeight: '600', textTransform: 'none', borderRadius: '25px', fontSize: '18px',  }}
                                        
                                        
                                    >Sign Up</button>
                                </Link>
                            
                                </Fragment>
                            )}

                </div>
              </div>

            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2  hover:animate-pulse "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="hover:bg-slate-100 font-roboto text-violet-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  HOME
                </a>
                <a
                  href="/poster-generation"
                  className="hover:bg-slate-100 font-roboto text-violet-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  CREATE
                </a>
                <a
                  href="/#feature"
                  className="hover:bg-slate-100 font-roboto text-violet-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  FEATURE
                </a>

                <a
                  href="/#feature"
                  className="hover:bg-slate-100 font-roboto text-violet-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  FAQ
                </a>
                <hr/>
                <a
                  href="/login"
                  className="hover:bg-slate-100 font-roboto text-violet-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="hover:bg-violet-500 bg-violet-400 font-roboto text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sign Up
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      
      
    </div>
  );
}

export default Nav;