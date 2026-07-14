(function() {
    document.addEventListener('click', function(e) {
        const isVideoElement = e.target.closest(
            '.video-card, .short-card, .video-card-wrapper, .chart-card, ' +
            '.video-thumbnail, .short-img, .play-overlay, .play-icon-small, ' +
            'img[alt="Video"], img[alt="Short"], ' +
            '[onclick*="404.html"]'
        );
        
        // Also catch play buttons (like in user dashboard or charts)
        const isPlayBtn = e.target.closest('button') && (e.target.closest('button').querySelector('.fa-play') || e.target.closest('button').querySelector('.fa-play-circle'));
        // And catch direct clicks on the icon itself just in case
        const isPlayIcon = e.target.closest('.fa-play') || e.target.closest('.fa-play-circle');
        
        // Catch follow buttons
        const isFollowBtn = e.target.closest('button') && e.target.closest('button').textContent.toLowerCase().includes('follow');
        const isFollowLink = e.target.closest('a') && e.target.closest('a').textContent.toLowerCase().includes('follow');

        if (isVideoElement || isPlayIcon || (isPlayBtn && !e.target.closest('.navbar')) || isFollowBtn || isFollowLink) {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = '404.html';
        }
    }, true);
})();
