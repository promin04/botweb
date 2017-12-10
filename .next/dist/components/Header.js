'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _webInfo = require('../config/web-info');

var _webInfo2 = _interopRequireDefault(_webInfo);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\promin\\Desktop\\botweb\\components\\Header.js';


var Header = function Header(props) {
  return _react2.default.createElement(_AppBar2.default, { position: 'static', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_Toolbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('div', { className: 'col-xs-6 header-left', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_Typography2.default, {
    type: 'title',
    color: 'inherit',
    className: 'header-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('img', { src: _webInfo2.default.logo, alt: _webInfo2.default.name || 'name', className: 'header-logo', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _webInfo2.default.name || 'name')), _react2.default.createElement('div', { className: 'col-xs-6 header-right', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('ul', { className: 'header-ul', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('li', { className: 'header-li', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(_Button2.default, { color: 'primary', raised: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, ' Log In '))))))));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJBcHBCYXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsImluZm8iLCJSYWlzZWRCdXR0b24iLCJIZWFkZXIiLCJwcm9wcyIsImxvZ28iLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sU0FBUyxTQUFULEFBQVMsT0FBQSxBQUFDLE9BQUQ7eUJBQ1gsQUFBQyxrQ0FBTyxVQUFSLEFBQWlCO2dCQUFqQjtrQkFBQSxBQUNJO0FBREo7R0FBQSxrQkFDSSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBRVE7QUFGUjtxQkFFUSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDO1VBQUQsQUFDTyxBQUNMO1dBRkYsQUFFUSxBQUNOO2VBSEYsQUFHWTs7Z0JBSFo7a0JBQUEsQUFLRTtBQUxGO0FBQ0UsNENBSUssS0FBSyxrQkFBVixBQUFlLE1BQU0sS0FBSyxrQkFBQSxBQUFLLFFBQS9CLEFBQXVDLFFBQVEsV0FBL0MsQUFBeUQ7Z0JBQXpEO2tCQUxGLEFBS0UsQUFDQztBQUREO3dCQUNDLEFBQUssUUFUbEIsQUFFUSxBQUNFLEFBTWdCLEFBSWxCLDBCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7Z0JBQWQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7Z0JBQWQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsa0NBQWEsT0FBZCxBQUFvQixXQUFVLFFBQTlCLEFBQXNDO2dCQUF0QztrQkFBQTtBQUFBO0tBcEJYLEFBQ1gsQUFDSSxBQUNFLEFBQ0UsQUFhUSxBQUNFLEFBQ0UsQUFDRTtBQXBCMUIsQUErQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3Byb21pbi9EZXNrdG9wL2JvdHdlYiJ9