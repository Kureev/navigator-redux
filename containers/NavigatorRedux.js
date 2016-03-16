const Immutable = require('immutable');
const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');
const actions = require('../actions');
const invariant = require('invariant');

const {PropTypes, Component} = React;

/**
 * A functional component for rendering navigator
 * @param  {Number} options.index Navigation stack's current index
 * @param  {Immutable.Stack} options.stack Navigation stack
 * @param  {Object} options.actions Navigator's actions
 * @param  {Function} options.renderScene Scene renderer
 * @return {React.Component}
 */
class NavigatorRedux extends Component {
  getChildContext() {
    /**
     * Custom props that would be accesible from the child tree
     */
    return {navigatorRedux: {actions}};
  }

  render() {
    const {index, stack, routeMapper, renderScene} = props;
    const routeName = stack.get(index);
    const route = routeMapper(routeName);

    invariant(route.component,
      `We weren\'t able to find any route for the "${routeName}". ` +
      'Please, check your routeMapper function'
    );

    return renderScene(React.createElement(route, route.passProps));
  }
}

NavigatorRedux.propTypes = {
  index: PropTypes.number.isRequired,
  stack: PropTypes.instanceOf(Immutable.Stack).isRequired,
  actions: PropTypes.object.isRequired,
  renderScene: PropTypes.func,
};

NavigatorRedux.defaultProps = {
  renderScene: (route) => route,
};

const mapStateToProps = (state) => ({
  stack: state.__navRedux.stack,
  index: state.__navRedux.index,
});

const mapActionsToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

module.exports = connect(mapStateToProps, mapActionsToProps)(renderNavigator);
