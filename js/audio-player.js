// 音频播放器交互功能

// 为所有迷你音频播放器添加点击事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有迷你音频播放器元素
    const miniPlayers = document.querySelectorAll('.audio-player-mini');
    
    // 为每个迷你音频播放器添加点击事件
    miniPlayers.forEach(function(player) {
        // 添加点击事件监听器
        player.addEventListener('click', function(e) {
            // 阻止事件冒泡
            e.stopPropagation();
            
            // 切换控制面板的显示状态
            toggleFloatingControls(player);
        });
    });
    
    // 点击页面其他地方时隐藏控制面板
    document.addEventListener('click', function(e) {
        // 隐藏所有音频控制面板
        hideAllFloatingControls();
    });
});

// 切换浮动控制面板显示状态
function toggleFloatingControls(player) {
    // 检查是否已经存在控制面板
    const existingControls = document.querySelector('.floating-audio-controls');
    
    // 如果已经存在控制面板，则移除它
    if (existingControls) {
        existingControls.remove();
        // 如果点击的是同一个播放器，则不创建新的控制面板
        if (existingControls.dataset.playerId === player.id) {
            return;
        }
    }
    
    // 为播放器分配唯一ID（如果还没有）
    if (!player.id) {
        player.id = 'audio-player-' + Date.now();
    }
    
    // 创建浮动控制面板
    createFloatingControls(player);
}

// 创建浮动控制面板
function createFloatingControls(player) {
    // 创建控制面板容器
    const controlPanel = document.createElement('div');
    controlPanel.className = 'floating-audio-controls';
    
    // 为控制面板分配唯一ID并关联播放器
    controlPanel.dataset.playerId = player.id;
    
    // 创建控制面板内容
    controlPanel.innerHTML = `
        <div class="control-panel-content">
            <audio controls src="${player.src}"></audio>
        </div>
    `;
    
    // 添加到页面中
    document.body.appendChild(controlPanel);
    
    // 定位控制面板
    positionControlPanel(controlPanel, player);
    
    // 添加点击事件以防止控制面板被关闭
    controlPanel.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // 获取音频元素并播放
    const audioElement = controlPanel.querySelector('audio');
    setTimeout(() => {
        audioElement.play();
    }, 100);
}

// 隐藏所有浮动控制面板
function hideAllFloatingControls() {
    const existingControls = document.querySelector('.floating-audio-controls');
    if (existingControls) {
        existingControls.remove();
    }
}

// 定位控制面板
function positionControlPanel(panel, player) {
    const rect = player.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 设置控制面板位置
    panel.style.position = 'absolute';
    panel.style.top = (rect.top + scrollTop + rect.height + 10) + 'px';
    panel.style.left = (rect.left) + 'px';
    panel.style.zIndex = '10000';
}