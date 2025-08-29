const root = document.getElementById("root");

root.innerHTML = `
  <!-- 顶部导航栏 -->
  <nav class="top-nav">
    <div class="nav-left">
      <a href="#" class="home-btn"> Uni-MoE </a>
    </div>
    <div class="nav-right">
      <a href="https://github.com/HITsz-TMG/UMOE-Scaling-Unified-Multimodal-LLMs" target="_blank" class="github-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>
    </div>
  </nav>

  <!-- 中间标题区域 -->
  <section class="hero-section">
    <h1 class="main-title">Uni-MoE</h1>
    <p class="subtitle">A MoE-based Unified Multimodal Model that Can Handle Diverse Modalities including Audio, Speech, Image, Text, and Video</p>
  </section>

  <!-- 下方按钮区域 -->
  <section class="action-section">
    <div class="action-buttons">
      <a href="introduction.html" class="action-btn intro-btn">
        Introductions
      </a>
      <a href="showcase.html" class="action-btn showcase-btn">
        Showcase
      </a>
    </div>
  </section>

  <!-- 页脚 -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Uni-MoE</h4>
        <p>Unified Multimodal LLM</p>
      </div>
      <div class="footer-section">
        <div class="footer-links">
          <div class="footer-icons">
            <a href="https://github.com/HITsz-TMG/UMOE-Scaling-Unified-Multimodal-LLMs" target="_blank" class="footer-link" title="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://huggingface.co/Uni-MoE" target="_blank" class="footer-link" title="Hugging Face">
              🤗
            </a>
          </div>
          <div class="footer-copyright">
            <p>&copy; 2025 Uni-MoE. All rights reserved.</p>

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
