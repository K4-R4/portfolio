import React from "react";
import Box from '@mui/material/Box'
import {Typography} from "@mui/material";

const About: React.FC = () => {
    return (
        <>
            <Box sx={{p: 2}}>
                <Box display='flex' justifyContent='center' sx={{p: 1}}>
                    <Typography variant='h5'>
                        About
                    </Typography>
                </Box>
                <Box display='flex' justifyContent='center' sx={{p: 1}}>
                    <Typography variant='body1' align='left'>
                        こんにちは、K4-R4です。<br/>
                        趣味で競プロをしています。<br/>
                        2023年5月から、42Tokyoでソフトウェア開発を勉強しています。<br/>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default About;