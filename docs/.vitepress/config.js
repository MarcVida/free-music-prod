const pageSidebar = [
    { text: "Sample Packs", link: "/sample-packs" },
    { text: "Presets", link: "/presets" },
    { text: "Plugins", link: "/plugins" }
]

module.exports = {
    title: "Free Music Prod",
    description: "free music production",
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "About", link: "/about" }
        ],
        sidebar: {
            "/sample-packs": pageSidebar,
            "/presets": pageSidebar,
            "/plugins": pageSidebar
        }
    }
}