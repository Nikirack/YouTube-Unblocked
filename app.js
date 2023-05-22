const url = window.location.href;
const searchParams = new URL(url).searchParams;
const urlSearchParams = new URLSearchParams(searchParams);
const res = Array.from(urlSearchParams.entries());

const input = urlSearchParams.get('vid') 
console.log(input)
window.addEventListener('load', function () {
    document.getElementById('YouTubeVideo').src = "https://www.youtube.com/embed/"+input.split("=").pop();

})

function LoadVideo() {
    var input = document.getElementById('video').value;
    window.location.assign(url+"?vid="+input) 
}
function Bookmark() {
    alert('javascript:const url = window.location.href";window.location.assign("http://nikirack.github.io/YouTube-Unblocked?vid="+url);');
}