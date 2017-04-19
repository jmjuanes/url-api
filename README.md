# url-api

[![npm](https://img.shields.io/npm/v/url-api.svg?style=flat-square)](https://www.npmjs.com/package/url-api)
[![npm](https://img.shields.io/npm/dt/url-api.svg?style=flat-square)](https://www.npmjs.com/package/url-api)
[![npm](https://img.shields.io/npm/l/url-api.svg?style=flat-square)](https://github.com/jmjuanes/url-api)

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

## License

[MIT LICENSE](./LICENSE) &copy; Josemi Juanes.
