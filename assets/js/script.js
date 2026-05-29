/*==============================================================
  PORTFOLIO SCRIPT — AI Automation Engineer
  Update the variables below before going live.
==============================================================*/

// ─── Placeholder Variables ────────────────────────────────────
// Replace these values with your real links/email

const CONTACT_EMAIL = "";         // e.g. "esubalew@example.com"
const LINKEDIN_URL = "";         // e.g. "https://linkedin.com/in/esubalew-kunta"
const GITHUB_URL = "";         // e.g. "https://github.com/Esubalew-kunta"
const YOUTUBE_CANDID_DEMO = "";         // YouTube URL for Candid Platform demo
const YOUTUBE_CHANNEL_URL = "";         // Your YouTube channel URL

// ─── Videos ───────────────────────────────────────────────────
// To add a video: copy any entry below, paste your YouTube URL and title.
// Works with: youtu.be/ID, youtube.com/watch?v=ID, or playlist links.
// description and duration are optional — leave blank to hide them.

const videos = [
    {
        url: "https://youtu.be/d29g_8obhzo",
        title: "AuraEngine: Autonomous Content Factory",
        description: "",
        duration: ""
    },
    {
        url: "https://youtu.be/NkjuPa1UKWE",
        title: "Competitor Intelligence Monitor",
        description: "",
        duration: ""
    },
    {
        url: "https://youtu.be/2L8PBHGz5u0",
        title: "Live Trend to Content Pipeline",
        description: "",
        duration: ""
    },
    {
        url: "https://www.youtube.com/playlist?list=PLQjaW7NfbN-eatBP0je1CXQv9ek4YaepP",
        title: "Lead Intelligence Pipeline",
        description: "",
        duration: "Playlist"
    }
];

// ─── Render VideoCards ────────────────────────────────────────

function parseYouTubeUrl(url) {
    var m;
    m = url.match(/youtu\.be\/([^?&\s]+)/);
    if (m) return { type: "video", id: m[1] };
    m = url.match(/[?&]v=([^&\s]+)/);
    if (m) return { type: "video", id: m[1] };
    m = url.match(/[?&]list=([^&\s]+)/);
    if (m) return { type: "playlist", id: m[1] };
    return { type: "unknown", id: null };
}

function renderVideoCards() {
    var grid = document.getElementById("videos-grid");
    if (!grid) return;

    videos.forEach(function (video) {
        var parsed = parseYouTubeUrl(video.url);
        var item = document.createElement("div");
        item.className = "video-item";

        var thumbHtml;
        if (parsed.type === "video" && parsed.id) {
            thumbHtml =
                '<img' +
                ' src="https://img.youtube.com/vi/' + parsed.id + '/maxresdefault.jpg"' +
                ' alt="' + video.title + '"' +
                ' class="video-thumbnail"' +
                ' onerror="this.src=\'https://img.youtube.com/vi/' + parsed.id + '/hqdefault.jpg\'"' +
                '>';
        } else {
            thumbHtml =
                '<div class="video-thumbnail video-playlist-thumb">' +
                '<i class="bi bi-collection-play-fill"></i>' +
                '</div>';
        }

        var durationHtml = (video.duration && video.duration.trim())
            ? '<span class="video-duration">' + video.duration + '</span>'
            : '';

        item.innerHTML =
            '<a href="' + video.url + '" target="_blank" rel="noopener" class="video-card-link">' +
            '<div class="video-card">' +
            '<div class="video-thumbnail-wrap">' +
            thumbHtml +
            '<div class="video-play-btn">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="white">' +
            '<path d="M8 5v14l11-7z"/>' +
            '</svg>' +
            '</div>' +
            durationHtml +
            '</div>' +
            '<div class="video-info">' +
            '<h4 class="video-title">' + video.title + '</h4>' +
            '<p class="video-desc">' + (video.description || '') + '</p>' +
            '</div>' +
            '</div>' +
            '</a>';

        grid.appendChild(item);
    });

    // Drag-to-scroll
    var isDown = false;
    var startX;
    var scrollLeft;

    grid.addEventListener("mousedown", function (e) {
        isDown = true;
        startX = e.pageX - grid.offsetLeft;
        scrollLeft = grid.scrollLeft;
        grid.style.cursor = "grabbing";
    });

    grid.addEventListener("mouseleave", function () {
        isDown = false;
        grid.style.cursor = "grab";
    });

    grid.addEventListener("mouseup", function () {
        isDown = false;
        grid.style.cursor = "grab";
    });

    grid.addEventListener("mousemove", function (e) {
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

window.addEventListener("scroll", function () {
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

document.addEventListener("DOMContentLoaded", function () {
    renderVideoCards();
});
