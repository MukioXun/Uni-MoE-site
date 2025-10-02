// 音频播放器交互功能

document.addEventListener('DOMContentLoaded', function() {
    const miniPlayers = document.querySelectorAll('.audio-player-mini');
    const videoPlayers = document.querySelectorAll('.video-player-mini');
    console.log('Found ' + miniPlayers.length + ' audio player elements');
    console.log('Found ' + videoPlayers.length + ' video player elements');
    
    if (miniPlayers.length === 0 && videoPlayers.length === 0) {
        console.log('No audio or video player elements found');
        return;
    }

    let currentAudio = null;
    let currentVideo = null;
    let currentPlayer = null;
    let currentControls = null;

    miniPlayers.forEach(function(player, index) {
        const audioSrc = player.getAttribute('data-audio');
        console.log('Initializing audio player ' + index + ' with src: ' + audioSrc);
        
        player.addEventListener('click', function(e) {
            e.stopPropagation();
            
            this.classList.toggle('clicked');
            toggleAudioControls(this, audioSrc);
        });
    });

    // 初始化视频播放器
    videoPlayers.forEach(function(player, index) {
        const videoSrc = player.getAttribute('data-video');
        console.log('Initializing video player ' + index + ' with src: ' + videoSrc);
        
        // 添加播放图标
        if (!player.querySelector('.play-icon')) {
            const playIcon = document.createElement('span');
            playIcon.className = 'play-icon';
            playIcon.textContent = '▶';
            player.appendChild(playIcon);
        }
        
        player.addEventListener('click', function(e) {
            e.stopPropagation();
            
            this.classList.toggle('clicked');
            toggleVideoControls(this, videoSrc);
        });
    });

    function toggleAudioControls(player, src) {
        if (currentControls) {
            currentControls.remove();
            if (currentAudio) {
                currentAudio.pause();
                currentAudio = null;
            }
            if (currentPlayer && currentPlayer !== player) {
                currentPlayer.classList.remove('clicked');
            }
        }

        if (player.classList.contains('clicked')) {
            currentAudio = new Audio(src);
            currentPlayer = player;
            
            const controls = document.createElement('div');
            controls.className = 'audio-controls-panel';
            controls.innerHTML = `
                <div class="controls-row">
                    <button class="play-btn">⏸</button>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress"></div>
                        </div>
                        <span class="time">0:00 / 0:00</span>
                    </div>
                    <button class="volume-btn">🔊</button>
                    <input type="range" class="volume-slider" min="0" max="1" step="0.1" value="1">
                </div>
            `;
            
            const rect = player.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            
            controls.style.position = 'absolute';
            controls.style.left = (rect.left + scrollLeft + rect.width / 2 - 140) + 'px';
            controls.style.top = (rect.bottom + scrollTop + 8) + 'px';
            controls.style.zIndex = '1000';
            
            document.body.appendChild(controls);
            currentControls = controls;
            
            setupAudioEvents(currentAudio, controls, player);
        }
    }

    function setupAudioEvents(audio, controls, player) {
        const playBtn = controls.querySelector('.play-btn');
        const progress = controls.querySelector('.progress');
        const timeDisplay = controls.querySelector('.time');
        const volumeSlider = controls.querySelector('.volume-slider');
        const volumeBtn = controls.querySelector('.volume-btn');

        playBtn.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
                playBtn.textContent = '⏸';
            } else {
                audio.pause();
                playBtn.textContent = '▶';
            }
        });

        volumeSlider.addEventListener('input', function() {
            audio.volume = this.value;
            volumeBtn.textContent = audio.volume > 0 ? '🔊' : '🔇';
        });

        audio.addEventListener('timeupdate', function() {
            const progressPercent = (audio.currentTime / audio.duration) * 100 || 0;
            progress.style.width = progressPercent + '%';
            
            const currentTime = formatTime(audio.currentTime);
            const duration = formatTime(audio.duration || 0);
            timeDisplay.textContent = `${currentTime} / ${duration}`;
        });

        controls.querySelector('.progress-bar').addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const seekTime = (clickX / rect.width) * audio.duration;
            audio.currentTime = seekTime;
        });

        audio.addEventListener('ended', function() {
            playBtn.textContent = '▶';
            player.classList.remove('clicked');
            controls.remove();
            currentControls = null;
            currentAudio = null;
            currentPlayer = null;
        });

        audio.play();
    }

    function toggleVideoControls(player, src) {
        if (currentControls) {
            currentControls.remove();
            if (currentVideo) {
                currentVideo.pause();
                currentVideo = null;
            }
            if (currentAudio) {
                currentAudio.pause();
                currentAudio = null;
            }
            if (currentPlayer && currentPlayer !== player) {
                currentPlayer.classList.remove('clicked');
            }
        }

        if (player.classList.contains('clicked')) {
            currentVideo = document.createElement('video');
            currentVideo.src = src;
            currentVideo.controls = true;
            currentVideo.style.width = '100%';
            currentVideo.style.height = 'auto';
            currentPlayer = player;
            
            const controls = document.createElement('div');
            controls.className = 'video-controls-panel';
            controls.innerHTML = `
                <div class="video-container">
                    <video controls style="width: 300px; height: auto; border-radius: 8px;">
                        <source src="${src}" type="video/quicktime">
                        <source src="${src}" type="video/mp4">
                        您的浏览器不支持视频播放。
                    </video>
                </div>
            `;
            
            const rect = player.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            
            controls.style.position = 'absolute';
            controls.style.left = (rect.left + scrollLeft + rect.width / 2 - 150) + 'px';
            controls.style.top = (rect.bottom + scrollTop + 8) + 'px';
            controls.style.zIndex = '1000';
            controls.style.background = 'white';
            controls.style.borderRadius = '12px';
            controls.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
            controls.style.padding = '1rem';
            
            document.body.appendChild(controls);
            currentControls = controls;
            
            const videoElement = controls.querySelector('video');
            currentVideo = videoElement;
            
            setupVideoEvents(videoElement, controls, player);
        }
    }

    function setupVideoEvents(video, controls, player) {
        video.addEventListener('ended', function() {
            player.classList.remove('clicked');
            controls.remove();
            currentControls = null;
            currentVideo = null;
            currentPlayer = null;
        });

        video.addEventListener('error', function() {
            console.error('Video failed to load:', video.src);
            const errorMsg = document.createElement('div');
            errorMsg.textContent = '视频加载失败';
            errorMsg.style.color = 'red';
            errorMsg.style.textAlign = 'center';
            errorMsg.style.padding = '1rem';
            controls.querySelector('.video-container').appendChild(errorMsg);
        });
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.audio-player-mini') && 
            !e.target.closest('.video-player-mini') && 
            !e.target.closest('.audio-controls-panel') && 
            !e.target.closest('.video-controls-panel')) {
            if (currentControls) {
                currentControls.remove();
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio = null;
                }
                if (currentVideo) {
                    currentVideo.pause();
                    currentVideo = null;
                }
                if (currentPlayer) {
                    currentPlayer.classList.remove('clicked');
                }
                currentControls = null;
                currentPlayer = null;
            }
        }
    });
});