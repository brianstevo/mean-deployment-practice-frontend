const express = require("express");
const path = require('path');


const app = express();

app.use(express.static('./dist/mean-deployment-pratice-frontend'));
app.get('/*', (request, response)=> {
    response.sendFile(path.join(__dirname, '/dist/mean-deployment-pratice-frontend/index.html'));
});

const port = process.env.PORT || 4200;
app.listen(port, () => {
	console.log(`App listening on port ${port} and on http://127.0.0.1:${port}`);
});