# hyperScript_browserify

hyperScriptをbrowserifyでブラウザから利用するサンプル

- やっていること

    - main.jsでhyperScriptをrequire()して、nodeを生成して返すメソッドを公開する
    - コンパイル時にrequireを公開するため「-r」をつける＋モジュール名をつける
        - "browserify -r ./main.js:app > app.js"
    - ブラウザ側で公開したメソッドを読み込み、実行してDOMに追加する


## メモ(Gitリモートリポジトリ追加)
-  git remote add origin https://github.com/murasuke/hyperScript_browserify.git
-  git push -u origin master
