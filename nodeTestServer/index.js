const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/users/setup', (req, res) => {

    const query = req.query;

    const json = {
        params: query,
        data: [
            {
                id : 1,
                title : "Title",
                contents : "contents",
                regDate : "2020-11-20"
            },
            {
                id : 2,
                title : "Title2",
                contents : "contents2",
                regDate : "2020-11-22"
            }
        ]
    }
    res.send(json);
})

app.get('/api/authentication', (req, res) => {

    const query = req.query.username;

    const json = {
        username: query,
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    }
    res.send(json);
})

app.get('/users/myinfo', (req, res) => {

    const query = req.query.username;

    const json = {
        userName: '김유저',
        age: '41',
        authList: [
            {
                auth: "ROLE_MEMBER"
            }
        ]
    }
    res.send(json);
})
// /users/myinfo

app.listen(3000, () => {
    console.log('http://localhost:3000/');
})
