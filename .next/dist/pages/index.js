'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jose/Sites/TekusPlaylist/pages/index.js?entry';


var Index = function (_React$Component) {
	(0, _inherits3.default)(Index, _React$Component);

	function Index() {
		(0, _classCallCheck3.default)(this, Index);

		return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
	}

	(0, _createClass3.default)(Index, [{
		key: 'componentDidMount',

		// static async getInitialProps({ req }) {
		// console.log(req)
		// const urls = []
		// return {}
		// }

		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var res, data;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return (0, _isomorphicUnfetch2.default)('http://cdn.tekus.co/Media/Tekus_BG2.jpg');

							case 2:
								res = _context.sent;

								console.log(res);
								_context.next = 6;
								return res.blob();

							case 6:
								data = _context.sent;

								console.log(data);

							case 8:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentDidMount() {
				return _ref.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('section', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}, 'Indexs');
		}
	}]);

	return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmV0Y2giLCJJbmRleCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJibG9iIiwiZGF0YSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7SUFFRCxBOzs7Ozs7Ozs7O09BQ0w7O0FBQ0M7QUFDQTtBQUNBO0FBQ0Q7Ozs7Ozs7Ozs7O2VBR21CLGlDQUFBLEFBQU0sQTs7WUFBbEI7QSx1QkFDTjs7Z0JBQUEsQUFBUSxJQUFSLEFBQVk7O2VBQ08sSUFBQSxBQUFJLEE7O1lBQWpCO0Esd0JBQ047O2dCQUFBLEFBQVEsSUFBUixBQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBR0osQUFDUjswQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxJQUFBLEVBREQsQUFDQyxBQUlEOzs7OztFQXBCa0IsZ0JBQU0sQSxBQXVCMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvam9zZS9TaXRlcy9UZWt1c1BsYXlsaXN0In0=