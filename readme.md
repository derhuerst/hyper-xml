# hyper-xml

**A [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) to create JSON trees compatible with [`xml-reader`](https://www.npmjs.com/package/xml-reader).**

[![npm version](https://img.shields.io/npm/v/hyper-xml.svg)](https://www.npmjs.com/package/hyper-xml)
[![build status](https://img.shields.io/travis/derhuerst/hyper-xml.svg)](https://travis-ci.org/derhuerst/hyper-xml)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/hyper-xml.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install hyper-xml
```


## Usage

```js
const h = require('hyper-xml')

const one = h('one', {a1: 'v1'}, [
	h('two', [
		h('three', {a2: 'v2', a3: 'v3'})
	])
])
```

`one` will look like this:

```js
{
	type: 'element',
	name: 'one',
	attributes: {a1: 'v1'},
	children: [{
		type: 'element',
		name: 'two',
		children: [{
			type: 'element',
			name: 'three',
			attributes: {a2: 'v2', a3: 'v3'}
		}]
	}]
}
```


## Contributing

If you have a question or have difficulties using `hyper-xml`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/hyper-xml/issues).
