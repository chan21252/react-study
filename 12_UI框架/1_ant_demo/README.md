# Ant-Design

- 官网：https://ant.design/index-cn
- github：https://github.com/ant-design/ant-design/

安装入门，见官方文档.

## 定制优化
### ant3.x
未实践，待补充

### ant4.x

1. 安装[craco](https://github.com/gsoft-inc/craco)，支持自定义配置react脚手架
2. 安装[craco-antd插件](https://github.com/DocSpring/craco-antd)，插件集成了craco-less（用于自定义ant主题）和babel-plugin-import（按需加载）
react项目根目录下创建craco.config.js，自定义配置，如下

```js
const CracoAntDesignPlugin = require("craco-antd");
module.exports = {
plugins: [
{
    plugin: CracoAntDesignPlugin,
        options: {
            customizeTheme: {
                "@primary-color": "#EB2F97",
                "@link-color": "#EB2F97",
            },
        },
        }
    ],
}
```


### 踩坑
1.安装craco报 依赖的react-srcipt不对应错误
图片: ![](https://uploader.shimo.im/f/59z3he5SzaTNLEKD.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhY2Nlc3NfcmVzb3VyY2UiLCJleHAiOjE2NTI1MjEwNzcsImZpbGVHVUlEIjoiMjVxNU15Mk5hWWhKZ0RxRCIsImlhdCI6MTY1MjUyMDc3NywidXNlcklkIjoyMTU3OTUwfQ.B5TdrlLJG9CYKqJ_HGT1krvmQNwliTM9ZVfai0nrU9c)
方案1：将 react-script的版本从5.0.1降级到4.0.0版本
方案2：安装最新的craco 7版本，支持react-script@5.0.1，npm install @craco/craco@v7.0.0-alpha.3

2.安装craco-ant报 和@craco/craco@v7.0.0-alpha.3版本不对应
图片: ![](https://uploader.shimo.im/f/uAFU6ROfzQG5TH7W.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhY2Nlc3NfcmVzb3VyY2UiLCJleHAiOjE2NTI1MjEwNzcsImZpbGVHVUlEIjoiMjVxNU15Mk5hWWhKZ0RxRCIsImlhdCI6MTY1MjUyMDc3NywidXNlcklkIjoyMTU3OTUwfQ.B5TdrlLJG9CYKqJ_HGT1krvmQNwliTM9ZVfai0nrU9c)

方案：force强制安装，npm i -S --force craco-antd antd

### 页面效果
![](https://gitee.com/chan21252/filebed/raw/master/images/2022/5/antd-theme-demo-jam2cexsi5.jpg)