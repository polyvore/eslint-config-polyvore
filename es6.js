module.exports = {
    extends: [
        './es5.js',
        './rule-groups/es6.yml',
    ].map(require.resolve),
};
