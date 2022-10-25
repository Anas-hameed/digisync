import { Link } from 'react-router-dom';
import { Button, KIND } from 'baseui/button';
import { ThemeProvider, createTheme, lightThemePrimitives } from 'baseui';

import MainLogo from "../../media/Images/logo.png";
import { Fragment } from 'react';


const Navbar = (props) => {

    return (
        <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
                colors: {
                    buttonPrimaryHover: "rgb(241, 245, 249)",
                    buttonPrimaryActive: "rgb(241, 245, 249)"
                }
            })}
        >
            <div style={{ marginBottom: "75px" }}>
                <div style={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none' }} className="bg-slate-100 h-[80px] flex items-center justify-center">

                    <div onClick={() => { navigate("/home"); }} className="flex-grow-[1] ml-[50px]">
                        <img src={MainLogo} className="w-[220px] cursor-pointer my-[5px]" alt="KPMS Logo" />
                    </div>
                    <div className="hidden md:block">
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
                        {props?.config?.loggedIn ? (
                            <Fragment>
                                <Button style={{ margin: '5px', fontWeight: '600', textTransform: 'none', borderRadius: '25px', fontSize: '18px', fontFamily: 'Roboto' }} aria-haspopup="true" onClick={handleProfileMenuOpen}><Avatar alt="Profile Menu" src={props.config.avatar} style={{ height: '35px', width: '35px', backgroundColor: '#bbb', fontSize: '14px' }}>{`${props.config.firstName[0]}${props.config.lastName[0]}`}</Avatar></Button>
                            </Fragment>
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
                                    <Link to="/signup" className="text-inherit no-underline mr-[40px]">
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
                                        >Sign Up</Button>
                                    </Link>
                                </ThemeProvider>
                            </Fragment>
                        )}
                    </div>
                    {/* <div className="flex md:hidden">
                        <IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                            <MenuIcon />
                        </IconButton>
                    </div> */}

                </div>
            </div>
        </ThemeProvider>
    );
}

export default Navbar;