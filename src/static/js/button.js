// 设置按钮点击事件
const configToggle = document.getElementById('config-toggle');
const configContainer = document.getElementById('config-container');

configToggle.addEventListener('click', () => {
    configContainer.classList.toggle('open');
});

// 应用设置按钮点击事件
const applyConfig = document.getElementById('apply-config');
applyConfig.addEventListener('click', () => {
    // 获取设置值
    const voice = document.getElementById('voice-select').value;
    const responseType = document.getElementById('response-type-select').value;
    const fps = document.getElementById('fps-input').value;
    const systemInstruction = document.getElementById('system-instruction').value;
    
    // 这里可以添加保存设置的逻辑
    console.log('Settings applied:', { voice, responseType, fps, systemInstruction });
    
    // 关闭设置面板
    configContainer.classList.remove('open');
});
