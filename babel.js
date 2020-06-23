const styled = require('styled-jsx/babel').default;
const rename = require('babel-plugin-transform-rename-import').default;

// parcel/codesandbox had issues with preset so we have this monstrosity.
module.exports = (babel) => {
  const s = styled(babel);
  const r = rename(babel);
  return {
    visitor: {
      Program: {
        enter(path, state) {
          s.visitor.Program.enter(path, state);
          s.visitor.Program.exit(path, state);
          path.traverse(r.visitor, {
            ...state,
            opts: {
              original: 'styled-jsx/style',
              replacement: 'xferno-styled-jsx/style',
            },
          });
        },
      },
    },
  };
};
