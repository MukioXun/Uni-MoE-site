const root = document.getElementById("root");

root.innerHTML = `
  <!-- 顶部导航栏 -->
  <nav class="top-nav">
    <div class="nav-left">
      <a href="#" class="home-btn"> UniMoE-Audio</a>
    </div>
    <div class="nav-right">
      <a href="https://github.com/HITsz-TMG/UMOE-Scaling-Unified-Multimodal-LLMs/tree/master/UniMoE-Audio" target="_blank" class="github-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>
    </div>
  </nav>

  <!-- 中间标题区域 -->
  <section class="hero-section">
    <div class="title-container">
      <img src="img/UniMoE-logo.svg" alt="UniMoE Logo" class="title-logo">
      <h1 class="main-title">UniMoE-Audio</h1>
    </div>
    <p class="subtitle">A Unified Speech and Music Generation with Dynamic-Capacity Mixture of Experts</p>
    
    <!-- 下方按钮区域 -->
    <div class="action-section">
      <div class="action-buttons">
        <a href="introduction.html" class="action-btn intro-btn">
          Introductions
        </a>
        <a href="showcase.html" class="action-btn showcase-btn">
          Showcase
        </a>
      </div>
    </div>
    
    <!-- 展示视频区域 -->
    <div class="video-section">
      <div class="video-container">
        <video 
          controls 
          muted 
          loop 
          class="demo-video" 
          id="main-demo-video" 
          preload="none" 
          poster="video/UniMoE-Audio_cover.jpg"
          playsinline
          webkit-playsinline
          x5-playsinline
          crossorigin="anonymous"
          loading="lazy"> 
          <source src="video/UniMoE_Audio-preview_video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="video-overlay" id="video-overlay">
          <div class="video-overlay-content">
            <h3 class="video-title">Introduction to UniMoE-Audio</h3>
            <div class="video-duration">
              <span class="duration-text">Duration: 2 min 23 s</span>
            </div>
            <div class="video-loading" id="video-loading" style="display: none;">
              <div class="loading-bar">
                <div class="loading-progress" id="loading-progress"></div>
              </div>
              <div class="loading-text" id="loading-text">Loading video...</div>
              <div class="loading-percentage" id="loading-percentage">0%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- 页脚 -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>UniMoE-Audio</h4>
        <p> Unified Speech and Music Generation</p>
      </div>
      <div class="footer-section">
        <div class="footer-links">
          <div class="footer-icons">
            <a href="https://github.com/HITsz-TMG/UMOE-Scaling-Unified-Multimodal-LLMs/tree/master/UniMoE-Audio" target="_blank" class="footer-link" title="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://huggingface.co/foggyforest/UniMoE-Audio-preview" target="_blank" class="footer-link" title="Hugging Face">
              <img src="img/hf-logo.png" alt="Hugging Face Logo" width="32" height="32" />
            </a>
          </div>
          <div class="footer-copyright">
            <p>&copy; 2025 UniMoE-Audio. All rights reserved.</p>

          </div>
        </div>
      </div>
    </div>
  </footer>
`;

// 显示介绍内容
function showIntroduction() {
  const contentArea = document.getElementById('content-area');
  const dynamicContent = document.getElementById('dynamic-content');
  
  dynamicContent.innerHTML = `
    <h2>Introduction</h2>
    <p>Uni-MoE (Unified Mixture of Experts) is an advanced AI architecture that combines multiple specialized expert models to achieve superior performance across diverse tasks.</p>
    <h3>Key Features:</h3>
    <ul>
      <li>🎯 Dynamic expert selection based on task requirements</li>
      <li>🔄 Seamless integration of multiple AI models</li>
      <li>⚡ Optimized performance and efficiency</li>
      <li>🔧 Easy customization and extensibility</li>
    </ul>
  `;
  
  contentArea.style.display = 'block';
  contentArea.scrollIntoView({ behavior: 'smooth' });
}

