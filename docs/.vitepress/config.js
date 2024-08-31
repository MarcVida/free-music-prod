import {
    commitRef,
    feedback,
    meta,
    sidebar,
    socialLinks
} from './constants'

module.exports = {
    title: "Free Music Prod",
    description: meta.description,
    lang: "en-US",
    lastUpdated: true,
    cleanUrls: true,
    appearance: "dark",
    srcExclude: ["README.md"],
    head: [
        ['meta', { name: 'theme-color', content: '#A8B1FF' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:locale', content: 'en' }],
        ['link', { rel: 'icon', href: '/fmp-logo-1.png' }],
        // PWA
        ['link', { rel: 'icon', href: '/fmp-logo-1.png', type: 'image/svg+xml' }],
        ['link', { rel: 'alternate icon', href: '/fmp-logo-1.png' }],
        ['link', { rel: 'mask-icon', href: '/fmp-logo-1.png', color: '#A8B1FF' }],
        // prettier-ignore
        ["meta", { name: "keywords", content: meta.keywords.join(" ") }],
        ['link', { rel: 'apple-touch-icon', href: '/fmp-logo-1.png', sizes: '192x192' }]
    ],
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "About", link: "/about" }
        ],
        sidebar,
        footer: {
            message: `${feedback} (rev: ${commitRef})`
        },
        outline: "deep",
        logo: "/fmp-logo-1-resize.png",
        socialLinks
    }
}