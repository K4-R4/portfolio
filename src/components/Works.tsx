import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Chip, Grid, Link, Stack} from "@mui/material";

interface WorkProps {
    title: string,
    tech: string[],
    description: string,
    repository: string,
    url: string
}

const TechChips = (techProps: string[]) => {
    const chips: React.JSX.Element[] = techProps.map((techProp: string) => {
        return <Chip label={techProp} sx={{mx: 0.5}} />
    })
    return (
        <>
            <Stack direction={'row'}>
                {chips}
            </Stack>
        </>
    )
}

const WorkCard: React.FC<WorkProps> = ({title, tech, description, repository, url}: WorkProps) => {
    const chips: React.JSX.Element = TechChips(tech.sort());
    return (
        <Card sx={{ width: '100%', m: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div" sx={{pb: 2}}>
                    {title}
                </Typography>
                <Typography sx={{ fontSize: 7 }} color="text.secondary" gutterBottom>
                    {chips}
                </Typography>
                <Typography variant="body1" sx={{pt: 3}}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={repository}>Github</Button>
                <Button size="small" disabled={url.length === 0} href={url} >View</Button>
            </CardActions>
        </Card>
    );
}

const Works: React.FC = () => {
    return (
        <>
            <Grid container justifyContent='center' alignItems='center' sx={{flexDirection: 'column', p: 2}}>
                <Grid container md={5} xs={12} display='flex' justifyContent='center' sx={{p: 1}}>
                    <Typography variant='h5'>
                        Works
                    </Typography>
                </Grid>
                <Grid container md={5} xs={12} display='flex' justifyContent='start'>
                    <WorkCard
                        title={'Clicker Empire Game'}
                        tech={['JavaScript', 'HTML', 'CSS', 'Bootstrap']}
                        description={'Recursionの課題として制作したゲームです。提示された仕様をもとに取り組みました。'}
                        repository={'https://github.com/K4-R4/clicker-empire-game'}
                        url={'https://k4-r4.github.io/clicker-empire-game/'}
                    />
                    <WorkCard
                        title={'Tetris'}
                        tech={[ 'JavaScript', 'HTML', 'CSS', 'Bootstrap']}
                        description={'チーム開発で制作したテトリスです。' +
                            'ロジック周りを担当しました。'}
                        repository={'https://github.com/K4-R4/tetris'}
                        url={''}
                    />
                    <WorkCard
                        title={'AtCoder Bookmarks'}
                        tech={['JavaScript', 'HTML', 'CSS', 'Bootstrap']}
                        description={'AtCoderで間違えた問題をメモとともに保存しておくChrome拡張機能です。'}
                        repository={'https://github.com/K4-R4/atcoder-bookmarks'}
                        url={''}
                    />
                    <WorkCard
                        title={'Remote procedure call'}
                        tech={['Python', 'JavaScript', 'node.js']}
                        description={'Remote Procedure Callの学習で、UNIXドメインソケットを用いて実装しました。' +
                            'JSON-RPCの仕様をもとに制作しました。'}
                        repository={'https://github.com/K4-R4/remote-procedure-call'}
                        url={''}
                    />
                    <WorkCard
                        title={'CS50 Introduction to Game Development'}
                        tech={['Lua', 'Love2D', 'Unity', 'C#']}
                        description={'オープンコースウェアCS50Gにて提出した課題です。' +
                            '広く知られているゲームを題材にしながら、ゲーム一般がどのように実装されているのかについて学びました。'}
                        repository={'https://github.com/K4-R4/cs50-introduction-to-game-development'}
                        url={''}
                    />
                    <WorkCard
                        title={'Non-sticky めも'}
                        tech={[ 'JavaScript', 'HTML', 'CSS', 'SQLite', 'node.js', 'Electron']}
                        description={'チーム開発で制作したメモ帳デスクトップアプリです。' +
                            'データベースの周辺、メインプロセスとレンダラープロセスの通信などを担当しました。'}
                        repository={'https://github.com/K4-R4/team-s09'}
                        url={''}
                    />
                    <WorkCard
                        title={'CS50 Introduction to Computer Science'}
                        tech={['C', 'SQLite', 'Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'Bootstrap']}
                        description={'オープンコースウェアCS50にて提出した課題です。CS50はコンピュータサイエンスへの入門講義です。' +
                            'コンピュータの仕組みの概要から始まり、最終的にはFlaskを用いてウェブアプリケーションの開発を行いました。' +
                            'すべての課題を提出し修了しました。'}
                        repository={'https://github.com/K4-R4/cs50-introduction-to-computer-science'}
                        url={''}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default Works