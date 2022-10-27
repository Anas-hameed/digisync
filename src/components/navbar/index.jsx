import { Link, useNavigate } from 'react-router-dom';
import { Button, KIND } from 'baseui/button';
import { ThemeProvider, createTheme, lightThemePrimitives } from 'baseui';
import MainLogo from "../../media/Images/logo.png";
import { Fragment, useState } from 'react';
import {toast} from 'react-toastify';


const Navbar = (props) => {
    const navigate = useNavigate();
    const [openNav, setOpenNav] = useState(false);
    const handleLogout= async()=>{
        props.logout();
        toast.success("Logout was Successful"); 
        localStorage.removeItem('token');
        localStorage.removeItem('userObject');
        localStorage.removeItem('redirect');
    }
    const toogleMenu = () => {
        setOpenNav(!openNav);
    }
    return (
        <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
                colors: {
                    buttonPrimaryHover: "rgb(241, 245, 249)",
                    buttonPrimaryActive: "rgb(241, 245, 249)"
                }
            })}
        >
            <div className='mx-auto 2xl:max-w-[1400px]'>
                <nav className=" bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <div onClick={() => { navigate("/home"); }} className="flex-grow-[1] ml-5 lg:ml-12">
                            <img src={MainLogo} className="w-[160px] md:[180px] lg:w-[220px] cursor-pointer my-[5px]" alt="DigiSync Logo" />
                        </div>
                        <button data-collapse-toggle="navbar-default" onClick={toogleMenu} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                        <div className={`w-full md:block md:w-auto ${openNav || 'hidden'}`}>
                            <div className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                                <div className="flex flex-col gap-2 md:flex-row items-center justify-center">
                                    <Link to="/" className="text-inherit no-underline">
                                        <Button style={{ fontWeight: '600', textTransform: 'none', borderRadius: '25px', fontSize: '18px', fontFamily: 'Roboto' }}
                                            kind={KIND.primary}
                                            overrides={{
                                                BaseButton: {
                                                    style: ({ $theme }) => ({
                                                        backgroundColor: "#fff",
                                                        button: "#fff"
                                                    })
                                                }
                                            }}
                                        ><span style={{ color: "#000" }}>Home</span></Button>
                                    </Link>
                                    <Link to="/feature" className="text-inherit no-underline">
                                        <Button style={{ fontWeight: '600', textTransform: 'none', borderRadius: '25px', fontSize: '18px', fontFamily: 'Roboto' }}
                                            kind={KIND.primary}
                                            overrides={{
                                                BaseButton: {
                                                    style: ({ $theme }) => ({
                                                        backgroundColor: "#fff",
                                                        button: "#fff"
                                                    })
                                                }
                                            }}
                                        ><span style={{ color: "#000" }}>Features</span></Button>
                                    </Link>
                                    <Link to="/faqs" className="text-inherit no-underline">
                                        <Button style={{ fontWeight: '600', textTransform: 'none', borderRadius: '25px', fontSize: '18px', fontFamily: 'Roboto' }}
                                            kind={KIND.primary}
                                            overrides={{
                                                BaseButton: {
                                                    style: ({ $theme }) => ({
                                                        backgroundColor: "#fff",
                                                        button: "#fff"
                                                    })
                                                }
                                            }}
                                        ><span style={{ color: "#000" }}>FAQs</span></Button>
                                    </Link>
                                    {props?.user?.loggedIn ? (
                                        <ThemeProvider
                                            theme={createTheme(lightThemePrimitives, {
                                                colors: {
                                                    buttonPrimaryHover: "#1565c0",
                                                    buttonPrimaryActive: "#1565c0"
                                                }
                                            })}
                                        >
                                            <Link to="/" onClick={handleLogout}  className="text-inherit no-underline md:mr-5 lg:mr-10">
                                                <Button style={{ fontWeight: '600', textTransform: 'none', borderRadius: '25px', fontSize: '18px', fontFamily: 'Roboto' }}
                                                    kind={KIND.primary}
                                                    overrides={{
                                                        BaseButton: {
                                                            style: ({ $theme }) => ({
                                                                backgroundColor: "#1976d2",
                                                                button: "#fff"
                                                            })
                                                        }
                                                    }}
                                                >Logout</Button>
                                            </Link>
                                        </ThemeProvider>
                                    ) : (
                                        <Fragment>
                                            <Link to="/login" className="text-inherit no-underline">
                                                <Button style={{ fontWeight: '600', textTransform: 'none', borderRadius: '25px', fontSize: '18px', fontFamily: 'Roboto' }}
                                                    kind={KIND.primary}
                                                    overrides={{
                                                        BaseButton: {
                                                            style: ({ $theme }) => ({
                                                                backgroundColor: "#fff",
                                                                button: "#fff"
                                                            })
                                                        }
                                                    }}
                                                ><span style={{ color: "#1976d2" }}>Login</span></Button>
                                            </Link>
                                            <ThemeProvider
                                                theme={createTheme(lightThemePrimitives, {
                                                    colors: {
                                                        buttonPrimaryHover: "#1565c0",
                                                        buttonPrimaryActive: "#1565c0"
                                                    }
                                                })}
                                            >
                                                <Link to="/signup" className="text-inherit no-underline md:mr-5 lg:mr-10">
                                                    <Button  style={{ fontWeight: '600', textTransform: 'none', borderRadius: '25px', fontSize: '18px', fontFamily: 'Roboto',  } }
                                                        kind={KIND.primary}
                                                        overrides={{
                                                            BaseButton: {
                                                                style: ({ $theme }) => ({
                                                                    backgroundColor: "#1976d2",
                                                                    button: "#fff"
                                                                })
                                                            }
                                                        }}
                                                    >Sign Up</Button>
                                                </Link>
                                            </ThemeProvider>
                                        </Fragment>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </ThemeProvider>
    );
}


export default Navbar;