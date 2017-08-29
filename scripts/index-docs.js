'use strict';

let fs = require('fs');
let elasticlunr = require('elasticlunr');
let marked = require('marked');
let jsdom = require('jsdom');
let { JSDOM } = jsdom;

let docsPath = process.argv.slice(2)[0] || __dirname + '/../dist/docs';

let index = elasticlunr(function () {
    this.addField('title');
    this.addField('body');
    this.setRef('id');
});

function addToIndex(item) {
    if (item.path && item.title) {
        try {
            console.info(`Indexing ${item.path}`);
            let html = marked(fs.readFileSync(docsPath + '/' + item.path, 'utf8'));
            let dom = new JSDOM(html);
            let content = dom.window.document.body.textContent;
            index.addDoc({
                id: item.path,
                title: item.title,
                body: content,
            });
        } catch (e) {
            console.error(e);
        }
    }
    (item.children || []).forEach(child => addToIndex(child));
}

console.info(`Indexing docs in '${docsPath}'`);

let structure = require(`${docsPath}/structure`);
structure.children.forEach(item => {
    addToIndex(item);
});

fs.writeFileSync(`${docsPath}/index.json`, JSON.stringify(index));

console.info(`Index has been created at ${`${docsPath}/index.json`}.`);
