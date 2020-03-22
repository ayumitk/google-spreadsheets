# GoogleスプレッドシートをJavaScriptで取得して表示する方法

## 1. GoogleスプレッドシートをWebに公開する

Googleスプレッドシートのメニューから、__File > Publish to the web__ をクリックし、__Publish__ ボタンを押す。  

```
Are you sure you want to publish this selection?
```
ってアラートが出るので、__OK__ をクリック。

※この後、モーダルウィンドウでコピーする用のURLが表示されるけど無視。

## 2. GoogleスプレッドシートのIDを取得

GoogleスプレッドシートのURLが下のような感じのはずなので、

```
https://docs.google.com/spreadsheets/d/【ここがID】/edit#gid=0
```

IDをコピーしておく。

## 3. スクリプト側のGoogleスプレッドシートIDを変更

__spreadsheets.js__ 1行目の __sheetId__ を変更すればOK。

`console.log` を見ると、スプレットジーとの内容が配列で取得できているのが確認できます。