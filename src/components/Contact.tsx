import React from "react";
import {Avatar, Grid, Link, Typography} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact: React.FC = () => {
    return (
        <>
            <Grid container justifyContent='center' alignItems='center' sx={{flexDirection: 'column', p: 2}}>
                <Grid container md={5} xs={12} display='flex' justifyContent='center' sx={{p: 1}}>
                    <Typography variant='h5'>
                        Contact
                    </Typography>
                </Grid>
                <Grid container md={5} xs={12} display='flex' justifyContent='center' sx={{p: 1}}>
                    <Link href={'https://github.com/K4-R4'} color='inherit' sx={{mx: 2}}>
                        <Avatar>
                            <GitHubIcon />
                        </Avatar>
                    </Link>
                    <Link href={'mailto:mabdman512@gmail.com'} color='inherit' sx={{mx: 2}}>
                        <Avatar>
                            <MailIcon />
                        </Avatar>
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}

export default Contact