var list = document.getElementById('btn-show');

function toggleVisibility() {
    var element = document.getElementById('show-more-info');
    if (element.style.display === 'none') {
        element.style.display = 'block';
        list.innerText="کمتر";
    } else {
        element.style.display = 'none';
        list.innerText="بیشنر";
    }
}


var side = document.getElementById('sideMenu');

function toggleSideMenu(){
  if (side.style.display === 'none') {
    side.style.display = 'flex';
  } else {
    side.style.display = 'none';
  }
}

window.addEventListener("resize",()=>{
  if(window.screen.width>=990){
    side.style.display = 'none';
  }
});
