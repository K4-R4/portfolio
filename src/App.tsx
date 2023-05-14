import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider, createTheme} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from "./components/Header";
import MyAvatar from "./components/MyAvatar";

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
        </ThemeProvider>
    )
}

export default App;