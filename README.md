# hyperScript_browserify

hyperScriptをbrowserifyでブラウザから利用するサンプル

- やっていること

    - main.jsでhyperScriptをrequire()して、nodeを生成して返すメソッドを公開する
~~~javascript
var h = require('hyperscript');

module.exports = function test(){
    return h("div", {style:{color:"blue"}}, h("span", {}, "春はあけぼの"));
}
~~~
    - コンパイル時にrequireを公開するため「-r」をつける＋モジュール名をつける
        - "browserify -r ./main.js:app > app.js"
    - ブラウザ側で公開したメソッドを読み込み、実行してDOMに追加する

~~~html
    <script src=./app.js></script> 
    <script>

        window.onload = function() {
            var test = require('app');
        
            const node = test();
            const root = document.getElementById("rootNode")
            root.appendChild(node);
        }
    </script>
~~~


## メモ(Gitリモートリポジトリ追加)
-  git remote add origin https://github.com/murasuke/hyperScript_browserify.git
-  git push -u origin master
