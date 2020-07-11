var h = require('hyperscript');

module.exports = {
    createSampleDom: ()=>{
        return h("div", {style:{color:"blue"}}, h("span", {}, "春はあけぼの"));
    },
    h: h,   // h()自体をエクスポート。ブラウザ側で直接利用できる。
}

