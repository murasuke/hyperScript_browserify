var h = require('hyperscript');

module.exports = function test(){
    return h("div", {style:{color:"blue"}}, h("span", {}, "春はあけぼの"));
}

