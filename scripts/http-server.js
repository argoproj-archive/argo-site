'use strict';

let express = require('express');

let app = express();
let root = __dirname + '/../dist_rendered';

app.use(express.static(root));

app.listen(process.env.PORT || 3000);
