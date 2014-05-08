var marked_lexer_stream = require('.');
var md = [__dirname,'README.md'].join('/');

marked_lexer_stream(md).on('data',console.log);
