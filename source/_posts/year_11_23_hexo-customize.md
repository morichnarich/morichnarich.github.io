---
title: hexoテーマのカスタマイズ
date: 2020-11-23 18:52:16
tags:
    - Hexo
category: 
    - Program
thumbnailImage: img_main19.jpg
thumbnailImagePosition: left
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

![カメラの画像](/images/img_main19.jpg)

<!-- > これは引用です。 -->

<!-- toc -->

---


## Hexoテーマのカスタマイズ

Hexoのテーマをカスタマイズしようとして得た知識を記録に残しておきます。

### オリジナルのcssファイルやjsファイルを追加

<p class="postToggle">▶  詳細</p>
<div class="postToggled postToggledClose">

オリジナルのカスタムcssやjsファイルを追加するには、まず`source`ディレクトリにカスタムcssやjsを入れておく。
themes/tranquilpeakの**layout**ディレクトリ直下に**layout.ejs**があるので、コードに

```ejs
<%- css('○○○○.css') %>  #</head>の直前に

<%- js('○○○○.js') %>    #</body>の直前に
```

を追加する。
`layout.ejs` は、サイト全体で共通化させたい要素を入れる template ファイル。

こうすることで…

各ページが読み込まれる時に、`layout.ejs` が読み込まれる。
<%- body %>が各テンプレートに置き換わる。 トップページなら index.ejs の中身が<%- body %>に入る。
といった処理が hexo 内で行われ、サイト全体で要素の共通化できます。

</div>

### ejsファイルを編集した後にするコマンド

<p class="postToggle">▶  詳細</p>
<div class="postToggled postToggledClose">

ejsファイル等を変更後は `themes/tranquilpeak` で `npm run prod`

面倒くさいので…

```bash
cd themes/tranquilpeak && npm run prod && cd ../ && cd ../
```

ワンライナーで戻れるようにしています。

</div>

### 画像を使い回す方法

<p class="postToggle">▶  詳細</p>
<div class="postToggled postToggledClose">

まず、sourceフォルダの直下にimagesフォルダを作成します。そして、その中に画像を入れます。

記事には<font color=#FF3860>`![](/images/hoge.jpeg)`</font>とするだけです。

これで、画像を一つのフォルダにまとめられ、他の記事からも参照できます。

</div>
