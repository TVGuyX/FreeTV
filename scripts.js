document.addEventListener("DOMContentLoaded", () => {
    const player = document.getElementById("player");
    const playerTitle = document.getElementById("player-title");
    const playerQuality = document.getElementById("player-quality");
    const serverList = document.getElementById("server-list");
    const playerControls = document.getElementById("player-controls");
    let videoElement = document.getElementById("player-video");

    let videoSources = {
        "Google Drive (1080p)": "https://drive.google.com/uc?id=YOUR_FILE_ID&autoplay=1",
        "YouTube (4K)": "https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
    };

    function showPlayer(title, quality, url) {
        player.style.display = "block";
        playerTitle.textContent = title;
        playerQuality.textContent = quality;
        videoElement.src = url;
        videoElement.play();
        setTimeout(() => {
            playerTitle.style.opacity = 0;
            playerQuality.style.opacity = 0;
        }, 5000);
    }

    function hidePlayer() {
        player.style.display = "none";
        playerTitle.style.opacity = 1;
        playerQuality.style.opacity = 1;
    }

    function showServerList() {
        serverList.style.display = "block";
    }

    function hideServerList() {
        setTimeout(() => {
            serverList.style.display = "none";
        }, 5000);
    }

    document.querySelectorAll("article button").forEach(button => {
        button.addEventListener("click", () => {
            const title = button.getAttribute("data-title");
            const quality = button.getAttribute("data-quality");
            const url = button.getAttribute("data-url");
            showPlayer(title, quality, url);
        });
    });

    document.addEventListener("mousemove", showServerList);
    document.addEventListener("scroll", showServerList);
    document.addEventListener("touchstart", showServerList);

    serverList.addEventListener("mousemove", showServerList);
    serverList.addEventListener("click", event => {
        const target = event.target;
        if (target.tagName === "BUTTON") {
            const url = target.getAttribute("data-url");
            const quality = target.getAttribute("data-quality");
            const title = target.textContent;
            videoElement.src = url;
            playerQuality.textContent = quality;
            playerTitle.textContent = title;
            videoElement.play();
        }
    });

    videoElement.addEventListener("mousemove", () => {
        playerControls.style.display = "flex";
    });

    document.addEventListener("mousemove", () => {
        playerControls.style.display = "flex";
        setTimeout(() => {
            playerControls.style.display = "none";
        }, 5000);
    });

    videoElement.addEventListener("click", () => {
        playerControls.style.display = "flex";
    });

    playerControls.querySelector("#play").addEventListener("click", () => {
        videoElement.play();
    });

    playerControls.querySelector("#pause").addEventListener("click", () => {
        videoElement.pause();
    });

    playerControls.querySelector("#stop").addEventListener("click", () => {
        videoElement.pause();
        videoElement.currentTime = 0;
    });

    playerControls.querySelector("#rewind").addEventListener("click", () => {
        videoElement.currentTime -= 10;
    });

    playerControls.querySelector("#fastforward").addEventListener("click", () => {
        videoElement.currentTime += 10;
    });

    player.addEventListener("click", () => {
        playerControls.style.display = "flex";
    });

    document.addEventListener("click", (event) => {
        if (!player.contains(event.target)) {
            setTimeout(() => {
                playerControls.style.display = "none";
            }, 5000);
        }
    });
});


window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
