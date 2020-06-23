import { Component } from 'inferno';
import StyleSheetRegistry from 'styled-jsx/dist/stylesheet-registry';

export default (function () {
  const styleSheetRegistry = new StyleSheetRegistry();

  class JSXStyle extends Component {
    static dynamic(info) {
      return info
        .map((tagInfo) => {
          const [baseId, props] = tagInfo;
          return styleSheetRegistry.computeId(baseId, props);
        })
        .join(' ');
    }

    static flush() {
      const cssRules = styleSheetRegistry.cssRules();
      styleSheetRegistry.flush();
      return cssRules;
    }

    shouldComponentUpdate(nextProps) {
      const { props } = this;
      return props.id !== nextProps.id || props.dynamic !== nextProps.dynamic ||
        // We do this check because `dynamic` is an array of strings or undefined.
        // These are the computed values for dynamic styles.
        (props.dynamic && String(props.dynamic) !== String(nextProps.dynamic));
    }

    ensureInserted(nextProps) {
      if (nextProps.id === this.cssId) {
        return;
      }
      this.dispose();
      this.cssId = nextProps.id;
      styleSheetRegistry.add(nextProps);
    }

    dispose() {
      if (this.cssId) {
        styleSheetRegistry.remove(this.props);
      }
    }

    componentWillMount() {
      this.ensureInserted(this.props);
    }

    componentWillUnmount() {
      this.dispose();
    }
  }

  return JSXStyle;
})();
