import React from "react";
import {Card, CardContent, Grid, Typography} from "@mui/material";

interface SkillProps {
    name: string
    contents: Array<string>
}

const skillDetails: SkillProps[] = [
    {
        name: '言語',
        contents: ['JavaScript / TypeScript / C / C++ / Python / node.js']
    },
    {
        name: 'フレームワーク',
        contents: ['Flask / Electron / React'],
    },
    {
        name: 'その他',
        contents: ['Git / MySQL / SQLite / Linux']
    },
    {
        name: '資格',
        contents: [
            '基本情報技術者試験',
            'TOEIC 920',
            '実用英語技能検定準一級',
            'HSK4級'
        ]
    }
]

const SkillCard: React.FC<SkillProps> = ({name, contents}: SkillProps) => {
    return (
        <>
            <Card sx={{width: '100%', m: 1}}>
                <CardContent>
                    <Typography variant='h6' align='left'>
                        {name}
                    </Typography>
                        {contents.map((content) => {
                            return (
                                <Typography color='textSecondary'>
                                    {content}
                                </Typography>
                            )}
                        )}
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
                <Grid container md={5} xs={12} display='flex' justifyContent='center' sx={{p: 1}}>
                    <Grid container md={9} xs={12} display='flex' justifyContent='center' sx={{p: 1}}>
                        <Typography variant='body1' sx={{p: 2}}>
                            開発で使用したことのある言語、フレームワーク、ツールや資格についてまとめています。
                        </Typography>
                    </Grid>
                    {skillDetails.map((skillDetail) => {
                        return <SkillCard {...skillDetail} />
                    })}
                </Grid>
            </Grid>
        </>
    )
}

export default Skills;
