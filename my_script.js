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

    if (eTarget.hasAttribute('style')) {
        eTarget.removeAttribute('style')
    } else {
        eTarget.style.setProperty('position', 'absolute')
        eTarget.style.setProperty('top', '-100000vh')
        eTarget.style.setProperty('width', '90vw')
    } 
}