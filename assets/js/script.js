/*==============================================================
  PORTFOLIO SCRIPT — AI Automation Engineer
  Update the variables below before going live.
==============================================================*/

// ─── Placeholder Variables ────────────────────────────────────
// Replace these values with your real links/email

const CONTACT_EMAIL       = "";         // e.g. "esubalew@example.com"
const LINKEDIN_URL        = "";         // e.g. "https://linkedin.com/in/esubalew-kunta"
const GITHUB_URL          = "";         // e.g. "https://github.com/Esubalew-kunta"
const YOUTUBE_CANDID_DEMO = "";         // YouTube URL for Candid Platform demo
const YOUTUBE_CHANNEL_URL = "";         // Your YouTube channel URL

// ─── Video Data ───────────────────────────────────────────────
// Add/update video objects here. Use real YouTube video IDs.
// Thumbnail loads automatically from YouTube's CDN.

const videos = [
    {
        id: "dQw4w9WgXcQ",            // YOUTUBE_VIDEO_ID_1 — replace with real ID
        title: "Lead Intelligence Pipeline — Candid Platform",
        description: "90-second AI lead scoring system built in n8n",
        duration: "4:32"
    },
    {
        id: "dQw4w9WgXcQ",            // YOUTUBE_VIDEO_ID_2 — replace with real ID
        title: "Automation Demo #2",
        description: "Coming soon — workflow automation walkthrough",
        duration: "--:--"
    },
    {
        id: "dQw4w9WgXcQ",            // YOUTUBE_VIDEO_ID_3 — replace with real ID
        title: "Automation Demo #3",
        description: "Coming soon — AI pipeline demonstration",
        duration: "--:--"
    }
];

// ─── Render VideoCards ────────────────────────────────────────

function renderVideoCards() {
    var grid = document.getElementById("videos-grid");
    if (!grid) return;

    videos.forEach(function(video) {
        var item = document.createElement("div");
        item.className = "video-item";

        item.innerHTML =
            '<a href="https://www.youtube.com/watch?v=' + video.id + '" target="_blank" rel="noopener" class="video-card-link">' +
                '<div class="video-card">' +
                    '<div class="video-thumbnail-wrap">' +
                        '<img' +
                            ' src="https://img.youtube.com/vi/' + video.id + '/maxresdefault.jpg"' +
                            ' alt="' + video.title + '"' +
                            ' class="video-thumbnail"' +
                            ' onerror="this.src=\'https://img.youtube.com/vi/' + video.id + '/hqdefault.jpg\'"' +
                        '>' +
                        '<div class="video-play-btn">' +
                            '<svg width="18" height="18" viewBox="0 0 24 24" fill="white">' +
                                '<path d="M8 5v14l11-7z"/>' +
                            '</svg>' +
                        '</div>' +
                        '<span class="video-duration">' + video.duration + '</span>' +
                    '</div>' +
                    '<div class="video-info">' +
                        '<h4 class="video-title">' + video.title + '</h4>' +
                        '<p class="video-desc">' + video.description + '</p>' +
                    '</div>' +
                '</div>' +
            '</a>';

        grid.appendChild(item);
    });

    // Drag-to-scroll support for the video rail
    var isDown = false;
    var startX;
    var scrollLeft;

    grid.addEventListener("mousedown", function(e) {
        isDown = true;
        startX = e.pageX - grid.offsetLeft;
        scrollLeft = grid.scrollLeft;
        grid.style.cursor = "grabbing";
    });

    grid.addEventListener("mouseleave", function() {
        isDown = false;
        grid.style.cursor = "grab";
    });

    grid.addEventListener("mouseup", function() {
        isDown = false;
        grid.style.cursor = "grab";
    });

    grid.addEventListener("mousemove", function(e) {
        if (!isDown) return;
        e.preventDefault();
        var x = e.pageX - grid.offsetLeft;
        var walk = (x - startX) * 1.5;
        grid.scrollLeft = scrollLeft - walk;
    });
}

// ─── AOS Init ─────────────────────────────────────────────────

AOS.init({
    duration: 550,
    once: true,
    offset: 60
});

// ─── Sticky Header on Scroll ──────────────────────────────────

var header = document.getElementById("header");

window.addEventListener("scroll", function() {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    var backToTopButton = document.getElementById("backToTopButton");
    if (backToTopButton) {
        if (window.scrollY > 400) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }
});

// ─── Back To Top ──────────────────────────────────────────────

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ─── Init ─────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function() {
    renderVideoCards();
});
