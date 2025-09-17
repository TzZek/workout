// enable media permissions + fullscreen for iOS
function enhanceIframes(){
  document.querySelectorAll('iframe').forEach(f=>{
    f.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    f.setAttribute('allowfullscreen','');
    f.setAttribute('playsinline','');
  });
}
function toggleAll(open){
  document.querySelectorAll('details').forEach(d => d.open = open);
}
window.addEventListener('DOMContentLoaded', enhanceIframes);