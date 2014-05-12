
var createHamlPreprocessor = function(args, config, logger, helper) {
  var haml = require('haml');
  config = config || {};
  var log = logger.create('preprocessor.haml');

  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);
    file.path = file.path.replace('.haml', '.html');
    done(haml.compile(content));
  };
};

var createHamlCoffeePreprocessor = function(args, config, logger, helper) {
  var hamlc = require('haml-coffee');
  config = config || {};
  var log = logger.create('preprocessor.haml');

  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);
    file.path = file.path.replace('.haml', '.html');
    done(hamlc.compile(content)());
  };
};

createHamlPreprocessor.$inject = ['args', 'config', 'logger', 'helper'];
createHamlCoffeePreprocessor.$inject = ['args', 'config', 'logger', 'helper'];

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:haml': ['factory', createHamlPreprocessor],
  'preprocessor:haml-coffee': ['factory', createHamlCoffeePreprocessor]
};



