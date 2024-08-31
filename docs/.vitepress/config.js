import {
    icon,
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
        ['link', { rel: 'icon', href: icon }],
        // PWA
        ['link', { rel: 'icon', href: icon, type: 'image/svg+xml' }],
        ['link', { rel: 'alternate icon', href: icon }],
        ['link', { rel: 'mask-icon', href: icon, color: '#A8B1FF' }],
        // prettier-ignore
        ["meta", { name: "keywords", content: meta.keywords.join(" ") }],
        ['link', { rel: 'apple-touch-icon', href: icon, sizes: '192x192' }]
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
        logo: {
            dark: "/FMP_LOGO_WHITE_RESIZED.png",
            light: "/FMP_LOGO_GREY_RESIZED.png"
        },
        socialLinks
    }
}