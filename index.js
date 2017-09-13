'use strict'

const h = (tag, attrs, children) => {
	if (!children && ('object' !== typeof attrs || Array.isArray(attrs))) {
		children = attrs
		attrs = null
	}

	const node = {type: 'element', name: tag}
	if (attrs) node.attributes = attrs
	if (children) node.children = children

	return node
}

module.exports = h
