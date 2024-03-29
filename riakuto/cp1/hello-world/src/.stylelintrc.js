module.export = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recess-order',
	],
	plugins: [
		'stylelint-order',
	],
	ignoreFiles: [
		'**/node_modules/**',
	],
	rules: {
		'string-quotes': 'single',
	},
};