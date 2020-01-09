# 项目描述
web项目static实践，基于angular框架，angular material UI组件库等
## 项目历程
### 1.安装angular CLI
angular CLI [安装](https://angular.cn/guide/setup-local)
#### 注意
使用yarn包管理工具安装，设置cli的包管理工具是yarn
$ ng config cli.packageManager yarn -g
### 2.安装angular material
angular material [安装](https://material.angular.cn/guide/getting-started)
#### 自定义主题文件theme.sass
angular.json的"styles"列表中添加一个指向主体文件的路径
#### 创建一个单独的NgModule文件materials.module.ts,导入应用中要用到的所有Angular Material组件
其他组件只要用到这些Angular Material组件，只需要把materials.module.ts导入到对应的特性模块即可。
### 3.创建single-page-routes.ts用来配置单独页面的路由，如登录页，关于页，各种活动页
