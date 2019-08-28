- express 开发框架，
    先安装， app = express();
    app.get('/', function(req, res) {
        文件流操作
    }) 定义用户的访问方式，定义一个GET请求，path / 

    app.listen(3000);

- 完成表单
    action='/upload' method='post'

- 上传文件
    express 开发框架
    multer 上传文件专用的包 npm node 开发中，开源的那些工具包
    - 存储地址 /upload
    - 文件名 Date.now() 时间戳

- 文件压缩上传
    移动时代更快，省流量
    - onchange event.target.files
    - 将用户电脑上的图片加载入内存中，进行处理
        - html5 API FileReader readAsDateURL(file)
        - 判断文件类型 通过 file.type.indexOf('xxx') === 0
        - FileReader event.target.result
            img.src = xxx
    - canvas
        处理image 