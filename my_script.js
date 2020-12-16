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
let body = document.querySelector("body");
let active = [];
body.addEventListener("click",(e) => {
    try{
        const target = e.target;
        if(!target.classList.contains('copy-button'))return;
        
        const pre = target.closest("pre");
        let result = false;
        if(active.indexOf(target) !== -1) return;
        if(pre){
            result = copyToClipboard(pre);
            target.innerText = (result ? "COPIED!" : "FAILED!");
            target.classList.add((result ? "success" : "failed"));
            active.push(target);
            setTimeout(() => {
                let index =  active.indexOf(target);
                target.className = "copy-button";
                target.innerText = "COPY CODE";
                if(index !== -1)active.splice(index, 1);
            },2000);
        }
    } catch (e) {
        //error 
    }
});
/* highlightを拡張しコードブロックに自動的にボタンを追加する */
hljs.addPlugin({
    'after:highlightBlock': ({ block, result }) => {
      result.value = `<button class="copy-button">COPY CODE</button>${result.value}`;
    }
});