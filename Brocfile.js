/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/moment/moment.js');
app.import('bower_components/marked/lib/marked.js');

app.import('bower_components/open-sans-fontface/fonts/Light/OpenSans-Light.eot', {destDir: 'assets/fonts'});
app.import('bower_components/open-sans-fontface/fonts/Light/OpenSans-Light.svg', {destDir: 'assets/fonts'});
app.import('bower_components/open-sans-fontface/fonts/Light/OpenSans-Light.ttf', {destDir: 'assets/fonts'});
app.import('bower_components/open-sans-fontface/fonts/Light/OpenSans-Light.woff', {destDir: 'assets/fonts'});
app.import('bower_components/open-sans-fontface/fonts/Regular/OpenSans-Regular.eot', {destDir: 'assets/fonts'});
app.import('bower_components/open-sans-fontface/fonts/Regular/OpenSans-Regular.svg', {destDir: 'assets/fonts'});
app.import('bower_components/open-sans-fontface/fonts/Regular/OpenSans-Regular.ttf', {destDir: 'assets/fonts'});
app.import('bower_components/open-sans-fontface/fonts/Regular/OpenSans-Regular.woff', {destDir: 'assets/fonts'});
app.import('bower_components/open-sans-fontface/fonts/Bold/OpenSans-Bold.eot', {destDir: 'assets/fonts'});
app.import('bower_components/open-sans-fontface/fonts/Bold/OpenSans-Bold.svg', {destDir: 'assets/fonts'});
app.import('bower_components/open-sans-fontface/fonts/Bold/OpenSans-Bold.ttf', {destDir: 'assets/fonts'});
app.import('bower_components/open-sans-fontface/fonts/Bold/OpenSans-Bold.woff', {destDir: 'assets/fonts'});

module.exports = app.toTree();
