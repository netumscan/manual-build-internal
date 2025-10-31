selector_to_html = {"a[href=\"#question-2-the-scanner-scans-successfully-beeps-twice-and-can-upload-data-normally-what-is-going-on\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u95ee\u98982\uff1a\u626b\u63cf\u67aa\u626b\u63cf\u6210\u529f\uff0c\u8702\u9e23\u5668\u54cd\u4e24\u58f0\uff0c\u53ef\u4ee5\u6b63\u5e38\u4e0a\u4f20\u6570\u636e\u3002\u8be5\u600e\u4e48\u529e\uff1f<a class=\"headerlink\" href=\"#question-2-the-scanner-scans-successfully-beeps-twice-and-can-upload-data-normally-what-is-going-on\" title=\"Link to this heading\">#</a></h2><p><strong>\u56de\u7b54\uff1a</strong> \u626b\u63cf\u67aa\u7684\u7535\u6c60\u7535\u91cf\u5f88\u4f4e\uff0c\u5b83\u63d0\u793a\u9700\u8981\u91cd\u65b0\u5145\u7535\u3002</p>", "a[href=\"#faq\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5e38\u89c1\u95ee\u9898<a class=\"headerlink\" href=\"#faq\" title=\"Link to this heading\">#</a></h1><h2>\u95ee\u98981\uff1a\u626b\u63cf\u6210\u529f\uff0c\u8702\u9e23\u5668\u54cd\u4e00\u58f0\uff0c\u4f46\u6ca1\u6709\u4e0a\u4f20\u6570\u636e\uff1f<a class=\"headerlink\" href=\"#question-1-the-scan-is-successful-the-buzzer-sounds-once-but-no-data-is-uploaded\" title=\"Link to this heading\">#</a></h2><p><strong>\u56de\u7b54\uff1a</strong> \u626b\u63cf\u67aa\u5df2\u8fdb\u5165\u5b58\u50a8\u6a21\u5f0f\uff0c\u9700\u8981\u626b\u63cf<a class=\"reference internal\" href=\"working.html#normal-mode\"><span class=\"std std-ref\">\u6b63\u5e38\u6a21\u5f0f</span></a> \u624d\u80fd\u6062\u590d\u3002</p>", "a[href=\"#question-1-the-scan-is-successful-the-buzzer-sounds-once-but-no-data-is-uploaded\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u95ee\u98981\uff1a\u626b\u63cf\u6210\u529f\uff0c\u8702\u9e23\u5668\u54cd\u4e00\u58f0\uff0c\u4f46\u6ca1\u6709\u4e0a\u4f20\u6570\u636e\uff1f<a class=\"headerlink\" href=\"#question-1-the-scan-is-successful-the-buzzer-sounds-once-but-no-data-is-uploaded\" title=\"Link to this heading\">#</a></h2><p><strong>\u56de\u7b54\uff1a</strong> \u626b\u63cf\u67aa\u5df2\u8fdb\u5165\u5b58\u50a8\u6a21\u5f0f\uff0c\u9700\u8981\u626b\u63cf<a class=\"reference internal\" href=\"working.html#normal-mode\"><span class=\"std std-ref\">\u6b63\u5e38\u6a21\u5f0f</span></a> \u624d\u80fd\u6062\u590d\u3002</p>", "a[href=\"#question-4-scan-successful-uploaded-data-incorrect\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u95ee\u98984:\u626b\u63cf\u6210\u529f\uff0c\u4e0a\u4f20\u6570\u636e\u4e0d\u6b63\u786e\uff1f<a class=\"headerlink\" href=\"#question-4-scan-successful-uploaded-data-incorrect\" title=\"Link to this heading\">#</a></h2><p><strong>\u7b54\u6848\uff1a</strong></p>", "a[href=\"working.html#normal-mode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u666e\u901a\u6a21\u5f0f<a class=\"headerlink\" href=\"#normal-mode\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#question-3-the-scanner-beeps-five-times-when-a-button-is-pressed-how-can-i-solve-this-problem\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u95ee\u98983\uff1a\u5f53\u6309\u4e0b\u6309\u94ae\u65f6\uff0c\u626b\u63cf\u67aa\u7684\u8702\u9e23\u5668\u54cd\u4e94\u58f0\u3002\u6211\u5982\u4f55\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff1f<a class=\"headerlink\" href=\"#question-3-the-scanner-beeps-five-times-when-a-button-is-pressed-how-can-i-solve-this-problem\" title=\"Link to this heading\">#</a></h2><p><strong>\u56de\u7b54\uff1a</strong> \u7535\u6c60\u7535\u91cf\u4f4e\uff0c\u9700\u8981\u5145\u7535\u624d\u80fd\u518d\u6b21\u4f7f\u7528\u3002</p>"}
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
