const http = require('http');
const url = require('url');
const qs = require('querystring');

const port = 5000;

http.createServer((req, res, err) => {
    if(err) console.log(err);

    if(req.url !== '/favicon.ico') {
        // console.log("The server's console response."); // response will be sent to the terminal / command prompt
        console.log(req.url);

        // to retrieve querystring
            // const qry = url.parse(req.url, true).query;
            // console.log(qry);
            // console.log(qry.id);
            // console.log(qry.name);

        // to retrieve a form body (post | url-encoded)
            // let body = "";
            // req.on('data', chunk => body += chunk.toString());
            // req.on('end', () => {
            //     console.log(qs.parse(body), "chunks");
            // });

        // to retrieve a form body as JSON (req | RAW)
            let body = "";
            req.on('data', chunk => body += chunk.toString());
            req.on('end', () => {
                console.log(JSON.parse(body), "chunks");
            });
        
            console.log(req.method);

        // res.write("This is my node server response!"); // response will be sent back to the client (browser/postman)
        // res.write(JSON.stringify(qry));
        res.end();

    }
}).listen(port, () => {
    console.log(`Server is running on port ${port}`);
});