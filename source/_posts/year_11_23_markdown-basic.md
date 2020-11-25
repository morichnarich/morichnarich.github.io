---
title: Markdown記法
date: 2020-11-23 13:11:12
tags:
    - Markdown
    - Hexo 
category: 
    - Program
thumbnailImage: Sunset_clouds_cityscapes_new_york_city_city_skyline_1920x1440.jpg
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

![カメラの画像](/images/Sunset_clouds_cityscapes_new_york_city_city_skyline_1920x1440.jpg)

<!-- > これは引用です。 -->

<!-- toc -->

---


## Markdown記法

### Markdown で連続した複数の空白行を入れる方法

<p class="postToggle">▶  詳細</p>
<div class="postToggled postToggledClose">

方法：&lt;br /&gt; タグを直接書きます。

{% codeblock index.html lang:html %}
1行目
<br />
<br />
2行目
<br />
<br />
3行目
<br />
<br />
<br />
<br />
4行目
{% endcodeblock %}

↓

1行目
<br />
2行目
<br />
3行目
<br />
<br />
4行目
</div>

### Markdown で連続した複数の空白行を入れる方法

<p class="postToggle">▶  詳細</p>
<div class="postToggled postToggledClose">

方法：&lt;br /&gt; タグを直接書きます。

{% codeblock index.html lang:html %}
1行目
<br />
<br />
2行目
<br />
<br />
3行目
<br />
<br />
<br />
<br />
4行目
{% endcodeblock %}

↓

1行目
<br />
2行目
<br />
3行目
<br />
<br />
4行目
</div>

<script>
    // var postToggles = document.getElementsByClassName('postToggle')
    // var postToggleds = document.getElementsByClassName('postToggled')
    //     postToggles = [].slice.call(postToggles)

    // postToggleds = [].slice.call(postToggleds)
    // for(let i=0; i<postToggles.length; i++) {
    //     postToggles[i].addEventListener('click', postTog, false)
    // }
    // function postTog(e) {
        
    //     const eTarget = e.currentTarget.nextElementSibling

    //     if (eTarget.hasAttribute('style')) {
    //         eTarget.removeAttribute('style')
    //     } else {
    //         eTarget.style.setProperty('position', 'absolute')
    //         eTarget.style.setProperty('top', '-100000vh')
    //     } 
    // }

</script>