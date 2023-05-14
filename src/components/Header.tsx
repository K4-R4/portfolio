import React from "react";
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import Button from "@mui/material/Button";

const Header: React.FC = () => {
    return (
        <>
            <AppBar
                position="static"
                style={{alignItems: 'center'}}
            >
                <Toolbar>
                    <Button color='inherit' sx={{p: 1, m: 1}}>
                        ABOUT
                    </Button>
                    <Button color='inherit' sx={{p: 1, m: 1}}>
                        SKILLS
                    </Button>
                    <Button color='inherit' sx={{p: 1, m: 1}}>
                        Works
                    </Button>
                    <Button color='inherit' sx={{p: 1, m: 1}}>
                        CONTACT
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;