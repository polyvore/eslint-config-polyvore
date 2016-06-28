# @polyvore/eslint-config-polyvore

This package provides Polyvore's eslint rules as an extensible/shared config.

## Usage

To use this module:

1. `npm install --save-dev eslint eslint-config-polyvore`
2. add `extends: eslint-config-polyore` to your .eslintrc.yml

After extending from the shared config, you can further overwrite rules following
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)

### @polyvore/eslint-config-polyvore OR @polyvore/eslint-config-polyvore/es5

Applies polyvore's rules for ES5 applications

### @polyvore/eslint-config-polyvore/es6

Extends our ES5 config and adds ES6-specific rules
