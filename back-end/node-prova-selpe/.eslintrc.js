module.exports = {
    'env': {
        'commonjs': true,
        'es2020': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'prettier'
    ],
    'parserOptions': {
        'ecmaVersion': 11
    },
    'plugins': 'prettier',
    'rules': {
        'prettier/prettier': 'error',
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
