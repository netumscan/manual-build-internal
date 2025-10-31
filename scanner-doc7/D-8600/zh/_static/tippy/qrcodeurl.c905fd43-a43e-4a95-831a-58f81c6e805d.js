selector_to_html = {"a[href=\"#disable-url-code\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7981\u7528\u7f51\u5740\u7801<a class=\"headerlink\" href=\"#disable-url-code\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#enable-url-code\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u542f\u7528\u7f51\u5740\u7801<a class=\"headerlink\" href=\"#enable-url-code\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#qr-code-url-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">QR\u7f51\u5740\u7801<a class=\"headerlink\" href=\"#qr-code-url-settings\" title=\"Link to this heading\">#</a></h1><p>\u963b\u6b62\u626b\u63cf\u7f51\u5740\u4e8c\u7ef4\u7801\uff0c\u5f00\u5934\u4e3a <code class=\"docutils literal notranslate\"><span class=\"pre\">http://</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">https://</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">www.</span></code></p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010330..png\"><img alt=\"../../media/3E210010330..png\" src=\"../../media/3E210010330..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u542f\u7528\u7f51\u5740\u7801</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010331..png\"><img alt=\"../../media/3E210010331..png\" src=\"../../media/3E210010331..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u7981\u7528\u7f51\u5740\u7801</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
