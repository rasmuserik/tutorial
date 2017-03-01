// # AppEdit Hello World
//
// Modules/libraries are loaded with `require(...)`.
//
// Documentation/source for the solsort library can be read on:
// <https://appedit.solsort.com/?page=read&github=solsort/solsort>

var ss = require('solsort');

// Render the ui reactively

ss.html(() => ['div',
  ['h1', 'Hello world'],
  ['p', 'Count: ', ss.getJS('count', 0)],
  ['button', {onClick: ss.event('increment')},
    'Increment']]);

// Handler for button clicks

ss.handle('increment', () => 
  ss.setJS('count', ss.getJS('count', 0) + 1));

// Information about the app, - used for exporting to github, etc.

exports.info = {
  name: 'Hello World',
  github: 'solsort/tutorial'
};
