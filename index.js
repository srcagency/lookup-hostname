#!/usr/bin/env node

const { lookup } = require('dns')

lookup(process.argv[2], (e, ip, family) => e
	? console.error('Error: %s', e.message)
	: console.log(ip))
