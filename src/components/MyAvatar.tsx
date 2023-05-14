import React from "react";
import {Avatar, Box, Typography} from "@mui/material";

import avatarImage from '../static/images/avater.png'

const MyAvatar: React.FC = () => {
    return (
        <>
            <Box sx={{p: 4}}>
                <Box display='flex' justifyContent='center' sx={{p: 1}}>
                    <Avatar
                        alt="Profile image"
                        src={avatarImage}
                        sx={{width: 150, height: 150}}
                    />
                </Box>
                <Box display='flex' justifyContent='center' sx={{p: 1}}>
                    <Typography variant='h5'>
                        K4-R4
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default MyAvatar;