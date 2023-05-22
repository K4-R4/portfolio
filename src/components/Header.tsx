import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import Button from "@mui/material/Button";

interface NavProps {
    name: string
}

const NavButton: React.FC<NavProps> = (props: NavProps) => {
    return (
        <>
            <AnchorLink
                href={'#' + props.name}
                style={{textDecoration: 'none', color: 'inherit'}}
            >
                <Button color={'inherit'} sx={{p: 1, m: 1}}>
                    {props.name.toUpperCase()}
                </Button>
            </AnchorLink>
        </>
    )
}

const Header: React.FC = () => {
    return (
        <>
            <AppBar
                position="static"
                style={{alignItems: 'center'}}
            >
                <Toolbar>
                    <NavButton name= 'about' />
                    <NavButton name= 'skills' />
                    <NavButton name= 'works' />
                    <NavButton name= 'contact' />
                    {/*<Button color='inherit' sx={{p: 1, m: 1}}>*/}
                    {/*    ABOUT*/}
                    {/*</Button>*/}
                    {/*<Button color='inherit' sx={{p: 1, m: 1}}>*/}
                    {/*    SKILLS*/}
                    {/*</Button>*/}
                    {/*<Button color='inherit' sx={{p: 1, m: 1}}>*/}
                    {/*    Works*/}
                    {/*</Button>*/}
                    {/*<Button color='inherit' sx={{p: 1, m: 1}}>*/}
                    {/*    CONTACT*/}
                    {/*</Button>*/}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;