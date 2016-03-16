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
    return {navigatorRedux: {actions: this.props.actions}};
  }

  render() {
    const {index, stack, renderScene} = this.props;
    return renderScene(stack, index);
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
