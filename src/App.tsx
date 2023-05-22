import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider, createTheme} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from "./components/Header";
import MyAvatar from "./components/MyAvatar";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import ScrollUp from "./utils/ScrollUp";

const App: React.FC = () => {
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light'
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <MyAvatar/>
            <section id={'about'} >
                <About />
            </section>
            <section id={'skills'} >
                <Skills />
            </section>
            <section id={'works'} >
                <Works />
            </section>
            <section id={'contact'} >
                <Contact />
            </section>
            <ScrollUp />
        </ThemeProvider>
    )
}

export default App;