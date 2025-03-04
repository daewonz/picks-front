module.exports = {
	// 현재 eslintrc 파일을 기준으로 ESLint 규칙을 적용
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
	},
	root: true,
	// 추가적인 규칙들을 적용
	env: {
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: ['eslint:recommended', 'plugin:vue/essential', 'prettier', 'plugin:prettier/recommended'],
	// 코드 정리 플러그인 추가
	plugins: ['prettier'],
	// 사용자 편의 규칙 추가
	rules: {
		'no-unused-vars': 'off',
		'prettier/prettier': [
			'error',
			// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
			// https://prettier.io/docs/en/options.html
			{
				endOfLine: 'auto',
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 120,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
};
