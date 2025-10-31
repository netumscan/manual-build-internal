selector_to_html = {"a[href=\"#testing-services\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u6d4b\u8bd5\u670d\u52a1<a class=\"headerlink\" href=\"#testing-services\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#configure-wifi-and-broker\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u914d\u7f6e WiFi \u548c Broker<a class=\"headerlink\" href=\"#configure-wifi-and-broker\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#use-mqtt-protocol-to-transmit-data\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u4f7f\u7528 MQTT \u534f\u8bae\u4f20\u8f93\u6570\u636e<a class=\"headerlink\" href=\"#use-mqtt-protocol-to-transmit-data\" title=\"Link to this heading\">#</a></h1><h2>\u6784\u5efa Broker \u670d\u52a1\u5668<a class=\"headerlink\" href=\"#build-broker-server\" title=\"Link to this heading\">#</a></h2><h3>\u6f14\u793a\u8f6f\u4ef6<a class=\"headerlink\" href=\"#demo-software\" title=\"Link to this heading\">#</a></h3><p>EMQX \u5f00\u6e90\u7248\u672c\uff0c\u4e0b\u8f7d\u5730\u5740\uff1a <a class=\"reference external\" href=\"https://github.com/emqx/emqx/releases\">EMQX</a></p>", "a[href=\"#modify-the-scanner-subscription-topic\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u4fee\u6539\u626b\u63cf\u67aa\u8ba2\u9605\u4e3b\u9898<a class=\"headerlink\" href=\"#modify-the-scanner-subscription-topic\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#demo-software\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u6f14\u793a\u8f6f\u4ef6<a class=\"headerlink\" href=\"#demo-software\" title=\"Link to this heading\">#</a></h3><p>EMQX \u5f00\u6e90\u7248\u672c\uff0c\u4e0b\u8f7d\u5730\u5740\uff1a <a class=\"reference external\" href=\"https://github.com/emqx/emqx/releases\">EMQX</a></p>", "a[href=\"#receiving-data\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u63a5\u6536\u6570\u636e<a class=\"headerlink\" href=\"#receiving-data\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#modify-the-mqtt-connection-port\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u4fee\u6539 MQTT \u8fde\u63a5\u7aef\u53e3<a class=\"headerlink\" href=\"#modify-the-mqtt-connection-port\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#configure-scanner\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u914d\u7f6e\u626b\u63cf\u67aa<a class=\"headerlink\" href=\"#configure-scanner\" title=\"Link to this heading\">#</a></h2><h3>\u914d\u7f6e WiFi \u548c Broker<a class=\"headerlink\" href=\"#configure-wifi-and-broker\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#development-reference\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5f00\u53d1\u53c2\u8003<a class=\"headerlink\" href=\"#development-reference\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#build-broker-server\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6784\u5efa Broker \u670d\u52a1\u5668<a class=\"headerlink\" href=\"#build-broker-server\" title=\"Link to this heading\">#</a></h2><h3>\u6f14\u793a\u8f6f\u4ef6<a class=\"headerlink\" href=\"#demo-software\" title=\"Link to this heading\">#</a></h3><p>EMQX \u5f00\u6e90\u7248\u672c\uff0c\u4e0b\u8f7d\u5730\u5740\uff1a <a class=\"reference external\" href=\"https://github.com/emqx/emqx/releases\">EMQX</a></p>", "a[href=\"#modify-the-scanner-publishing-topic\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u4fee\u6539\u626b\u63cf\u67aa\u53d1\u5e03\u4e3b\u9898<a class=\"headerlink\" href=\"#modify-the-scanner-publishing-topic\" title=\"Link to this heading\">#</a></h3>"}
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
