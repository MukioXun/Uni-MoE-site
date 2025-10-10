// 视频托管配置
const VIDEO_CONFIG = {
  // 当前使用的托管方案
  currentProvider: 'github', // 'github', 'jsdelivr', 'external'
  
  // 视频源配置
  sources: {
    // GitHub Pages 直接托管
    github: {
      url: 'video/web_UniMoE-Audio_demo.mp4',
      poster: 'video/UniMoE-Audio_cover.jpg',
      description: 'GitHub Pages 直接托管'
    },
    
    // jsDelivr CDN 加速
    jsdelivr: {
      url: 'https://cdn.jsdelivr.net/gh/YOUR_USERNAME/YOUR_REPO@main/video/web_UniMoE-Audio_demo.mp4',
      poster: 'https://cdn.jsdelivr.net/gh/YOUR_USERNAME/YOUR_REPO@main/video/UniMoE-Audio_cover.jpg',
      description: 'jsDelivr CDN 加速'
    },
    
    // 外部视频托管服务
    external: {
      // 可以使用 YouTube, Vimeo, 或其他视频托管服务
      url: 'https://example.com/your-video.mp4',
      poster: 'https://example.com/your-poster.jpg',
      description: '外部视频托管服务'
    }
  },
  
  // 获取当前视频源
  getCurrentSource() {
    return this.sources[this.currentProvider];
  },
  
  // 切换托管方案
  switchProvider(provider) {
    if (this.sources[provider]) {
      this.currentProvider = provider;
      return this.getCurrentSource();
    }
    return null;
  },
  
  // 检测最佳托管方案
  async detectBestProvider() {
    const providers = Object.keys(this.sources);
    const results = [];
    
    for (const provider of providers) {
      const source = this.sources[provider];
      try {
        const startTime = Date.now();
        const response = await fetch(source.url, { 
          method: 'HEAD',
          mode: 'no-cors' // 避免 CORS 问题
        });
        const loadTime = Date.now() - startTime;
        
        results.push({
          provider,
          loadTime,
          available: true
        });
      } catch (error) {
        results.push({
          provider,
          loadTime: Infinity,
          available: false
        });
      }
    }
    
    // 选择加载时间最短的可用方案
    const bestProvider = results
      .filter(r => r.available)
      .sort((a, b) => a.loadTime - b.loadTime)[0];
    
    if (bestProvider) {
      this.currentProvider = bestProvider.provider;
      return bestProvider;
    }
    
    return null;
  }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = VIDEO_CONFIG;
} else if (typeof window !== 'undefined') {
  window.VIDEO_CONFIG = VIDEO_CONFIG;
}