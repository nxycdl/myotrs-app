myotrs-app
==========
手机app学习;
##0.安装开发环境
* 安装node.js
* 安装git
* 安装ionic  Ionic，是一个前端的框架，帮助你快速的使用HTML5，CSS3，Javascript创建本地效果的移动应用。
   npm install -g cordova ionic
* 为了使用gulp，还需要执行：npm install gulp -g
###下载依赖包
* 在myotrs-app目录下执行：npm install 
###启动程序
gulp

###运行App（在浏览器中测试）
为了解决跨域访问问题
* Linux：chromium-browser --disable-web-security&
* Window:chrome浏览器启动项加 --disable-web-security
* http://localhost:8080
* 用户名：640001 口令:0000