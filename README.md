# 项目描述
web项目static实践，基于angular框架，angular material UI组件库等
## 项目历程
### 1.安装angular CLI
angular CLI [安装](https://angular.cn/guide/setup-local)
#### 注意
使用yarn包管理工具安装，设置cli的包管理工具是yarn
$ ng config cli.packageManager yarn -g
### 2.安装angular material
angular material [安装](https://material.angular.cn/guide/getting-started)，此组件库风格参考[material design](https://md.maxoxo.design/)
#### 自定义主题文件theme.sass
angular.json的"styles"列表中添加一个指向主体文件的路径
#### 创建一个单独的NgModule文件materials.module.ts,导入应用中要用到的所有Angular Material组件
其他组件只要用到这些Angular Material组件，只需要把materials.module.ts导入到对应的特性模块即可。
#### 配置动画
app.module.ts从@angular/platform-browser/animations包导入BrowserAnimationsModule模块
### 3.创建single-page-routes.ts用来配置单独页面的路由，如登录页，关于页，各种活动页
### 4.引入 Material design Icon
下载[Material design Icon](https://github.com/google/material-design-icons/tree/master/iconfont)
将下载到的iconfont文件下copy到assets文件夹下
#### 使用
index.html 引入assets/iconfont/material-icons.css
### 5.引入flex-layout
Angular Material 没有布局组件，需要安装flex-layout: yarn add @angular/flex-layout，在SharedModule引入这个布局包
### 6.引入OCR-A-Std字体库
创建assets/fonts目录及fonts.css文件声明OCR-A-Std字体
### 7.安装moment.js库
Angular Material 有两种关于时间组件的模块，MatNativeDateModule和MatMomentDateModule,其中MatNativeDateModule是@angular/material包中的，不建议使用；建议使用MatMomentDateModule是@angular/material-moment-adapter包中的，需要安装这个包,这个包又依赖Moment.js库，所以要安装Moment.js

