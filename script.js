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