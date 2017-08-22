'use strict';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

let express = require('express');
let fallback = require('express-history-api-fallback');

let app = express();
let root = __dirname + '/../dist';

app.use(express.static(root));
app.use(fallback('index.html', { root: root }));

app.listen(process.env.PORT || 3000);
