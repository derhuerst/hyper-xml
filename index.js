'use strict'

const h = (tag, attrs, children) => {
	if (!children && ('object' !== typeof attrs || Array.isArray(attrs))) {
		children = attrs
		attrs = null
	}

	const node = {type: 'element', name: tag}
	if (attrs) node.attributes = attrs

	if (children) {
		if (!Array.isArray(children)) children = [children]
		node.children = children.map((child) => {
			if ('string' === typeof child) return {type: 'text', value: child}
			return child
		})
	}

	return node
}

module.exports = h
