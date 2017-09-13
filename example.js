'use strict'

const h = require('.')

const one = h('one', {a1: 'v1'}, [
	h('two', {a2: 'v2'}),
	'three'
])

console.log(one)
