module.exports = {
    extends: [
        './rule-groups/react.yml',
    ].map(require.resolve),
};
