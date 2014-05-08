var marked_lexer_stream = require('.');
var md = [__dirname,'README.md'].join('/');

marked_lexer_stream(md).on('data',console.log);

// to html
var marked = require('marked');
var s = marked_lexer_stream(md).on('data',function(data){
  console.log(marked.parser(data));
});
