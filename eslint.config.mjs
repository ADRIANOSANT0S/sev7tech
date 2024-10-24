import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import pluginReact from 'eslint-plugin-react'
import prettierPlugin from 'eslint-plugin-prettier'
import { fixupPluginRules } from '@eslint/compat'

const languageOptions = {
  globals: {
    ...globals.node,
    ...globals.jest,
    React: 'readonly'
  },
  ecmaVersion: 'latest',
  sourceType: 'module',
  parser: tsParser
}

const pluginsOptions = {
  import: importPlugin,
  'react-hooks': fixupPluginRules(reactHooksPlugin),
  prettier: prettierPlugin,
  react: pluginReact,
  '@typescript-eslint': tseslint
}

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { ignores: ['**/node_modules', '**/.next'] },
  {
    plugins: {
      ...pluginsOptions,
      '@typescript-eslint': tseslint
    }
  },
  {
    languageOptions: {
      ...languageOptions
    }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      'no-console': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index']
          ],
          'newlines-between': 'always'
        }
      ],
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      'prettier/prettier': ['error', { semi: false, endOfLine: 'auto' }]
    }
  }
]
