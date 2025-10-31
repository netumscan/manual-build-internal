selector_to_html = {"a[href=\"#quick-configuration\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5feb\u901f\u914d\u7f6e<a class=\"headerlink\" href=\"#quick-configuration\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#demo-software\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6f14\u793a\u8f6f\u4ef6<a class=\"headerlink\" href=\"#demo-software\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#make-a-connection\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5efa\u7acb\u8fde\u63a5<a class=\"headerlink\" href=\"#make-a-connection\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#using-tcp-server-to-transmit-data\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u4f7f\u7528 TCP \u670d\u52a1\u7aef\u4f20\u8f93\u6570\u636e<a class=\"headerlink\" href=\"#using-tcp-server-to-transmit-data\" title=\"Link to this heading\">#</a></h1><h2>\u5feb\u901f\u914d\u7f6e<a class=\"headerlink\" href=\"#quick-configuration\" title=\"Link to this heading\">#</a></h2>"}
skip_classes = ["headerlink", "sd-stretched-link", "sd-rounded-pill"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
