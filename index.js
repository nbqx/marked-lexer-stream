var fs = require('fs');
var through2 = require('through2'),
    es = require('event-stream'),
    marked = require('marked'),
    _ = require('lodash');

function MarkedLexerStream(path,opts){
  opts = _.defaults({gfm: true},opts);
  var src = fs.readFileSync(path)+'';
  var lexer = marked.lexer(src,opts);
  var array = es.readArray(lexer);
  var links = lexer.links;
  var buf = [];

  var transform = through2.obj(function write(obj,e,next){
    if(obj.type==='heading' && obj.depth===1){
      if(!_.isEmpty(buf)){
        this.push(buf);
        buf = [];
      }
    }
    buf.push(obj);
    next();
  },function end(){
    if(!_.isEmpty(buf)){
      buf.links = links;
      this.push(buf);
    }
    this.push(null);
  });

  return array.pipe(transform)
};

module.exports = MarkedLexerStream;
