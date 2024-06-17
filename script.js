async function downloadVideo() {
    const videoURL = document.getElementById("videoURL");
    const videoID = extractVideoID(videoURL);

    
    function extractVideoID(URL) {
        const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
        const match = URL.match(regex);
        return match ? match[1] : null;
    }
}