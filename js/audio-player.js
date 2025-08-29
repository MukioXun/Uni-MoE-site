// 音频播放器交互功能

document.addEventListener('DOMContentLoaded', function() {
    const miniPlayers = document.querySelectorAll('.audio-player-mini');
    console.log('Found ' + miniPlayers.length + ' audio player elements');
    
    if (miniPlayers.length === 0) {
        console.log('No audio player elements found');
        return;
    }

    let currentAudio = null;
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

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.audio-player-mini') && !e.target.closest('.audio-controls-panel')) {
            if (currentControls) {
                currentControls.remove();
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio = null;
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