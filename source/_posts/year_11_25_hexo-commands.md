---
title: 色々なコマンド
category:
  - Program
tags:
  - Hexo
  - command
thumbnailImagePosition: left
autoThumbnailImage: 'yes'
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
date: 2020-11-25 18:37:33
thumbnailImage: hexo_002_01.png
coverImage:
---

<!-- > これは引用です。 -->

![カメラの画像](/images/hexo_002_01.png)

<!-- toc -->

## Hexo

<p class="postToggle">▶  詳細</p>
<div class="postToggled postToggledClose">

### 記事を作る

<font color=#FF3860>`hexoコマンド`</font>に<font color=#FF3860>`new`</font>オプションを付けて記事を書きます。
通常はポスト(公開用)として作成されますが、下書き用のオプションもあります。

```bash
# 新記事ポスト
hexo new "記事タイトル"
# ドラフトで作成
hexo new draft "記事タイトル"
```

<!-- </div> -->

### コマンドは短縮できる

<!-- <p class="postToggle">▶  詳細</p> -->
<!-- <div class="postToggled postToggledClose"> -->

<font color=#FF3860>`new`</font>は<font color=#FF3860>`n`</font>、<font color=#FF3860>`server`</font>は<font color=#FF3860>`s`</font>というように短縮コマンドが用意されています。

```bash
# 新記事作成
hexo n "記事名"

# サイトのジェネレート
hexo g

# サーバー開始
hexo s
```

</div>

## git

<p class="postToggle">▶  詳細</p>
<div class="postToggled postToggledClose">

### git addの使用例

```bash
git add . #すべてのファイル・ディレクトリ
git add *.css #すべてのCSSファイル
git add -n #追加されるファイルを調べる
git add -u #変更されたファイルを追加する
git rm --cached #addしてしまったファイルを除外
```

### addの取り消し

間違えてgit `add`してしまった場合は`reset`でキャンセルできる。

```bash
git reset HEAD 
git reset HEAD {file_name}
```

</div>

### git commitの使用例

```bash
git commit -a #変更のあったファイルすべて
git commit --amend #直前のコミットを取り消す
git commit -v #変更点を表示してコミット
```

</div>

## その他一般

<p class="postToggle">▶  詳細</p>
<div class="postToggled postToggledClose">

### ファイルを新規作成【mac】
<!-- <font color=#FF3860>`new`</font>は<font color=#FF3860>`n`</font>、<font color=#FF3860>`server`</font>は<font color=#FF3860>`s`</font>というように短縮コマンドが用意されています。 -->

ターミナルで

```bash
touch gulpfile.js
```

中身は空ですが`gulpfile.js`が作成されたかと思います。
touchはgulpに関係はなく、**ターミナルのコマンドでファイルを新規作成**するものです。

</div>
