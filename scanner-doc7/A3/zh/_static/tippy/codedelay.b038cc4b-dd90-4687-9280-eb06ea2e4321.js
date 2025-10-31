selector_to_html = {"a[href=\"#id6\"]": "<figure class=\"align-center\" id=\"id6\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E2100100365535..png\"><img alt=\"../../media/3E2100100365535..png\" src=\"../../media/3E2100100365535..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u7981\u7528\u540c\u7801\u626b\u63cf</span><a class=\"headerlink\" href=\"#id6\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#ms\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">0 \u6beb\u79d2<a class=\"headerlink\" href=\"#ms\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#disable-same-code-scanning\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7981\u7528\u540c\u7801\u626b\u63cf<a class=\"headerlink\" href=\"#disable-same-code-scanning\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">500\u6beb\u79d2<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#same-code-delay-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u540c\u7801\u5ef6\u65f6\u8bbe\u7f6e<a class=\"headerlink\" href=\"#same-code-delay-settings\" title=\"Link to this heading\">#</a></h1><p>\u4e3a\u4e86\u9632\u6b62\u540c\u4e00\u6761\u7801\u5728\u626b\u63cf\u8fc7\u7a0b\u4e2d\u88ab\u591a\u6b21\u8bfb\u53d6\uff0c \u60a8\u53ef\u4ee5\u5728\u5141\u8bb8\u540c\u4e00\u6761\u7801\u8bfb\u53d6\u4e4b\u524d\u8bbe\u7f6e\u65f6\u95f4\u9650\u5236\u3002</p>", "a[href=\"#id5\"]": "<figure class=\"align-center\" id=\"id5\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010033000..png\"><img alt=\"../../media/3E210010033000..png\" src=\"../../media/3E210010033000..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">3000\u6beb\u79d2</span><a class=\"headerlink\" href=\"#id5\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">3000\u6beb\u79d2<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E21001003500..png\"><img alt=\"../../media/3E21001003500..png\" src=\"../../media/3E21001003500..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">500\u6beb\u79d2</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010030..png\"><img alt=\"../../media/3E210010030..png\" src=\"../../media/3E210010030..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">0 \u6beb\u79d2</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
