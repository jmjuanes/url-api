//Import dependencies
var url = require('url');

//Build the api urls
module.exports = function(url_obj, api)
{
  //Build the url
  var href = url.format(url_obj);

  //Output json
  var out = {};

  //Read all the api links
  Object.keys(api).forEach(function(key)
  {
    //Get the full url and split by /, then replace :path with {path}
    var full_url = api[key].split('/').map(function(el)
    {
      //Check the first character
      if(el.charAt(0) === ':')
      {
        //Remove the ':' and add the brackets
        el = '{' + el.slice(1) + '}';
      }

      //Return the parsed uri
      return el;
    });

    //Join the url
    out[key] = url.resolve(href, '/') + full_url.join('/');
  });

  //Return the formatted url api
  return out;
};