
window.addEventListener('scroll',()=> indicateScrollBar())

function indicateScrollBar() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.querySelector(".scroll-bar").style.width =  `${scrolled}%`;
 
} 