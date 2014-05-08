var fs = require('fs');
var test = require('tap').test;

var marked_lexer_stream = require(__dirname+'/../');

test('requires arguments',function(t){
  t.throws(function(){
    marked_lexer_stream();
  });
  t.end();
});

test('data is object',function(t){
  var mdPath = __dirname+'/../'+'README.md';
  marked_lexer_stream(mdPath).on('data',function(data){
    t.type(data,"object");
    t.end();
  });
});
