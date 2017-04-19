# url-api

[![npm](https://img.shields.io/npm/v/url-api.svg?style=flat-square)](https://www.npmjs.com/package/url-api)
[![npm](https://img.shields.io/npm/dt/url-api.svg?style=flat-square)](https://www.npmjs.com/package/url-api)
[![npm](https://img.shields.io/npm/l/url-api.svg?style=flat-square)](https://github.com/jmjuanes/url-api)

> Format and generate the urls for an API service 

This package will format all the string patterns used in frameworks like [express](http://expressjs.com/en/guide/routing.html) into full urls like [this](https://api.github.com).


## Usage 

```javascript
//Import dependencies 
var url_api = require('url-api');

//Url object 
var url_obj = { protocol: 'https', hostname: 'mywebsite.com' }; 

//Api urls 
var api = { projects: '/projects/:project', home: '/', users: '/users/:user' };

//Simple api
url_api(url_obj, api);
// { 
//   projects: 'https://mywebsite.com/projects/{project}',
//   home: 'https://mywebsite.com/',
//   users: 'https://mywebsite.com/users/{user}' 
// }

//With options
url_api(url_obj, api, { prefix: '{{', suffix: '}}' });
// { 
//   projects: 'https://mywebsite.com/projects/{{project}}',
//   home: 'https://mywebsite.com/',
//   users: 'https://mywebsite.com/users/{{user}}' 
// }
```

## API 

### url_api(url_obj, api[, opt])

Returns a new object with all the pathnames formatted. This method accepts the following arguments: 

- `url_obj`: a [url object](https://nodejs.org/api/url.html#url_url_strings_and_url_objects) with the API host information. 
- `api`: an object with all the paths strings of your RESTful API service.
- `opt` (optionally): an object with the options:
  - `prefix`: 

## License

[MIT LICENSE](./LICENSE) &copy; Josemi Juanes.
