var h = require('hyperscript');

module.exports = {
    creatoSampleDom: ()=>{
        return h("div", {style:{color:"blue"}}, h("span", {}, "春はあけぼの"));
    },
    h: h,
}

