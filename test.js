'use strict'

const test = require('tape')

const h = require('.')

test('works', (t) => {
	const p = h('one', {a1: 'v1'}, [
		h('two', [
			h('three', {a2: 'v2', a3: 'v3'}),
			'four'
		])
	])

	t.deepEqual(p, {
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
			}, {
				type: 'text',
				value: 'four'
			}]
		}]
	})
	t.end()
})
