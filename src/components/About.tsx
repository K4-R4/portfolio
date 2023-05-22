import React from "react";
import {Grid, Link, Typography} from "@mui/material";

const About: React.FC = () => {
    return (
        <>
            <Grid container justifyContent='center' alignItems='center' sx={{flexDirection: 'column', p: 2}}>
                <Grid container md={5} xs={12} display='flex' justifyContent='center' sx={{p: 1}}>
                    <Typography variant='h5'>
                        About
                    </Typography>
                </Grid>
                <Grid container md={5} xs={12} display='flex' justifyContent='center'>
                    <Grid container md={9} xs={12} display='flex' justifyContent='start'>
                        <Typography variant='body1' sx={{p: 2}}>
                            K4-R4です。<br/>
                            2023年5月から、<Link href={'https://42tokyo.jp/'} underline={'none'}>42Tokyo</Link>
                            に所属しています。<br/>
                            42TokyoのカリキュラムでC言語、競技プログラミングでc++、Webアプリケーションの制作で
                            JavaScriptやPythonを使うことが多いです。
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default About;