import { defineUserConfig, defaultTheme } from 'vuepress';

export default defineUserConfig({
    lang: 'zh-CN',
    title: '深入架构原理与实践',
    description: '高可用服务体系原理与实践',
    head: [
        ['link', { rel: "shortcut icon", href: "/assets/favicon.ico" }],
    ],
    theme: defaultTheme({
        navbar: [{
                text: '首页',
                link: '/'
            },
            {
                text: '小学生英语',
                link: '/english-for-pupil/'
            },
            {
                text: 'GitHub仓库',
                link: 'https://github.com/isno/theByteBook'
            }
        ],
        sidebar: {
            "/english-for-pupil/": [
            {
                collapsable: true,
                sidebarDepth: 0,
                children: [
                    '/english-for-pupil/readme.md',
                    '/english-for-pupil/noun.md',
                    '/english-for-pupil/article.md',
                    '/english-for-pupil/pronoun.md',
                    '/english-for-pupil/possesive-nouns.md',
                    {
                        "text":"句子结构",
                        children:[
                            '/english-for-pupil/sentence-struct-1.md',
                            '/english-for-pupil/sentence-struct-2.md',
                            '/english-for-pupil/sentence-struct-3.md',
                            '/english-for-pupil/sentence-struct-4.md',
                        ]
                    }
                ]
            }],
            "/": [
                {
                    children: [
                        '/content/chapter1/index.md',
                          '/content/chapter1/latency.md',
                    ]
                },
                {
                    text: '基础网络优化',
                    collapsable: true,
                    path: '/',
                    sidebarDepth: 0,
                    children: [{
                            text: "理解",
                            path: '/content/chapter1/intro.md',
                            children: [
                                '/content/chapter1/bgp.md',
                                '/content/chapter1/congestion-control.md',
                                '/content/chapter1/netfilter.md',
                            ]
                        },
                        {
                            text: "观测",
                            children: [
                                '/content/chapter1/mtr.md'
                            ]
                        }
                    ]
                },
                {
                    text: '优化应用协议性能',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        '/content/http/latency.md',
                        '/content/http/http-dns.md',
                        '/content/http/http.md',
                        '/content/http/ssl.md'
                    ]
                },
                {
                    text: 'API网关设计',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        '/content/api-gateway/intro.md',
                    ]
                }
            ]
        }
    })
});