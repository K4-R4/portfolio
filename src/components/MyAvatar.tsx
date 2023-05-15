import React from "react";
import {Avatar, Grid, Typography} from "@mui/material";

import avatarImage from '../static/images/avater.png'

const MyAvatar: React.FC = () => {
    return (
        <>
            <Grid xs={12} sx={{p: 2}}>
                <Grid xs={6} display='flex' justifyContent='center' sx={{p: 1}}>
                    <Avatar
                        alt='Profile image'
                        src={avatarImage}
                        sx={{width: 150, height: 150}}
                    />
                </Grid>
                <Grid xs={6} display='flex' justifyContent='center' sx={{p: 1}}>
                    <Typography variant='h5'>
                        K4-R4
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default MyAvatar;