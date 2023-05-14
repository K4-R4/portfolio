import React from "react";
import {Grid, Typography} from "@mui/material";

const About: React.FC = () => {
    return (
        <>
            <Grid container justifyContent='center' alignItems='center' sx={{flexDirection: 'column', p: 2}}>
                <Grid container md={5} xs={12} display='flex' justifyContent='center' sx={{p: 1}}>
                    <Typography variant='h5'>
                        About
                    </Typography>
                </Grid>
                <Grid container md={5} xs={12} display='flex' justifyContent='start'>
                    <Typography variant='body1' sx={{p: 2}}>
                        こんにちは、K4-R4です。<br/>
                        趣味で競プロをしています。<br/>
                        2023年5月から、42Tokyoでソフトウェア開発を勉強しています。<br/>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default About;