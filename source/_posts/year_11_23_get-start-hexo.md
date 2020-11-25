---
title: hexoの始め方
date: 2020-11-23 13:07:54
tags:
    - Hexo
category: 
    - Program
toc:
  maxdepth: 3
  class: toc
  slugify: transliteration
  decodeEntities: false
  anchor:
    position: after
    symbol: '#'
    style: header-anchor
excerpt: welcome to my blog
---

![カメラの画像](/images/Sunset_clouds_cityscapes_new_york_city_city_skyline_1920x1440.jpg)

<!-- > これは引用です。 -->

<!-- toc -->

---

## Git Pagesの準備

### ホスティング用のレポジトリ生成

１つもGit Pagesを作った事がないなら、<font color=#FF3860>`{userid}.github.io`</font>の名前でパブリック・レポジトリを生成するのが後々混乱せずに作成できます。
上記の規則で作成したレポジトリは、自動的にGit Pagesの機能により、ウェブホスティングされます。

``` bash
git clone https://github.com/{userid}/{userid}.github.io.git
```

{% alert danger no-icon %}
クローンして掘り込んだファイルはローカルディレクトリになるので削除してはいけません。
{% endalert %}

### index.htmlをプッシュ

`index.html`を作り、`{userid}.github.io`レポジトリにプッシュします。
この作業を省略するとGit Pagesが作れないと思われるので必須です！

``` bash
cd {userid}.github.io
git add index.html
git commit -m "first commit"
echo "Hello World" > index.html
git add index.html
git commit -m "second commit"
git push origin master
```

### git page build結果確認

Github Actionを見ると、上げたindex.htmlがGit Pagesとしてビルドされていることを確認できます。

### 確認

https://{userid}.github.ioにアクセスすると、Hello Worldが確認できます。

これで、ウェブページのホスティングの準備ができました。

## hexo 設置 & 設定 (静的ページゼネレーター)

Hexoを使うためには、まず`node`&`npm`のインストールが必要です。
もし、インストールが必要な方は、以下の公式ページをご参考ください。

●　nodejs with npm
[https://nodejs.org/ja/](https://nodejs.org/ja/)

Hexoの公式 docs & Installationはこちらで参考できます。
[https://hexo.io/docs/](https://hexo.io/docs/)

### Hexoのインストール

hexoをインストールします。

``` bash
npm install -g hexo-cli
cd {作成する場所}
hexo init blog
cd blog
npm install
```
### hexo-deployer-git plugin インストール

One Commandで、githubにデプロイするためのプラグインを予めインストールします。
プラグインの詳細はこちらで確認できます。

[https://github.com/hexojs/hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git)

``` bash
npm install hexo-deployer-git --save
```

### _config.yml 設定

基本的なconfig設定を行います。

- **url**
  - Git PagesのURLを設定します。
- **new_post_name**
  - Post記事の生成時のファイル名を設定します。ここは必須に変える必要は無いですが、datetimeをつけたほうが管理しやすいと思います。
- **Deployment**
  - hexo-deployer-gitのpluginをインストールしたので、gitのデプロイ設定ができます。
  - messageは、設定しないと基本メッセージとして、Site updated: YYYY-MM-DD HH:mm:ssの形式でコミットメッセージが残ります。

``` bash
diff --git a/_config.yml b/_config.yml

-url: http://yoursite.com
+url: https://{userid}.github.io/

-new_post_name: :title.md # File name of new posts
+new_post_name: :year_:month_:day_:title.md # File name of new posts

 # Deployment
 ## Docs: https://hexo.io/docs/deployment.html
 deploy:
-  type: ''
+  type: git
+  repo: https://github.com/{userid}/{userid}.github.io
+  branch: master
```
これで、ブログの基本設定は終わりました。

## 確認・デプロイ

### Localでブログ確認

hexo serverコマンドを使うと、ウェブホスティングで公開する前に、ロケールで予めブログとコンテンツを確認できます。

``` bash
$ hexo server
INFO  Start processing
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.
```

● localhost:4000


### Deploy to Git Pages
hexo deployコマンドを使う前に、hexo cleanコマンドで１度キレイにします。
hexo deployコマンドを使うと、設定したGithubレポジトリに自動でプッシュしてくれます。

``` bash
$ hexo deploy -g
INFO  Start processing
INFO  Files loaded in 101 ms
...
To https://github.com/{userid}/{userid}.github.io
 + 69bd38f...fa420ac HEAD -> master (forced update)
Branch 'master' set up to track remote branch 'master' from 'https://github.com/{username}/{username}.github.io'.
INFO  Deploy done: git
```

### gitpagesのURLで確認

Git Pagesとして動作しているレポジトリのMasterブランチにプッシュしたので、Github Actionでビルドが完了していると、https://{userid}.github.ioにアクセスすると、確認できます。

これで、自分のブログが出来上がりました。


