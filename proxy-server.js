const express = require('express');
const { HttpClient } = require('base-http-client')

/*
 * Proxy server to bypass CORS errors caused by specific `access-control-allow-origin` value ("apl.cnb.cz") which causes errors when hit directly.
 */

const PORT = 4000;
const HOST = "localhost";

const app = express();

const proxy = new HttpClient('https://www.cnb.cz')
app.get('*', async (req, res, next) => {
    try {
        const response = await proxy.request({ path: req.url, body: req.body, method: req.method })
        if (response.headers['content-type']) {
            res.setHeader('content-type', response.headers['content-type']);
        }
        res.setHeader('access-control-allow-origin', '*')
        return res.send(response.body);
    } catch (e) {
        return res.status(500)
    }

});


app.listen(PORT, HOST, () => {
    console.log(`CNB Proxy server running at ${HOST}:${PORT}`)
});