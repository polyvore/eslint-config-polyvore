module.exports = {
    extends: [
        './rule-groups/best-practices.yml',
        './rule-groups/errors.yml',
        './rule-groups/nodejs.yml',
        './rule-groups/strict.yml',
        './rule-groups/style.yml',
        './rule-groups/variables.yml',
    ].map(require.resolve),
};
