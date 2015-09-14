'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
let app = express();

/**
 * Options
 */
app.set('view cache', false);

/**
 * Middlewares
 */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
app.use(bodyParser.json());
app.use(morgan('combined'));
// serving static files
app.use(express.static('public'));

/**
 * Routes
 */
import v1 from './v1';
app.use('/v1/', v1);

import React from 'react'
import Router from 'react-router'
import routes from '../shared/routes.jsx'
app.get('/*', function (req, res) {
    Router.run(routes, req.url, function(Handler){
        let componentHTML = React.renderToString(<Handler />)
        let html = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Isomorphic Redux Demo</title>
                </head>
                <body>
                    <div id="appRoot">
                        ${componentHTML}
                    </div>
                    <script type="application/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.6/zepto.min.js"></script>
                    <script type="application/javascript" src="/bundle.js"></script>
                </body>
            </html>
        `
        //<script type="application/javascript" src="http://localhost:8001/public/bundle.js"></script>
        res.send(html);
    })
});

/*
 * Middlewares
 */
//import errorsHandler  from '../middlewares/errorsHandler.js';
//app.use(errorsHandler);

export default app;