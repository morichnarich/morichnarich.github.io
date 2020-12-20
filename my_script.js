'use strict';

/**
 * Generate a sharing link
 */
// const js = hexo.extend.helper.get('js').bind(hexo);
// hexo.extend.injector.register('body_end', () => {
//   return js('../scripts/injectors/post.js');
// });
var postToggles = document.getElementsByClassName('postToggle')
var postToggleds = document.getElementsByClassName('postToggled')
    postToggles = [].slice.call(postToggles)

postToggleds = [].slice.call(postToggleds)
for(let i=0; i<postToggles.length; i++) {
    postToggles[i].addEventListener('click', postTog, false)
}
function postTog(e) {
    
    const eTarget = e.currentTarget.nextElementSibling

    // if (eTarget.hasAttribute('style')) {
    //     eTarget.removeAttribute('style')
    // } else {
    //     eTarget.style.setProperty('position', 'absolute')
    //     eTarget.style.setProperty('top', '-100000vh')
    //     eTarget.style.setProperty('width', '90vw')
    // }
    if (eTarget.classList.contains('postToggledClose')) {
        eTarget.classList.remove('postToggledClose')
    } else {
        eTarget.classList.add('postToggledClose')
    }
}

/*
 * 自動でコピーボタン追加
*/
let copyToClipboard = (element) => {
    
    let ranges = [];
    let selection = window.getSelection();
    let range = document.createRange();
    let result = false;
    for(let i = 0; i < selection.rangeCount; i += 1) {
        ranges[i] = selection.getRangeAt(i);
    }
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    result = document.execCommand("copy");
    selection.removeAllRanges();
    for(let i = 0; i < ranges.length; i += 1) {
        selection.addRange(ranges[i]);
    }
    return result;
};
/* ボタン位置が異なるため､少し手直し! bodyからイベントを拾うように変更*/
let copyButtons = document.getElementsByClassName("copyButton");
copyButtons = Array.from(copyButtons)
let active = [];
for(let i=0; i<copyButtons.length; i++) {
    copyButtons[i].addEventListener('click',codeCopy, false)
}
function codeCopy(e) {
    
    const target = e.currentTarget;
    const pre = target.parentNode.parentNode.nextElementSibling.querySelectorAll('pre')[1]
    let result = false;

    if(pre){
        result = copyToClipboard(pre);
        setTimeout(() => {
            target.classList.add((result ? "success" : "failed"));
        }, 300)
        active.push(target);
        console.log(active)
        setTimeout(() => {
            let index =  active.indexOf(target);
            target.className = "copyButton";
            if(index !== -1)active.splice(index, 1);
        },1200);
    }
}
/* highlightを拡張しコードブロックに自動的にボタンを追加する */
// hljs.addPlugin({
//     'after:highlightBlock': ({ block, result }) => {
//       result.value = `<button class="copy-button">COPY CODE</button>${result.value}`;
//     }
// });
// document.addEventListener('DOMContentLoaded', () => {
//     // code要素にファイル名などを付与する
//     let codeTitles = document.getElementsByClassName("codeTitle")
//     codeTitles = Array.from(codeTitles)
//     let highlights = document.getElementsByClassName("highlight")
//     highlights = Array.from(highlights)

//     for(let i=0; i<highlights.length; i++) {
//         var codeName =highlights[i].className.replace('highlight ', '')
//         codeTitles[i].textContent = codeName
//     }
//   })