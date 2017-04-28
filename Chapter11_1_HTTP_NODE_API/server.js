/**
 * Created by minchangjang on 2017. 4. 27..
 */
// 모듈을 추출합니다.
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

// 웹 서버를 생성합니다.
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//API 시작
var headers = {
    'Content-Type': 'text/json;charset=utf-8',
    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
    'Access-Control-Allow-Origin': '*'
};

var client_id = 'LYTZd0yGVgeDT1Bxu7WN';
var client_secret = 'e3gt4aQnX7';
var text = "번역할 문장을 입력하세요.";

app.post('/translate', function (req, res) {
    text = req.body.text;
    console.log("text=" + text);
    var api_url = 'https://openapi.naver.com/v1/language/translate';
    var request = require('request');
    var options = {
        url: api_url,
        form: {'source':'ko', 'target':'en', 'text':text},
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };

    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, headers);
            console.log(body);
            res.send(body);
        } else {
            res.status(response.statusCode).end();
            console.log(response);
        }
    });
});
//API 끝

// 웹 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
