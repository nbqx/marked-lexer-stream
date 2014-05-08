## Marked Lexer Stream

[marked](https://github.com/chjj/marked) lexer stream

## Usage

```js
var marked_lexer_stream = require('marked-lexer-stream');
var md = [__dirname,'README.md'].join('/');

marked_lexer_stream(md).on('data',console.log);
```

output

```js
[ { type: 'heading', depth: 2, text: 'Marked Lexer Stream' },
  { type: 'paragraph',
    text: '[marked](https://github.com/chjj/marked) lexer stream' },
  { type: 'heading', depth: 2, text: 'Usage' },
  { type: 'code',
    lang: 'js',
    text: 'var marked_lexer_stream = require(\'marked-lexer-stream\');\nvar md = [__dirname,\'README.md\'].join(\'/\');\n\nmarked_lexer_stream(md).on(\'data\',console.log);' },
  { type: 'paragraph', text: 'output' },
  { type: 'code',
    lang: 'js',
    text: '[ { type: \'heading\', depth: 2, text: \'Marked Lexer Stream\' },\n  { type: \'paragraph\',\n    text: \'[marked](https://github.com/chjj/marked) lexer stream\' },\n  { type: \'heading\', depth: 2, text: \'Usage\' },\n  { type: \'code\',\n    lang: \'js\',\n    text: \'var marked_lexer_stream = require(\\\'marked-lexer-stream\\\');\\nvar md = [__dirname,\\\'README.md\\\'].join(\\\'/\\\');\\n\\nmarked_lexer_stream(md).on(\\\'data\\\',console.log);\' },\n  { type: \'paragraph\', text: \'output\' },\n  { type: \'code\',\n    lang: \'js\',\n    text: \'[ { type: \\\'heading\\\', depth: 2, text: \\\'Marked Lexer Stream\\\' },\\n  { type: \\\'paragraph\\\',\\n    text: \\\'[marked](https://github.com/chjj/marked) lexer stream\\\' },\\n  { type: \\\'heading\\\', depth: 2, text: \\\'Usage\\\' },\\n  { type: \\\'code\\\',\\n    lang: \\\'js\\\',\\n    text: \\\'var marked_lexer_stream = require(\\\\\\\'marked-lexer-stream\\\\\\\');\\\\nvar md = [__dirname,\\\\\\\'README.md\\\\\\\'].join(\\\\\\\'/\\\\\\\');\\\\n\\\\nmarked_lexer_stream(md).on(\\\\\\\'data\\\\\\\',console.log);\\\' },\\n  { type: \\\'paragraph\\\', text: \\\'output\\\' },\\n  { type: \\\'code\\\', lang: \\\'js\\\', text: \\\'\\\\n\\\' } ]\' } ]' },
  { type: 'heading', depth: 2, text: 'Install' },
  { type: 'code', text: '$ npm install marked-lexer-stream' } ]
```

## Install

    $ npm install marked-lexer-stream



