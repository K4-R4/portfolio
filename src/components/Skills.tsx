import React from "react";
import {Card, CardContent, Grid, Typography} from "@mui/material";

interface SkillProps {
    name: string
    content: string
}
const SkillCard: React.FC<SkillProps> = (props: SkillProps) => {
    return (
        <>
            <Card sx={{width: '100%', m: 1}}>
                <CardContent>
                    <Typography variant='h6' align='left'>
                        {props.name}
                    </Typography>
                    <Typography color='textSecondary'>
                        {props.content}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}
const Skills: React.FC = () => {
    return (
        <>
            <Grid container justifyContent='center' alignItems='center' sx={{flexDirection: 'column', p: 2}}>
                <Grid container md={5} xs={12} display='flex' justifyContent='center' sx={{p: 1}}>
                    <Typography variant='h5'>
                        Skills
                    </Typography>
                </Grid>
                <Grid container md={5} xs={12} display='flex' justifyContent='start' sx={{p: 1}}>
                    <Typography variant='body1' sx={{p: 2}}>
                        規模を問わず、開発で使用したことのある言語、フレームワーク、ツールについてまとめています。<br/>
                    </Typography>
                    <SkillCard name='Frontend' content='JavaScript / HTML / CSS / Bootstrap / React' />
                    <SkillCard name='Backend' content='C / C++ / node.js / Python / Flask / Electron' />
                    <SkillCard name='Infrastracture' content='Git / MySQL / SQLite' />
                </Grid>
            </Grid>
        </>
    )
}

export default Skills;
