//Import dependencies
var url = require('url');

//Build the api urls
module.exports = function(obj, api, opt)
{
  //Check the options
  if(typeof opt !== 'object'){ var opt = {}; }

  //Check the find pattern
  if(typeof opt.find !== 'string'){ opt.find = /\:(\w*)/g; }

  //Check the prefix value
  if(typeof opt.prefix !== 'string'){ opt.prefix = '{'; }

  //Check the suffix value
  if(typeof opt.suffix !== 'string'){ opt.suffix = '}'; }

  //Build the url
  var href = url.format(obj);

  //Output json
  var out = {};

  //Read all the api links
  Object.keys(api).forEach(function(key)
  {
    //Get the full url and split by /, then replace :path with {path}
    var full_url = api[key].split('/').map(function(el)
    {
      //Find the patterns
      return el.replace(opt.find, function(match, patt)
      {
        //Replace it
        return opt.prefix + patt + opt.suffix;
      });
    });

    //Join the url
    out[key] = href + full_url.join('/');
  });

  //Return the formatted url api
  return out;
};