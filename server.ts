import 'zone.js/dist/zone-node';
import 'reflect-metadata';
const domino = require('domino');
import {enableProdMode} from '@angular/core';
import {ngExpressEngine} from '@nguniversal/express-engine';
import * as express from 'express';
import {join} from 'path';
import {readFileSync} from 'fs';


// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 3000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html'), 'utf8').toString();
const win = domino.createWindow(template);
global['window'] = win;
global['document'] = win.document;
global['$'] = require('jQuery');
global['jQuery '] = global['$'];
global['Materialize'] = win.Materialize;
// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main.bundle');

const {provideModuleMap} = require('@nguniversal/module-map-ngfactory-loader');

app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));
app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {maxAge: '1y'}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render('index', {req});
});

// Start up the Node server
app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
});