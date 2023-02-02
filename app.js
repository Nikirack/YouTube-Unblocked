function LoadVideo() {
    var input = document.getElementById('video').value;
    document.getElementById('YouTubeVideo').src = "https://www.youtube.com/embed/"+input.split("=").pop();
}
