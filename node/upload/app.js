// const http = require('http');

// http.createServer();


var express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'upload/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({
    storage: storage
})

// 返回整个 webserver
const app = express();
app.get('/', function (req, res) {
    const form = fs.createReadStream(
        path.join(__dirname, 'index.html')
    );
    form.pipe(res);
})



// 路由
app.post('/upload', upload.single('pic'), function (req, res) {
    // 文件流操作
    console.log('要处理表单提交了');
    res.send({
        ret_code: 0
    });
})

// 在 3000 端口监听
app.listen(3000);
