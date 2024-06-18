async function downloadVideo() {
    const videoURL = document.getElementById("videoURL").value;
    const videoID = extractVideoID(videoURL);
    
    if (videoID) {
        try {
            // GET the data
            const response = await fetch(`https://api.example.com/getVideoInfo?videoId=${videoId}`);
            const data = response.json();

            if (data.success) displayDownloadLinks(data.downloadLinks);
            else alert("Failed to retrive Data!");
        } catch (error) {
            console.error("Error fetching video: ", error);
            alert("Error fetching video!");
        }
    } else {
        console.log("Invalid URL!");
    }

    function extractVideoID(URL) {
        // This regex is a def of the top bar link not the share button link -- update it to use both
        const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
        const match = URL.match(regex);
        return match ? match[1] : null;
    }

    function displayDownloadLinks(links) {
        const downloadLinkDiv = document.getElementById("downloadLinks");
        downloadLinkDiv.innerHTML = '';

        links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = `Download ${link.quality}`;
            //sets the download attribute of the anchor element, which tells the browser to download the URL instead of navigating to it.
            a.download = '';
            
            downloadLinkDiv.appendChild(a);
            downloadLinkDiv.appendChild(document.createElement('br'));
        });
    }
}