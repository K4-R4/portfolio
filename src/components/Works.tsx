import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Chip, Grid} from "@mui/material";

interface WorkProps {
    title: string,
    tech: string[],
    description: string,
    repository: string,
    url: string
}

const workDetails: WorkProps[] = [
    {
        title: 'so_long',
        tech: ['C'],
        description: '42Tokyoの課題としてCで制作した2Dの脱出ゲームです。指定のフォーマットのマップファイルからゲームを生成できます。' +
            'アイテムを収集してゴールに到達することが目的です。' +
            'スタートからゴールまでに有効な経路があるかなどのマップの検証や、ファイルから効率よくマップを読み取ることが難しかったです。',
        repository: 'https://github.com/orgs/recursion-team-a/repositories',
        url: ''
    },
    {
        title: '"Tuning the backend" Contest 2023',
        tech: ['TypeScript', 'MySQL', 'next.js'],
        description: '42Tokyoでバックエンドのチューニングコンテストに参加しました。' +
            '主にデータベースに関わる部分の高速化を担当しました。' +
            'インデックスの付与やn + 1問題の解消、クエリの効率化に挑戦しました。',
        repository: 'https://github.com/K4-R4/42HoursTuning2023-1',
        url: ''
    },
    {
        title: 'トランプゲーム(仮)',
        tech: ['TypeScript', 'Phaser.js', 'Next.js', 'React', 'tailwindCSS'],
        description: '複数人で開発中のトランプゲームです。設計や技術選定に関しては開発ログやIssueにあります',
        repository: 'https://github.com/orgs/recursion-team-a/repositories',
        url: ''
    },
    {
        title: '42',
        tech: ['C'],
        description: '42Tokyoで取り組んだ課題の一覧です。',
        repository: 'https://github.com/K4-R4/42.git',
        url: ''
    },
    {
        title: 'AtCoder Bookmarks',
        tech: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
        description: 'AtCoderで間違えた問題をメモとともに保存しておくChrome拡張機能です。' +
            'AtCoderでコンテストに取り組む中で、溶けなかった問題をまとめておいて効率的に見直したいという考えから制作しました。' +
            'Chrome storageを使用しているため、端末間で保存した内容が共有されるようになっています。',
        repository: 'https://github.com/K4-R4/atcoder-bookmarks',
        url: 'https://chrome.google.com/webstore/detail/atcoder-bookmarks/kiaidplgaggiackabggkpopkmdiljkij?hl=ja'
    },
    {
        title: 'Clicker Empire Game',
        tech: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
        description: 'Recursionのプロジェクトとして制作したゲームです。' +
            'プレイヤーはファストフード店でハンバーガーを焼く仕事から始まります。' +
            'ハンバーガーをひっくり返すごとに25ドル稼ぎ、お金を貯めることによって施設のアップグレード、' +
            '投資、または不動産の購入をすることができます。',
        repository: 'https://github.com/K4-R4/clicker-empire-game',
        url: 'https://k4-r4.github.io/clicker-empire-game/'
    },
    {
        title: 'Tetris',
        tech: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
        description: 'チーム開発で制作したテトリスです。',
        repository: 'https://github.com/K4-R4/tetris',
        url: 'https://recursion-blue-team.github.io/tetris/'
    },
    {
        title: 'Remote procedure call',
        tech: ['Python', 'JavaScript', 'node.js'],
        description: 'Remote Procedure Callの学習で、UNIXドメインソケットを用いて実装しました。' +
            'JSON-RPCの仕様をもとに制作しました。' +
            'クライアントとサーバーがJSON形式のデータをやり取りします。' +
            'クライアントはnode.jsで、サーバーはPythonで実装しました。',
        repository: 'https://github.com/K4-R4/remote-procedure-call',
        url: ''
    },
    {
        title: 'CS50 Introduction to Game Development',
        tech: ['Lua', 'Love2D', 'Unity', 'C#'],
        description: 'オープンコースウェアCS50Gにて提出した課題です。' +
            '広く知られているゲームを題材にしながら、ゲーム一般がどのように実装されているのかについて学びました。',
        repository: 'https://github.com/K4-R4/cs50-introduction-to-game-development',
        url: ''
    },
    {
        title: 'Non-sticky めも',
        tech: ['JavaScript', 'HTML', 'CSS', 'SQLite', 'node.js', 'Electron'],
        description: 'チーム開発で制作したメモ帳デスクトップアプリです。' +
            'メモの内容をデスクトップの背景画像として表示できる点に特徴があります。' +
            'Electronで制作したことでクロスプラットフォームなアプリケーションになっています。' +
            'データベース、メインプロセスとレンダラープロセスの通信などを担当しました。' +
            'smartHR賞を受賞しました',
        repository: 'https://github.com/K4-R4/team-s09',
        url: ''
    },
    {
        title: 'CS50 Introduction to Computer Science',
        tech: ['C', 'SQLite', 'Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
        description: 'オープンコースウェアCS50にて提出した課題です。CS50はコンピュータサイエンスへの入門講義です。' +
            'コンピュータの仕組みの概要から始まり、最終的にはFlaskを用いてウェブアプリケーションの開発を行いました。' +
            'すべての課題を提出し修了しました。',
        repository: 'https://github.com/K4-R4/cs50-introduction-to-computer-science',
        url: ''
    }
]

const WorkCard: React.FC<WorkProps> = ({title, tech, description, repository, url}: WorkProps) => {
    return (
        <Card sx={{width: '100%', m: 2}}>
            <CardContent>
                <Typography variant="h5" component="div" sx={{pb: 2}}>
                    {title}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                    {tech.sort().map((techProp: string) => {
                        return <Chip label={techProp} sx={{mx: 0.5, mb: 0.2}}/>
                    })}
                </Typography>
                <Typography variant="body1" sx={{pt: 2}}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={repository}>Github</Button>
                <Button size="small" disabled={url.length === 0} href={url}>View</Button>
            </CardActions>
        </Card>
    );
}

const Works: React.FC = () => {
    return (
        <>
            <Grid container justifyContent='center' alignItems='center' sx={{flexDirection: 'column', p: 2}}>
                <Grid container md={5} xs={12} display='flex' justifyContent='center' sx={{pt: 1}}>
                    <Typography variant='h5'>
                        Works
                    </Typography>
                </Grid>
                <Grid container md={5} xs={12} display='flex' justifyContent='start'>
                    {workDetails.map((workDetail: WorkProps) => {
                        return <WorkCard {...workDetail} />
                    })}
                </Grid>
            </Grid>
        </>
    )
}

export default Works