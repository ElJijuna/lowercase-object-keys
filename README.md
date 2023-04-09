[![License: MIT](https://img.shields.io/npm/l/package.json.svg)](https://opensource.org/licenses/MIT) [![Greenkeeper badge](https://badges.greenkeeper.io/pilmee/lowercase-object-keys.svg)](https://greenkeeper.io/) [![Total alerts](https://img.shields.io/lgtm/alerts/g/pilmee/lowercase-object-keys.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/pilmee/lowercase-object-keys/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/pilmee/lowercase-object-keys.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/pilmee/lowercase-object-keys/context:javascript)

Instruction that transforms the names of the properties of an object to lowercase

## How to install?:

```bash
npm i lowercase-object-keys
```

```bash
npm i lowercase-object-keys --save-dev
```

## How to use?:

```javascript
var lowercaseObjectKeys = require("lowercase-object-keys");
var obj = { NAME: "Luis", Age: 30 };

console.log(lowercaseObjectKeys(obj));
//result: { name: 'Luis', age: 30 };
```