// 显示展示内容
function showShowcase() {
  const contentArea = document.getElementById('content-area');
  const dynamicContent = document.getElementById('dynamic-content');
  
  dynamicContent.innerHTML = `
    <h2>Showcase</h2>
    <p>Explore the capabilities of Uni-MoE through interactive demonstrations:</p>
    <div class="showcase-grid">
      <div class="showcase-item">
        <h4>🧠 Natural Language Processing</h4>
        <p>Experience advanced text understanding and generation</p>
      </div>
      <div class="showcase-item">
        <h4>👁️ Computer Vision</h4>
        <p>State-of-the-art image analysis and recognition</p>
      </div>
      <div class="showcase-item">
        <h4>🎭 Multimodal AI</h4>
        <p>Seamless integration of text, image, and audio processing</p>
      </div>
    </div>
  `;
  
  contentArea.style.display = 'block';
  contentArea.scrollIntoView({ behavior: 'smooth' });
}

// 关闭内容区域
function closeContent() {
  document.getElementById('content-area').style.display = 'none';
}

// 视频覆盖层控制逻辑
document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('main-demo-video');
  const overlay = document.getElementById('video-overlay');
  const loadingDiv = document.getElementById('video-loading');
  const loadingProgress = document.getElementById('loading-progress');
  const loadingText = document.getElementById('loading-text');
  const loadingPercentage = document.getElementById('loading-percentage');
  
  let videoLoaded = false;
  
  if (video && overlay) {
    // 懒加载视频 - 只有当用户点击时才开始加载
    function loadVideo() {
      if (!videoLoaded) {
        videoLoaded = true;
        
        // 显示加载进度
        loadingDiv.style.display = 'block';
        
        // 开始预加载视频
        video.preload = 'auto';
        video.load();
        
        // 监听加载进度
        video.addEventListener('progress', function() {
          if (video.buffered.length > 0) {
            const buffered = video.buffered.end(0);
            const duration = video.duration || 1;
            const percent = Math.round((buffered / duration) * 100);
            
            loadingProgress.style.width = percent + '%';
            loadingPercentage.textContent = `${percent}%`;
            
            // 当缓冲足够时可以开始播放
            if (percent >= 25) {
              loadingDiv.style.display = 'none';
              video.play();
              overlay.classList.add('hidden');
            }
          }
        });
        
        // 监听元数据加载完成
        video.addEventListener('loadedmetadata', function() {
          console.log('Video metadata loaded');
        });
        
        // 监听可以播放事件
        video.addEventListener('canplay', function() {
          loadingDiv.style.display = 'none';
          if (video.currentTime === 0) {
            video.play();
            overlay.classList.add('hidden');
          }
        });
        
        // 监听加载错误
        video.addEventListener('error', function() {
          loadingDiv.style.display = 'none';
          loadingText.textContent = 'Failed to load video';
          loadingPercentage.textContent = 'Please try again';
          loadingDiv.style.display = 'block';
        });
      } else {
        // 视频已加载，直接播放
        video.play();
        overlay.classList.add('hidden');
      }
    }
    
    // 点击覆盖层开始加载并播放视频
    overlay.addEventListener('click', function() {
      loadVideo();
    });
    
    // 监听视频播放事件
    video.addEventListener('play', function() {
      overlay.classList.add('hidden');
      loadingDiv.style.display = 'none';
    });
    
    // 监听视频暂停事件
    video.addEventListener('pause', function() {
      overlay.classList.remove('hidden');
    });
    
    // 监听视频结束事件
    video.addEventListener('ended', function() {
      overlay.classList.remove('hidden');
    });
    
    // 监听视频等待事件（缓冲不足）
    video.addEventListener('waiting', function() {
      loadingDiv.style.display = 'block';
      loadingText.textContent = 'Buffering video...';
      loadingPercentage.textContent = '';
    });
    
    // 监听视频可以继续播放事件
    video.addEventListener('canplaythrough', function() {
      loadingDiv.style.display = 'none';
    });
    
    // 初始状态显示覆盖层
    overlay.classList.remove('hidden');
  }
});
