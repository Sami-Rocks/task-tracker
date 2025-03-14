import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
			"object-curly-newline": ["error", {
			"ExportDeclaration": { "multiline": true, "minProperties": 1 },
			"ImportDeclaration": { "multiline": true }
			}],
			"semi": ["error", "never"],
			"comma-dangle": ["error", "never"],
			// "sort-keys": ["warn", "asc", {
			// 	"caseSensitive": false
			// }],
			"object-curly-spacing": ["error", "always"],
			"space-infix-ops": ["error"],
			"arrow-spacing": ["error"],
			"array-bracket-spacing": ["error"],
			"no-multi-spaces": ["error"],
			"no-trailing-spaces": ["error"],
			"eol-last": ["error"],
			"no-multiple-empty-lines": ["error", {
				"max": 1,
				"maxEOF": 0, // Starts counting after end of file line (0 means 1 empty line at the end)
				"maxBOF": 0
			}],
			"react/jsx-equals-spacing": ["error", "never"],
			"react/jsx-curly-spacing": ["error", {
				"when": "never",
				"children": true
			}],
			"react/jsx-curly-brace-presence": ["warn", {
				"props": "never",
				"children": "never"
			}],
			"space-in-parens": ["error"],
			"quotes": ["error", "single"],
			"arrow-parens": ["warn", "as-needed"],
			"jsx-quotes": ["error", "prefer-double"],
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
			"jsx-a11y/alt-text": ["off"],
			"jsx-a11y/anchor-is-valid": "off",
			"jsx-a11y/label-has-associated-control": ["off"],
			"no-console": ["warn", {
				"allow": ["warn", "error"]
			}],
			"no-unused-vars": "warn",
			"linebreak-style": "off",
			"react/jsx-one-expression-per-line": ["off", {
				"allow": "literal"
			}],
			"react/jsx-max-props-per-line": ["error", {
				"when": "always"
			}],
			"react/jsx-first-prop-new-line": ["warn", "multiline-multiprop"],
			"react/jsx-closing-bracket-location": ["warn", {
				"nonEmpty": "after-props",
				"selfClosing": "after-props"
			}],
			"react/jsx-tag-spacing": ["error", {
				"closingSlash": "never",
				"beforeSelfClosing": "always",
				"afterOpening": "never",
				"beforeClosing": "never"
			}]
    }
  }
)
