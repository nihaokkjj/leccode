// src/router/index.js

/**
 * @file 应用程序的客户端路由管理。
 * @description 负责根据URL路径加载和显示不同的HTML页面内容。
 */

// 定义路由映射：URL路径到对应的HTML文件路径
const routes = {
    '/': '/src/pages/P-HOME.html',
    '/home': '/src/pages/P-HOME.html',
    '/contests': '/src/pages/contests/P-CONTEST_LIST.html',
    // 动态路由示例：/contests/123 会匹配到这里，并加载P-CONTEST_DETAIL.html
    '/contests/:id': '/src/pages/contests/P-CONTEST_DETAIL.html',
    '/problems': '/src/pages/problems/P-PROBLEM_LIST.html',
    '/problems/:id': '/src/pages/problems/P-PROBLEM_DETAIL.html',
    '/playlists': '/src/pages/playlists/P-PLAYLIST_LIST.html',
    '/playlists/:id': '/src/pages/playlists/P-PLAYLIST_DETAIL.html',
    '/profile': '/src/pages/P-PROFILE.html',
    '/auth': '/src/pages/auth/P-REGISTER_LOGIN.html', // 注册/登录页面
    '/forgot-password': '/src/pages/auth/P-FORGOT_PASSWORD.html', // 忘记密码页面
    // 404 页面，当没有匹配的路由时显示
    '/404': '<h1>404 - 页面未找到</h1><p>您访问的页面不存在。</p>'
};

/**
 * 动态加载并执行HTML内容中的脚本。
 * @param {HTMLElement} element - 包含要执行脚本的HTML元素。
 */
function executeScripts(element) {
    const scripts = element.querySelectorAll('script');
    scripts.forEach(oldScript => {
        const newScript = document.createElement('script');
        // 复制所有属性
        Array.from(oldScript.attributes).forEach(attr => {
            newScript.setAttribute(attr.name, attr.value);
        });
        newScript.textContent = oldScript.textContent; // 复制脚本内容
        if (oldScript.src) {
            newScript.src = oldScript.src; // 如果是外部脚本，设置src
        }
        oldScript.parentNode.replaceChild(newScript, oldScript); // 替换旧脚本
    });
}

/**
 * 根据当前URL路径加载并渲染页面内容。
 */
async function handleLocation() {
    const path = window.location.pathname;
    const appContent = document.getElementById('app-content');
    let contentToLoad = routes['/404']; // 默认显示404内容

    let matchedRoutePath = null;
    let params = {};

    // 遍历路由，尝试匹配动态路由
    for (const routePath in routes) {
        // 将路由路径转换为正则表达式，以匹配动态参数
        const regexPath = routePath.replace(/:(\w+)/g, '(?<$1>[^/]+)');
        const regex = new RegExp(`^${regexPath}$`);
        const match = path.match(regex);

        if (match) {
            matchedRoutePath = routes[routePath];
            // 提取动态参数
            if (match.groups) {
                params = match.groups;
            }
            break; // 找到匹配项，停止遍历
        }
    }

    if (matchedRoutePath) {
        try {
            // 如果是直接的HTML内容字符串
            if (matchedRoutePath.startsWith('<')) {
                contentToLoad = matchedRoutePath;
            } else { // 否则是HTML文件路径，需要fetch
                const response = await fetch(matchedRoutePath);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const html = await response.text();

                // 解析HTML，只获取<body>内的内容（或特定ID的内容）
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                // 假设你的P-XXX.html文件只包含<body>内的内容，或者你需要提取某个特定元素
                const bodyContent = doc.body.innerHTML;
                contentToLoad = bodyContent;
            }
        } catch (error) {
            console.error('加载页面失败:', error);
            contentToLoad = '<h1>加载页面失败</h1><p>请稍后再试。</p>';
        }
    }

    // 更新页面内容
    appContent.innerHTML = contentToLoad;
    // 重新执行加载内容的脚本（如果HTML片段中有<script>标签）
    executeScripts(appContent);
}

/**
 * 导航到新的URL。
 * @param {string} url - 要导航到的URL。
 */
export function navigate(url) {
    history.pushState(null, '', url); // 改变URL而不刷新页面
    handleLocation(); // 处理新URL
}

/**
 * 设置路由监听器。
 * 应该在应用启动时调用一次。
 */
export function setupRouter() {
    // 监听浏览器前进/后退按钮事件
    window.addEventListener('popstate', handleLocation);

    // 劫持所有<a>标签的点击事件，实现SPA跳转
    document.body.addEventListener('click', e => {
        const target = e.target.closest('a'); // 找到被点击的最近的<a>标签
        // 确保是内部链接且不是下载链接或外部链接
        if (target && target.href.startsWith(window.location.origin) && !target.hasAttribute('download')) {
            e.preventDefault(); // 阻止默认的链接跳转行为
            const url = new URL(target.href);
            navigate(url.pathname); // 使用自定义导航函数
        }
    });

    // 首次加载页面时执行路由
    handleLocation();
}
