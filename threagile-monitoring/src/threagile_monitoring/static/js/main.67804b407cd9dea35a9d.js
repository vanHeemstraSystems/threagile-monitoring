/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/App.tsx":
/*!****************************!*\
  !*** ./components/App.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./components/Layout.tsx");
/* harmony import */ var _NoMatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoMatch */ "./components/NoMatch.tsx");




var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      showHome: true
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/dashboards",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      showDashboard: true
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NoMatch__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./components/Dashboard.js":
/*!*********************************!*\
  !*** ./components/Dashboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/shape/Sector.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/ScatterChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/CartesianGrid.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/XAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/YAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Scatter.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/ResponsiveContainer.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Tooltip.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/AreaChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Area.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/PieChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/polar/Pie.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Cell.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/Treemap.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/settings.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/activity.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trending-down.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




// Parse Threagile risks.json structure
var parseThreagileData = function parseThreagileData(risksJson) {
  console.debug('parseThreagileData');
  var severityMap = {
    critical: {
      weight: 5,
      color: '#dc2626'
    },
    high: {
      weight: 4,
      color: '#ea580c'
    },
    elevated: {
      weight: 3,
      color: '#eab308'
    },
    medium: {
      weight: 2,
      color: '#84cc16'
    },
    low: {
      weight: 1,
      color: '#22c55e'
    }
  };
  return {
    risksBySeverity: Object.entries(risksJson.reduce(function (acc, risk) {
      acc[risk.severity] = (acc[risk.severity] || 0) + 1;
      return acc;
    }, {})).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        severity = _ref2[0],
        count = _ref2[1];
      return {
        name: severity,
        count: count,
        color: severityMap[severity.toLowerCase()].color
      };
    }),
    risksByCategory: Object.entries(risksJson.reduce(function (acc, risk) {
      acc[risk.category] = (acc[risk.category] || 0) + 1;
      return acc;
    }, {})).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        category = _ref4[0],
        value = _ref4[1];
      return {
        name: category,
        value: value
      };
    }),
    riskMatrix: risksJson.map(function (risk) {
      return {
        id: risk.id,
        impact: risk.exploitation_impact,
        likelihood: risk.exploitation_likelihood,
        severity: risk.severity,
        title: risk.title
      };
    }),
    mitigationStatus: Object.entries(risksJson.reduce(function (acc, risk) {
      acc[risk.risk_status] = (acc[risk.risk_status] || 0) + 1;
      return acc;
    }, {})).map(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
        status = _ref6[0],
        count = _ref6[1];
      return {
        name: status,
        value: count
      };
    }),
    technicalAssetRisks: Object.entries(risksJson.reduce(function (acc, risk) {
      console.debug('acc:', acc, 'risk:', risk);
      if (!risk.data_breach_technical_assets || !acc) return {};
      risk.data_breach_technical_assets.forEach(function (asset) {
        acc[asset] = (acc[asset] || 0) + severityMap[risk.severity.toLowerCase()].weight;
      });
      return acc;
    }, {})).map(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
        asset = _ref8[0],
        weight = _ref8[1];
      return {
        name: asset,
        value: weight
      };
    })
  };
};
var Dashboard = function Dashboard(_ref9) {
  var risksJson = _ref9.risksJson;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    activeIndex = _useState2[0],
    setActiveIndex = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedSeverity = _useState4[0],
    setSelectedSeverity = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('1M'),
    _useState6 = _slicedToArray(_useState5, 2),
    timeRange = _useState6[0],
    setTimeRange = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    data = _useState8[0],
    setData = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.debug('Dashboard with risksJson started: ', risksJson);
    if (risksJson) {
      setData(parseThreagileData(risksJson));
    }
  }, [risksJson]);
  if (!data) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");

  // Custom Active Shape for Pie Chart
  var renderActiveShape = function renderActiveShape(props) {
    console.debug('renderActiveShape');
    var cx = props.cx,
      cy = props.cy,
      innerRadius = props.innerRadius,
      outerRadius = props.outerRadius,
      startAngle = props.startAngle,
      endAngle = props.endAngle,
      fill = props.fill,
      payload = props.payload,
      percent = props.percent,
      value = props.value;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
      x: cx,
      y: cy,
      dy: 8,
      textAnchor: "middle",
      fill: fill
    }, payload.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_1__.Sector, {
      cx: cx,
      cy: cy,
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      startAngle: startAngle,
      endAngle: endAngle,
      fill: fill
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_1__.Sector, {
      cx: cx,
      cy: cy,
      startAngle: startAngle,
      endAngle: endAngle,
      innerRadius: outerRadius + 6,
      outerRadius: outerRadius + 10,
      fill: fill
    }));
  };

  // Hardcoded Risk Matrix for testing only
  var TestRiskMatrix = function TestRiskMatrix(data) {
    console.debug('TestRiskMatrix, data: ', data);
    var sample_data = [{
      likelihood: "likely",
      impact: "medium"
    }, {
      likelihood: "likely",
      impact: "medium"
    }, {
      likelihood: "likely",
      impact: "medium"
    }, {
      likelihood: "likely",
      impact: "medium"
    }, {
      likelihood: "likely",
      impact: "medium"
    }, {
      likelihood: "likely",
      impact: "medium"
    }, {
      likelihood: "likely",
      impact: "medium"
    }, {
      likelihood: "likely",
      impact: "medium"
    }, {
      likelihood: "likely",
      impact: "medium"
    }];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_2__.ScatterChart, {
      width: 400,
      height: 400
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_3__.CartesianGrid, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_4__.XAxis, {
      dataKey: "likelihood",
      name: "Likelihood"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_5__.YAxis, {
      dataKey: "impact",
      name: "Impact"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_6__.Scatter, {
      data: sample_data,
      fill: "green"
    }));
  };

  // Interactive Risk Matrix
  var RiskMatrix = function RiskMatrix(data) {
    console.debug('RiskMatrix, data: ', data);
    var severityColors = {
      critical: '#dc2626',
      high: '#ea580c',
      elevated: '#eab308',
      medium: '#84cc16',
      low: '#22c55e'
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_7__.ResponsiveContainer, {
      width: "100%",
      height: 400
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_2__.ScatterChart, {
      width: 400,
      height: 300
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_3__.CartesianGrid, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_4__.XAxis, {
      type: "number",
      dataKey: "likelihood",
      name: "Likelihood"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_5__.YAxis, {
      type: "number",
      dataKey: "impact",
      name: "Impact"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_8__.Tooltip, {
      content: function content(_ref10) {
        var active = _ref10.active,
          payload = _ref10.payload;
        if (active && payload && payload.length) {
          var risk = payload[0].payload;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "bg-white p-2 shadow rounded"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
            className: "font-bold"
          }, risk.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Impact: ", risk.impact), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Likelihood: ", risk.likelihood), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Severity: ", risk.severity));
        }
        return null;
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_6__.Scatter, {
      data: data.riskMatrix,
      fill: "#8884d8",
      shape: function shape(props) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
          cx: props.cx,
          cy: props.cy,
          r: 8,
          fill: severityColors[props.payload.severity.toLowerCase()],
          opacity: 0.8
        });
      }
    })));
  };

  // Risk Trend Over Time
  var RiskTrendChart = function RiskTrendChart(_ref11) {
    var timeRange = _ref11.timeRange;
    // Simulate historical data based on current risks
    var generateHistoricalData = function generateHistoricalData() {
      var periods = {
        '1M': 30,
        '3M': 90,
        '6M': 180,
        '1Y': 365
      };
      var days = periods[timeRange];
      return Array.from({
        length: days
      }, function (_, i) {
        return {
          date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000),
          risks: Math.floor(Math.random() * 20) + 30
        };
      });
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_9__.AreaChart, {
      width: 400,
      height: 300,
      data: generateHistoricalData()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
      id: "riskColor",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
      offset: "5%",
      stopColor: "#3b82f6",
      stopOpacity: 0.8
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
      offset: "95%",
      stopColor: "#3b82f6",
      stopOpacity: 0
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_4__.XAxis, {
      dataKey: "date",
      tickFormatter: function tickFormatter(date) {
        return new Date(date).toLocaleDateString();
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_5__.YAxis, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_3__.CartesianGrid, {
      strokeDasharray: "3 3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_8__.Tooltip, {
      labelFormatter: function labelFormatter(date) {
        return new Date(date).toLocaleDateString();
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_10__.Area, {
      type: "monotone",
      dataKey: "risks",
      stroke: "#3b82f6",
      fillOpacity: 1,
      fill: "url(#riskColor)"
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-6 space-y-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-2xl font-bold"
  }, "Security Risk Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "p-2 border rounded",
    value: timeRange,
    onChange: function onChange(e) {
      return setTimeRange(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "1M"
  }, "Last Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "3M"
  }, "Last 3 Months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "6M"
  }, "Last 6 Months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "1Y"
  }, "Last Year")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "p-2 bg-blue-500 text-white rounded flex items-center gap-2",
    onClick: function onClick() {
      return window.location.reload();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
    size: 16
  }), " Refresh"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white p-4 rounded-lg shadow flex items-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "text-red-500",
    size: 24
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold"
  }, "Critical Risks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-2xl font-bold"
  }, data.risksBySeverity.find(function (r) {
    return r.name.toLowerCase() === 'critical';
  }).count || 0))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white p-4 rounded-lg shadow flex items-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "text-yellow-500",
    size: 24
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold"
  }, "Active Mitigations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-2xl font-bold"
  }, data.mitigationStatus.find(function (s) {
    return s.name === 'in-progress';
  }).value || 0, ' '))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white p-4 rounded-lg shadow flex items-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: "text-green-500",
    size: 24
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold"
  }, "Risk Reduction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-2xl font-bold"
  }, "23%")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white p-4 rounded-lg shadow col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold mb-4"
  }, "Test Risk Matrix"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TestRiskMatrix, {
    data: data
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-2 text-sm text-gray-600"
  }, "Interactive risk matrix showing impact vs likelihood. Click on points to see risk details.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white p-4 rounded-lg shadow col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold mb-4"
  }, "Risk Matrix"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RiskMatrix, {
    data: data
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-2 text-sm text-gray-600"
  }, "Interactive risk matrix showing impact vs likelihood. Click on points to see risk details.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white p-4 rounded-lg shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold mb-4"
  }, "Risk Categories"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_15__.PieChart, {
    width: 400,
    height: 300
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_16__.Pie, {
    activeIndex: activeIndex,
    activeShape: renderActiveShape,
    data: data.risksByCategory,
    cx: "50%",
    cy: "50%",
    innerRadius: 60,
    outerRadius: 80,
    dataKey: "value",
    onMouseEnter: function onMouseEnter(_, index) {
      return setActiveIndex(index);
    }
  }, data.risksByCategory.map(function (entry, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_17__.Cell, {
      key: "cell-".concat(index),
      fill: "hsl(".concat(index * 45, ", 70%, 50%)")
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_8__.Tooltip, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white p-4 rounded-lg shadow col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold mb-4"
  }, "Risk Trend"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RiskTrendChart, {
    timeRange: timeRange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-2 text-sm text-gray-600"
  }, "Historical view of risk levels over time.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white p-4 rounded-lg shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold mb-4"
  }, "Asset Risk Heatmap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_18__.Treemap, {
    width: 400,
    height: 300,
    data: data.technicalAssetRisks,
    dataKey: "value",
    ratio: 4 / 3,
    stroke: "#fff",
    fill: "#8884d8",
    content: function content(_ref12) {
      var root = _ref12.root,
        depth = _ref12.depth,
        x = _ref12.x,
        y = _ref12.y,
        width = _ref12.width,
        height = _ref12.height,
        index = _ref12.index,
        payload = _ref12.payload,
        colors = _ref12.colors,
        rank = _ref12.rank,
        name = _ref12.name;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
        x: x,
        y: y,
        width: width,
        height: height,
        style: {
          fill: "hsl(".concat(index * 45, ", 70%, 50%)"),
          stroke: '#fff',
          strokeWidth: 2,
          strokeOpacity: 1 / (depth + 1e-10)
        }
      }), depth === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
        x: x + width / 2,
        y: y + height / 2,
        textAnchor: "middle",
        fill: "#fff",
        fontSize: 12
      }, name));
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white p-4 rounded-lg shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold mb-4"
  }, "Visualization Controls"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "block text-sm font-medium text-gray-700"
  }, "Severity Filter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "mt-1 block w-full p-2 border rounded",
    value: selectedSeverity || '',
    onChange: function onChange(e) {
      return setSelectedSeverity(e.target.value || null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "All Severities"), data.risksBySeverity.map(function (risk) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: risk.name,
      value: risk.name
    }, risk.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "block text-sm font-medium text-gray-700"
  }, "Time Range"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "mt-1 block w-full p-2 border rounded",
    value: timeRange,
    onChange: function onChange(e) {
      return setTimeRange(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "1M"
  }, "Last Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "3M"
  }, "Last 3 Months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "6M"
  }, "Last 6 Months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "1Y"
  }, "Last Year"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./components/Features.tsx":
/*!*********************************!*\
  !*** ./components/Features.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Features: () => (/* binding */ Features),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/shield.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/zap.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/refresh-cw.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/bell.js");


var features = [{
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"],
  title: "Threat Detection",
  description: "Advanced algorithms to identify and analyze potential security threats in real-time"
}, {
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"],
  title: "Quick Response",
  description: "Immediate alerts and automated responses to security incidents"
}, {
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"],
  title: "Agile Integration",
  description: "Seamlessly integrates with your agile development workflow"
}, {
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"],
  title: "Smart Alerts",
  description: "Customizable notifications for different threat levels and security events"
}];
var Features = function Features() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white py-24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mx-auto px-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-4xl font-bold text-center text-darkGray mb-16"
  }, "Key Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
  }, features.map(function (feature, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      className: "p-6 rounded-lg border border-gray-200 hover:border-neonBlue transition-all duration-300 group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(feature.icon, {
      className: "h-12 w-12 text-neonBlue mb-4 group-hover:animate-glow"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-xl font-semibold text-darkGray mb-2"
    }, feature.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-gray-600"
    }, feature.description));
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Features);

/***/ }),

/***/ "./components/Hero.tsx":
/*!*****************************!*\
  !*** ./components/Hero.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hero: () => (/* binding */ Hero),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/shield.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/lock.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/activity.js");


var Hero = function Hero() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative min-h-screen flex items-center justify-center bg-darkGray overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute inset-0 opacity-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "h-full w-full bg-[linear-gradient(#33C3F0_1px,transparent_1px),linear-gradient(90deg,#33C3F0_1px,transparent_1px)]",
    style: {
      backgroundSize: '20px 20px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mx-auto px-4 z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center animate-fade-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center mb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "h-16 w-16 text-neonBlue animate-glow"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-5xl md:text-7xl font-bold text-white mb-6"
  }, "Threagile Monitoring"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
  }, "Secure your software with real-time threat modeling and agile security monitoring"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col md:flex-row gap-6 justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "px-8 py-4 bg-neonBlue text-white rounded-lg hover:bg-opacity-80 transition-all duration-300 flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "h-5 w-5"
  }), "Get Started"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "px-8 py-4 border border-neonBlue text-neonBlue rounded-lg hover:bg-neonBlue hover:bg-opacity-10 transition-all duration-300 flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "h-5 w-5"
  }), "Live Demo")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./components/Home.tsx":
/*!*****************************!*\
  !*** ./components/Home.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hero_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero.tsx */ "./components/Hero.tsx");
/* harmony import */ var _Features_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Features.tsx */ "./components/Features.tsx");



function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Hero_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Features_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./components/Home.tsx");
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard */ "./components/Dashboard.js");




// Temporarily hard coded, make dynamic import
var risksJson = [{
  category: 'missing-authentication',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'medium',
  title: "<b>Missing Authentication</b> covering communication link <b>CMS Content Traffic</b> from <b>Load Balancer</b> to <b>Marketing CMS</b>",
  synthetic_id: "missing-authentication@load-balancer>cms-content-traffic@load-balancer@marketing-cms",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'marketing-cms',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "load-balancer>cms-content-traffic",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['marketing-cms']
}, {
  category: 'missing-authentication',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'medium',
  title: "<b>Missing Authentication</b> covering communication link <b>NFS Filesystem Access</b> from <b>Backoffice ERP System</b> to <b>Contract Fileserver</b>",
  synthetic_id: "missing-authentication@erp-system>nfs-filesystem-access@erp-system@contract-fileserver",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'contract-fileserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "erp-system>nfs-filesystem-access",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['contract-fileserver']
}, {
  category: 'ldap-injection',
  risk_status: 'mitigated',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'high',
  title: "<b>LDAP-Injection</b> risk at <b>Identity Provider</b> against LDAP server <b>LDAP Auth Server</b> via <b>LDAP Credential Check Traffic</b>",
  synthetic_id: "ldap-injection@identity-provider@ldap-auth-server@identity-provider>ldap-credential-check-traffic",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'identity-provider',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "identity-provider>ldap-credential-check-traffic",
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['ldap-auth-server']
}, {
  category: 'ldap-injection',
  risk_status: 'mitigated',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'high',
  title: "<b>LDAP-Injection</b> risk at <b>Marketing CMS</b> against LDAP server <b>LDAP Auth Server</b> via <b>Auth Traffic</b>",
  synthetic_id: "ldap-injection@marketing-cms@ldap-auth-server@marketing-cms>auth-traffic",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'marketing-cms',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "marketing-cms>auth-traffic",
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['ldap-auth-server']
}, {
  category: 'push-instead-of-pull-deployment',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Push instead of Pull Deployment</b> at <b>Apache Webserver</b> via build pipeline asset <b>Jenkins Buildserver</b>",
  synthetic_id: 'push-instead-of-pull-deployment@jenkins-buildserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'apache-webserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "jenkins-buildserver>application-deployment",
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['apache-webserver']
}, {
  category: 'push-instead-of-pull-deployment',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Push instead of Pull Deployment</b> at <b>Marketing CMS</b> via build pipeline asset <b>Jenkins Buildserver</b>",
  synthetic_id: 'push-instead-of-pull-deployment@jenkins-buildserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'marketing-cms',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "jenkins-buildserver>cms-updates",
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['marketing-cms']
}, {
  category: 'unencrypted-communication',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'high',
  title: "<b>Unencrypted Communication</b> named <b>Auth Traffic</b> between <b>Marketing CMS</b> and <b>LDAP Auth Server</b> transferring authentication data (like credentials, token, session-id, etc.)",
  synthetic_id: "unencrypted-communication@marketing-cms>auth-traffic@marketing-cms@ldap-auth-server",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'marketing-cms',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "marketing-cms>auth-traffic",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['ldap-auth-server']
}, {
  category: 'unencrypted-communication',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'high',
  title: "<b>Unencrypted Communication</b> named <b>Web Application Traffic</b> between <b>Load Balancer</b> and <b>Apache Webserver</b> transferring authentication data (like credentials, token, session-id, etc.)",
  synthetic_id: "unencrypted-communication@load-balancer>web-application-traffic@load-balancer@apache-webserver",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'load-balancer',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "load-balancer>web-application-traffic",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['apache-webserver']
}, {
  category: 'unencrypted-communication',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'high',
  title: "<b>Unencrypted Communication</b> named <b>Database Traffic</b> between <b>Backoffice ERP System</b> and <b>Customer Contract Database</b> transferring authentication data (like credentials, token, session-id, etc.)",
  synthetic_id: "unencrypted-communication@erp-system>database-traffic@erp-system@sql-database",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "erp-system>database-traffic",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['sql-database']
}, {
  category: 'unencrypted-communication',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Unencrypted Communication</b> named <b>NFS Filesystem Access</b> between <b>Backoffice ERP System</b> and <b>Contract Fileserver</b>",
  synthetic_id: "unencrypted-communication@erp-system>nfs-filesystem-access@erp-system@contract-fileserver",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "erp-system>nfs-filesystem-access",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['contract-fileserver']
}, {
  category: 'unguarded-access-from-internet',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'very-likely',
  exploitation_impact: 'medium',
  title: "<b>Unguarded Access from Internet</b> of <b>Git Repository</b> by <b>External Development Client</b> via <b>Git-Repo Code Write Access</b>",
  synthetic_id: "unguarded-access-from-internet@git-repo@external-dev-client@external-dev-client>git-repo-code-write-access",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'git-repo',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "external-dev-client>git-repo-code-write-access",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['git-repo']
}, {
  category: 'unguarded-access-from-internet',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'very-likely',
  exploitation_impact: 'medium',
  title: "<b>Unguarded Access from Internet</b> of <b>Git Repository</b> by <b>External Development Client</b> via <b>Git-Repo Web-UI Access</b>",
  synthetic_id: "unguarded-access-from-internet@git-repo@external-dev-client@external-dev-client>git-repo-web-ui-access",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'git-repo',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "external-dev-client>git-repo-web-ui-access",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['git-repo']
}, {
  category: 'unguarded-access-from-internet',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'very-likely',
  exploitation_impact: 'medium',
  title: "<b>Unguarded Access from Internet</b> of <b>Jenkins Buildserver</b> by <b>External Development Client</b> via <b>Jenkins Web-UI Access</b>",
  synthetic_id: "unguarded-access-from-internet@jenkins-buildserver@external-dev-client@external-dev-client>jenkins-web-ui-access",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'jenkins-buildserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "external-dev-client>jenkins-web-ui-access",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['jenkins-buildserver']
}, {
  category: 'missing-vault',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Missing Vault (Secret Storage)</b> in the threat model (referencing asset <b>Backoffice ERP System</b> as an example)",
  synthetic_id: 'missing-vault@erp-system',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: []
}, {
  category: 'missing-file-validation',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'very-likely',
  exploitation_impact: 'medium',
  title: "<b>Missing File Validation</b> risk at <b>Apache Webserver</b>",
  synthetic_id: 'missing-file-validation@apache-webserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'apache-webserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['apache-webserver']
}, {
  category: 'container-baseimage-backdooring',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'high',
  title: "<b>Container Base Image Backdooring</b> risk at <b>Apache Webserver</b>",
  synthetic_id: 'container-baseimage-backdooring@apache-webserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'apache-webserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['apache-webserver']
}, {
  category: 'container-baseimage-backdooring',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'high',
  title: "<b>Container Base Image Backdooring</b> risk at <b>Marketing CMS</b>",
  synthetic_id: 'container-baseimage-backdooring@marketing-cms',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'marketing-cms',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['marketing-cms']
}, {
  category: 'missing-waf',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Missing Web Application Firewall (WAF)</b> risk at <b>Apache Webserver</b>",
  synthetic_id: 'missing-waf@apache-webserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'apache-webserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['apache-webserver']
}, {
  category: 'missing-waf',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Missing Web Application Firewall (WAF)</b> risk at <b>Backoffice ERP System</b>",
  synthetic_id: 'missing-waf@erp-system',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['erp-system']
}, {
  category: 'missing-waf',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Missing Web Application Firewall (WAF)</b> risk at <b>Identity Provider</b>",
  synthetic_id: 'missing-waf@identity-provider',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'identity-provider',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['identity-provider']
}, {
  category: 'missing-waf',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Missing Web Application Firewall (WAF)</b> risk at <b>Marketing CMS</b>",
  synthetic_id: 'missing-waf@marketing-cms',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'marketing-cms',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['marketing-cms']
}, {
  category: 'server-side-request-forgery',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'medium',
  title: "<b>Server-Side Request Forgery (SSRF)</b> risk at <b>Apache Webserver</b> server-side web-requesting the target <b>Backoffice ERP System</b> via <b>ERP System Traffic</b>",
  synthetic_id: "server-side-request-forgery@apache-webserver@erp-system@apache-webserver>erp-system-traffic",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'apache-webserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "apache-webserver>erp-system-traffic",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['apache-webserver', 'marketing-cms']
}, {
  category: 'server-side-request-forgery',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'medium',
  title: "<b>Server-Side Request Forgery (SSRF)</b> risk at <b>Apache Webserver</b> server-side web-requesting the target <b>Identity Provider</b> via <b>Auth Credential Check Traffic</b>",
  synthetic_id: "server-side-request-forgery@apache-webserver@identity-provider@apache-webserver>auth-credential-check-traffic",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'apache-webserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "apache-webserver>auth-credential-check-traffic",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['apache-webserver', 'marketing-cms']
}, {
  category: 'xml-external-entity',
  risk_status: 'unchecked',
  severity: 'high',
  exploitation_likelihood: 'very-likely',
  exploitation_impact: 'high',
  title: "<b>XML External Entity (XXE)</b> risk at <b>Backoffice ERP System</b>",
  synthetic_id: 'xml-external-entity@erp-system',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['erp-system']
}, {
  category: 'missing-hardening',
  risk_status: 'mitigated',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'medium',
  title: "<b>Missing Hardening</b> risk at <b>Apache Webserver</b>",
  synthetic_id: 'missing-hardening@apache-webserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'apache-webserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['apache-webserver']
}, {
  category: 'missing-hardening',
  risk_status: 'mitigated',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'medium',
  title: "<b>Missing Hardening</b> risk at <b>Backoffice ERP System</b>",
  synthetic_id: 'missing-hardening@erp-system',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['erp-system']
}, {
  category: 'missing-hardening',
  risk_status: 'mitigated',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'medium',
  title: "<b>Missing Hardening</b> risk at <b>Customer Contract Database</b>",
  synthetic_id: 'missing-hardening@sql-database',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'sql-database',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['sql-database']
}, {
  category: 'missing-hardening',
  risk_status: 'mitigated',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'medium',
  title: "<b>Missing Hardening</b> risk at <b>Identity Provider</b>",
  synthetic_id: 'missing-hardening@identity-provider',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'identity-provider',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['identity-provider']
}, {
  category: 'missing-hardening',
  risk_status: 'mitigated',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'medium',
  title: "<b>Missing Hardening</b> risk at <b>Jenkins Buildserver</b>",
  synthetic_id: 'missing-hardening@jenkins-buildserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'jenkins-buildserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['jenkins-buildserver']
}, {
  category: 'missing-hardening',
  risk_status: 'mitigated',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'medium',
  title: "<b>Missing Hardening</b> risk at <b>LDAP Auth Server</b>",
  synthetic_id: 'missing-hardening@ldap-auth-server',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'ldap-auth-server',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['ldap-auth-server']
}, {
  category: 'unchecked-deployment',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Unchecked Deployment</b> risk at <b>External Development Client</b>",
  synthetic_id: 'unchecked-deployment@external-dev-client',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'external-dev-client',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['external-dev-client', 'git-repo', 'jenkins-buildserver']
}, {
  category: 'unchecked-deployment',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Unchecked Deployment</b> risk at <b>Jenkins Buildserver</b>",
  synthetic_id: 'unchecked-deployment@jenkins-buildserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'jenkins-buildserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['jenkins-buildserver', 'apache-webserver', 'marketing-cms']
}, {
  category: 'unchecked-deployment',
  risk_status: 'unchecked',
  severity: 'low',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'low',
  title: "<b>Unchecked Deployment</b> risk at <b>Git Repository</b>",
  synthetic_id: 'unchecked-deployment@git-repo',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'git-repo',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['git-repo']
}, {
  category: 'missing-identity-propagation',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Missing Enduser Identity Propagation</b> over communication link <b>ERP System Traffic</b> from <b>Apache Webserver</b> to <b>Backoffice ERP System</b>",
  synthetic_id: "missing-identity-propagation@apache-webserver>erp-system-traffic@apache-webserver@erp-system",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "apache-webserver>erp-system-traffic",
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['erp-system']
}, {
  category: 'missing-authentication-second-factor',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Missing Two-Factor Authentication</b> covering communication link <b>CMS Content Traffic</b> from <b>Customer Web Client</b> forwarded via <b>Load Balancer</b> to <b>Marketing CMS</b>",
  synthetic_id: "missing-authentication-second-factor@load-balancer>cms-content-traffic@load-balancer@marketing-cms",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'marketing-cms',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "load-balancer>cms-content-traffic",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['marketing-cms']
}, {
  category: 'missing-authentication-second-factor',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Missing Two-Factor Authentication</b> covering communication link <b>DB Update Access</b> from <b>Backend Admin Client</b> to <b>Customer Contract Database</b>",
  synthetic_id: "missing-authentication-second-factor@backend-admin-client>db-update-access@backend-admin-client@sql-database",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'sql-database',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "backend-admin-client>db-update-access",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['sql-database']
}, {
  category: 'missing-authentication-second-factor',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Missing Two-Factor Authentication</b> covering communication link <b>ERP Internal Access</b> from <b>Backoffice Client</b> to <b>Backoffice ERP System</b>",
  synthetic_id: "missing-authentication-second-factor@backoffice-client>erp-internal-access@backoffice-client@erp-system",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "backoffice-client>erp-internal-access",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['erp-system']
}, {
  category: 'missing-authentication-second-factor',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Missing Two-Factor Authentication</b> covering communication link <b>ERP Web Access</b> from <b>Backend Admin Client</b> to <b>Backoffice ERP System</b>",
  synthetic_id: "missing-authentication-second-factor@backend-admin-client>erp-web-access@backend-admin-client@erp-system",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "backend-admin-client>erp-web-access",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['erp-system']
}, {
  category: 'missing-authentication-second-factor',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Missing Two-Factor Authentication</b> covering communication link <b>Git-Repo Code Write Access</b> from <b>External Development Client</b> to <b>Git Repository</b>",
  synthetic_id: "missing-authentication-second-factor@external-dev-client>git-repo-code-write-access@external-dev-client@git-repo",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'git-repo',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "external-dev-client>git-repo-code-write-access",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['git-repo']
}, {
  category: 'missing-authentication-second-factor',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Missing Two-Factor Authentication</b> covering communication link <b>Git-Repo Web-UI Access</b> from <b>External Development Client</b> to <b>Git Repository</b>",
  synthetic_id: "missing-authentication-second-factor@external-dev-client>git-repo-web-ui-access@external-dev-client@git-repo",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'git-repo',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "external-dev-client>git-repo-web-ui-access",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['git-repo']
}, {
  category: 'missing-authentication-second-factor',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Missing Two-Factor Authentication</b> covering communication link <b>Jenkins Web-UI Access</b> from <b>External Development Client</b> to <b>Jenkins Buildserver</b>",
  synthetic_id: "missing-authentication-second-factor@external-dev-client>jenkins-web-ui-access@external-dev-client@jenkins-buildserver",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'jenkins-buildserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "external-dev-client>jenkins-web-ui-access",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['jenkins-buildserver']
}, {
  category: 'missing-authentication-second-factor',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Missing Two-Factor Authentication</b> covering communication link <b>User Management Access</b> from <b>Backend Admin Client</b> to <b>LDAP Auth Server</b>",
  synthetic_id: "missing-authentication-second-factor@backend-admin-client>user-management-access@backend-admin-client@ldap-auth-server",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'ldap-auth-server',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "backend-admin-client>user-management-access",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['ldap-auth-server']
}, {
  category: 'missing-authentication-second-factor',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Missing Two-Factor Authentication</b> covering communication link <b>Web Application Traffic</b> from <b>Customer Web Client</b> forwarded via <b>Load Balancer</b> to <b>Apache Webserver</b>",
  synthetic_id: "missing-authentication-second-factor@load-balancer>web-application-traffic@load-balancer@apache-webserver",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'apache-webserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "load-balancer>web-application-traffic",
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['apache-webserver']
}, {
  category: 'accidental-secret-leak',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'high',
  title: "<b>Accidental Secret Leak (Git)</b> risk at <b>Git Repository</b>: <u>Git Leak Prevention</u>",
  synthetic_id: 'accidental-secret-leak@git-repo',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'git-repo',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['git-repo']
}, {
  category: 'code-backdooring',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'high',
  title: "<b>Code Backdooring</b> risk at <b>Git Repository</b>",
  synthetic_id: 'code-backdooring@git-repo',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'git-repo',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['git-repo']
}, {
  category: 'code-backdooring',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'high',
  title: "<b>Code Backdooring</b> risk at <b>Jenkins Buildserver</b>",
  synthetic_id: 'code-backdooring@jenkins-buildserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'jenkins-buildserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['marketing-cms', 'jenkins-buildserver', 'apache-webserver']
}, {
  category: 'dos-risky-access-across-trust-boundary',
  risk_status: 'in-progress',
  severity: 'low',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'low',
  title: "<b>Denial-of-Service</b> risky access of <b>Apache Webserver</b> by <b>Customer Web Client</b> via <b>Customer Traffic</b> forwarded via <b>Load Balancer</b>",
  synthetic_id: "dos-risky-access-across-trust-boundary@apache-webserver@customer-client@customer-client>customer-traffic",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'apache-webserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "customer-client>customer-traffic",
  data_breach_probability: 'improbable',
  data_breach_technical_assets: []
}, {
  category: 'dos-risky-access-across-trust-boundary',
  risk_status: 'in-progress',
  severity: 'low',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'low',
  title: "<b>Denial-of-Service</b> risky access of <b>Backoffice ERP System</b> by <b>Apache Webserver</b> via <b>ERP System Traffic</b>",
  synthetic_id: "dos-risky-access-across-trust-boundary@erp-system@apache-webserver@apache-webserver>erp-system-traffic",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "apache-webserver>erp-system-traffic",
  data_breach_probability: 'improbable',
  data_breach_technical_assets: []
}, {
  category: 'dos-risky-access-across-trust-boundary',
  risk_status: 'in-progress',
  severity: 'low',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'low',
  title: "<b>Denial-of-Service</b> risky access of <b>Backoffice ERP System</b> by <b>Backoffice Client</b> via <b>ERP Internal Access</b>",
  synthetic_id: "dos-risky-access-across-trust-boundary@erp-system@backoffice-client@backoffice-client>erp-internal-access",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "backoffice-client>erp-internal-access",
  data_breach_probability: 'improbable',
  data_breach_technical_assets: []
}, {
  category: 'dos-risky-access-across-trust-boundary',
  risk_status: 'in-progress',
  severity: 'low',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'low',
  title: "<b>Denial-of-Service</b> risky access of <b>Identity Provider</b> by <b>Apache Webserver</b> via <b>Auth Credential Check Traffic</b>",
  synthetic_id: "dos-risky-access-across-trust-boundary@identity-provider@apache-webserver@apache-webserver>auth-credential-check-traffic",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'identity-provider',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "apache-webserver>auth-credential-check-traffic",
  data_breach_probability: 'improbable',
  data_breach_technical_assets: []
}, {
  category: 'dos-risky-access-across-trust-boundary',
  risk_status: 'in-progress',
  severity: 'low',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'low',
  title: "<b>Denial-of-Service</b> risky access of <b>LDAP Auth Server</b> by <b>Marketing CMS</b> via <b>Auth Traffic</b>",
  synthetic_id: "dos-risky-access-across-trust-boundary@ldap-auth-server@marketing-cms@marketing-cms>auth-traffic",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'ldap-auth-server',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "marketing-cms>auth-traffic",
  data_breach_probability: 'improbable',
  data_breach_technical_assets: []
}, {
  category: 'sql-nosql-injection',
  risk_status: 'unchecked',
  severity: 'high',
  exploitation_likelihood: 'very-likely',
  exploitation_impact: 'high',
  title: "<b>SQL/NoSQL-Injection</b> risk at <b>Backoffice ERP System</b> against database <b>Customer Contract Database</b> via <b>Database Traffic</b>",
  synthetic_id: "sql-nosql-injection@erp-system@sql-database@erp-system>database-traffic",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "erp-system>database-traffic",
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['sql-database']
}, {
  category: 'path-traversal',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'very-likely',
  exploitation_impact: 'medium',
  title: "<b>Path-Traversal</b> risk at <b>Backoffice ERP System</b> against filesystem <b>Contract Fileserver</b> via <b>NFS Filesystem Access</b>",
  synthetic_id: "path-traversal@erp-system@contract-fileserver@erp-system>nfs-filesystem-access",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "erp-system>nfs-filesystem-access",
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['contract-fileserver']
}, {
  category: 'untrusted-deserialization',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'very-high',
  title: "<b>Untrusted Deserialization</b> risk at <b>Jenkins Buildserver</b>",
  synthetic_id: 'untrusted-deserialization@jenkins-buildserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'jenkins-buildserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['jenkins-buildserver']
}, {
  category: 'untrusted-deserialization',
  risk_status: 'accepted',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'very-high',
  title: "<b>Untrusted Deserialization</b> risk at <b>Backoffice ERP System</b>",
  synthetic_id: 'untrusted-deserialization@erp-system',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['erp-system']
}, {
  category: 'cross-site-scripting',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'high',
  title: "<b>Cross-Site Scripting (XSS)</b> risk at <b>Apache Webserver</b>",
  synthetic_id: 'cross-site-scripting@apache-webserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'apache-webserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['apache-webserver']
}, {
  category: 'cross-site-scripting',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'high',
  title: "<b>Cross-Site Scripting (XSS)</b> risk at <b>Backoffice ERP System</b>",
  synthetic_id: 'cross-site-scripting@erp-system',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['erp-system']
}, {
  category: 'cross-site-scripting',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'high',
  title: "<b>Cross-Site Scripting (XSS)</b> risk at <b>Identity Provider</b>",
  synthetic_id: 'cross-site-scripting@identity-provider',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'identity-provider',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['identity-provider']
}, {
  category: 'cross-site-scripting',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'high',
  title: "<b>Cross-Site Scripting (XSS)</b> risk at <b>Marketing CMS</b>",
  synthetic_id: 'cross-site-scripting@marketing-cms',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'marketing-cms',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'possible',
  data_breach_technical_assets: ['marketing-cms']
}, {
  category: 'cross-site-request-forgery',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'very-likely',
  exploitation_impact: 'low',
  title: "<b>Cross-Site Request Forgery (CSRF)</b> risk at <b>Apache Webserver</b> via <b>Web Application Traffic</b> from <b>Load Balancer</b>",
  synthetic_id: "cross-site-request-forgery@apache-webserver@load-balancer>web-application-traffic",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'apache-webserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "load-balancer>web-application-traffic",
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['apache-webserver']
}, {
  category: 'cross-site-request-forgery',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'very-likely',
  exploitation_impact: 'low',
  title: "<b>Cross-Site Request Forgery (CSRF)</b> risk at <b>Backoffice ERP System</b> via <b>ERP Internal Access</b> from <b>Backoffice Client</b>",
  synthetic_id: "cross-site-request-forgery@erp-system@backoffice-client>erp-internal-access",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "backoffice-client>erp-internal-access",
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['erp-system']
}, {
  category: 'cross-site-request-forgery',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'very-likely',
  exploitation_impact: 'low',
  title: "<b>Cross-Site Request Forgery (CSRF)</b> risk at <b>Backoffice ERP System</b> via <b>ERP System Traffic</b> from <b>Apache Webserver</b>",
  synthetic_id: "cross-site-request-forgery@erp-system@apache-webserver>erp-system-traffic",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "apache-webserver>erp-system-traffic",
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['erp-system']
}, {
  category: 'cross-site-request-forgery',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'very-likely',
  exploitation_impact: 'low',
  title: "<b>Cross-Site Request Forgery (CSRF)</b> risk at <b>Identity Provider</b> via <b>Auth Credential Check Traffic</b> from <b>Apache Webserver</b>",
  synthetic_id: "cross-site-request-forgery@identity-provider@apache-webserver>auth-credential-check-traffic",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'identity-provider',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "apache-webserver>auth-credential-check-traffic",
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['identity-provider']
}, {
  category: 'cross-site-request-forgery',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'very-likely',
  exploitation_impact: 'low',
  title: "<b>Cross-Site Request Forgery (CSRF)</b> risk at <b>Marketing CMS</b> via <b>CMS Content Traffic</b> from <b>Load Balancer</b>",
  synthetic_id: "cross-site-request-forgery@marketing-cms@load-balancer>cms-content-traffic",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'marketing-cms',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "load-balancer>cms-content-traffic",
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['marketing-cms']
}, {
  category: 'cross-site-request-forgery',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'very-likely',
  exploitation_impact: 'low',
  title: "<b>Cross-Site Request Forgery (CSRF)</b> risk at <b>Marketing CMS</b> via <b>Marketing CMS Editing</b> from <b>Backoffice Client</b>",
  synthetic_id: "cross-site-request-forgery@marketing-cms@backoffice-client>marketing-cms-editing",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'marketing-cms',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "backoffice-client>marketing-cms-editing",
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['marketing-cms']
}, {
  category: 'cross-site-request-forgery',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'low',
  title: "<b>Cross-Site Request Forgery (CSRF)</b> risk at <b>Backoffice ERP System</b> via <b>ERP Web Access</b> from <b>Backend Admin Client</b>",
  synthetic_id: "cross-site-request-forgery@erp-system@backend-admin-client>erp-web-access",
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: "backend-admin-client>erp-web-access",
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['erp-system']
}, {
  category: 'missing-network-segmentation',
  risk_status: 'unchecked',
  severity: 'low',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'low',
  title: "<b>Missing Network Segmentation</b> to further encapsulate and protect <b>Apache Webserver</b> against unrelated lower protected assets in the same network segment, which might be easier to compromise by attackers",
  synthetic_id: 'missing-network-segmentation@apache-webserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'apache-webserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['apache-webserver']
}, {
  category: 'missing-network-segmentation',
  risk_status: 'unchecked',
  severity: 'low',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'low',
  title: "<b>Missing Network Segmentation</b> to further encapsulate and protect <b>Jenkins Buildserver</b> against unrelated lower protected assets in the same network segment, which might be easier to compromise by attackers",
  synthetic_id: 'missing-network-segmentation@jenkins-buildserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'jenkins-buildserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['jenkins-buildserver']
}, {
  category: 'mixed-targets-on-shared-runtime',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Mixed Targets on Shared Runtime</b> named <b>WebApp and Backoffice Virtualization</b> might enable attackers moving from one less valuable target to a more valuable one",
  synthetic_id: 'mixed-targets-on-shared-runtime@webapp-virtualization',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: '',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: 'webapp-virtualization',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['apache-webserver', 'marketing-cms', 'erp-system', 'contract-fileserver', 'sql-database']
}, {
  category: 'missing-cloud-hardening',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'very-high',
  title: "<b>Missing Cloud Hardening (AWS)</b> risk at <b>Application Network</b>: <u>CIS Benchmark for AWS</u>",
  synthetic_id: 'missing-cloud-hardening@application-network',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: '',
  most_relevant_trust_boundary: 'application-network',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['load-balancer', 'apache-webserver', 'marketing-cms', 'erp-system', 'contract-fileserver', 'sql-database', 'identity-provider', 'ldap-auth-server']
}, {
  category: 'missing-cloud-hardening',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'very-high',
  title: "<b>Missing Cloud Hardening (EC2)</b> risk at <b>Apache Webserver</b>: <u>CIS Benchmark for Amazon Linux</u>",
  synthetic_id: 'missing-cloud-hardening@apache-webserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'apache-webserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['apache-webserver']
}, {
  category: 'missing-cloud-hardening',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'very-high',
  title: "<b>Missing Cloud Hardening</b> risk at <b>ERP DMZ</b>",
  synthetic_id: 'missing-cloud-hardening@erp-dmz',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: '',
  most_relevant_trust_boundary: 'erp-dmz',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['erp-system', 'contract-fileserver', 'sql-database']
}, {
  category: 'missing-cloud-hardening',
  risk_status: 'unchecked',
  severity: 'elevated',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'very-high',
  title: "<b>Missing Cloud Hardening</b> risk at <b>Web DMZ</b>",
  synthetic_id: 'missing-cloud-hardening@web-dmz',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: '',
  most_relevant_trust_boundary: 'web-dmz',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['apache-webserver', 'marketing-cms']
}, {
  category: 'missing-cloud-hardening',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'high',
  title: "<b>Missing Cloud Hardening (S3)</b> risk at <b>Contract Fileserver</b>: <u>Security Best Practices for AWS S3</u>",
  synthetic_id: 'missing-cloud-hardening@contract-fileserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'contract-fileserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['contract-fileserver']
}, {
  category: 'something-strange',
  risk_status: 'unchecked',
  severity: 'critical',
  exploitation_likelihood: 'likely',
  exploitation_impact: 'medium',
  title: "<b>Example Individual Risk</b> at <b>Database</b>",
  synthetic_id: 'something-strange@sql-database',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'sql-database',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'probable',
  data_breach_technical_assets: ['sql-database']
}, {
  category: 'something-strange',
  risk_status: 'unchecked',
  severity: 'medium',
  exploitation_likelihood: 'frequent',
  exploitation_impact: 'very-high',
  title: "<b>Example Individual Risk</b> at <b>Contract Filesystem</b>",
  synthetic_id: 'something-strange@contract-fileserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'contract-fileserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: null
}, {
  category: 'unencrypted-asset',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'high',
  title: "<b>Unencrypted Technical Asset</b> named <b>Apache Webserver</b>",
  synthetic_id: 'unencrypted-asset@apache-webserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'apache-webserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['apache-webserver']
}, {
  category: 'unencrypted-asset',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'high',
  title: "<b>Unencrypted Technical Asset</b> named <b>Backoffice ERP System</b> missing enduser-individual encryption with data-with-enduser-individual-key",
  synthetic_id: 'unencrypted-asset@erp-system',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'erp-system',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['erp-system']
}, {
  category: 'unencrypted-asset',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'high',
  title: "<b>Unencrypted Technical Asset</b> named <b>Git Repository</b>",
  synthetic_id: 'unencrypted-asset@git-repo',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'git-repo',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['git-repo']
}, {
  category: 'unencrypted-asset',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'high',
  title: "<b>Unencrypted Technical Asset</b> named <b>Identity Provider</b>",
  synthetic_id: 'unencrypted-asset@identity-provider',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'identity-provider',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['identity-provider']
}, {
  category: 'unencrypted-asset',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'high',
  title: "<b>Unencrypted Technical Asset</b> named <b>Jenkins Buildserver</b>",
  synthetic_id: 'unencrypted-asset@jenkins-buildserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'jenkins-buildserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['jenkins-buildserver']
}, {
  category: 'unencrypted-asset',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'high',
  title: "<b>Unencrypted Technical Asset</b> named <b>Marketing CMS</b>",
  synthetic_id: 'unencrypted-asset@marketing-cms',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'marketing-cms',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['marketing-cms']
}, {
  category: 'unencrypted-asset',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Unencrypted Technical Asset</b> named <b>Contract Fileserver</b>",
  synthetic_id: 'unencrypted-asset@contract-fileserver',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'contract-fileserver',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['contract-fileserver']
}, {
  category: 'unencrypted-asset',
  risk_status: 'mitigated',
  severity: 'medium',
  exploitation_likelihood: 'unlikely',
  exploitation_impact: 'medium',
  title: "<b>Unencrypted Technical Asset</b> named <b>Customer Contract Database</b> missing enduser-individual encryption with data-with-enduser-individual-key",
  synthetic_id: 'unencrypted-asset@sql-database',
  most_relevant_data_asset: '',
  most_relevant_technical_asset: 'sql-database',
  most_relevant_trust_boundary: '',
  most_relevant_shared_runtime: '',
  most_relevant_communication_link: '',
  data_breach_probability: 'improbable',
  data_breach_technical_assets: ['sql-database']
}];
function Layout(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "min-h-screen"
  }, props.showHome && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.showDashboard && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    risksJson: risksJson
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./components/NoMatch.tsx":
/*!********************************!*\
  !*** ./components/NoMatch.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function NoMatch() {
  return /*#__PURE__*/React.createElement("div", {
    className: "NoMatch"
  }, "No Match Found");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoMatch);

/***/ }),

/***/ "./components/index.tsx":
/*!******************************!*\
  !*** ./components/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _App_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.tsx */ "./components/App.tsx");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportWebVitals */ "./components/reportWebVitals.js");





var rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(rootElement);
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], null))));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0,_reportWebVitals__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ }),

/***/ "./components/reportWebVitals.js":
/*!***************************************!*\
  !*** ./components/reportWebVitals.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ "vendors").then(__webpack_require__.bind(__webpack_require__, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(function (_ref) {
      var getCLS = _ref.getCLS,
        getFID = _ref.getFID,
        getFCP = _ref.getFCP,
        getLCP = _ref.getLCP,
        getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportWebVitals);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkthreagile_monitoring"] = self["webpackChunkthreagile_monitoring"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./components/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NzgwNGI0MDdjZDlkZWEzNWE5ZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbmdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3p2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUVoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVhZ2lsZS1tb25pdG9yaW5nLy4vY29tcG9uZW50cy9BcHAudHN4Iiwid2VicGFjazovL3RocmVhZ2lsZS1tb25pdG9yaW5nLy4vY29tcG9uZW50cy9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGhyZWFnaWxlLW1vbml0b3JpbmcvLi9jb21wb25lbnRzL0ZlYXR1cmVzLnRzeCIsIndlYnBhY2s6Ly90aHJlYWdpbGUtbW9uaXRvcmluZy8uL2NvbXBvbmVudHMvSGVyby50c3giLCJ3ZWJwYWNrOi8vdGhyZWFnaWxlLW1vbml0b3JpbmcvLi9jb21wb25lbnRzL0hvbWUudHN4Iiwid2VicGFjazovL3RocmVhZ2lsZS1tb25pdG9yaW5nLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Iiwid2VicGFjazovL3RocmVhZ2lsZS1tb25pdG9yaW5nLy4vY29tcG9uZW50cy9Ob01hdGNoLnRzeCIsIndlYnBhY2s6Ly90aHJlYWdpbGUtbW9uaXRvcmluZy8uL2NvbXBvbmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovL3RocmVhZ2lsZS1tb25pdG9yaW5nLy4vY29tcG9uZW50cy9yZXBvcnRXZWJWaXRhbHMuanMiLCJ3ZWJwYWNrOi8vdGhyZWFnaWxlLW1vbml0b3Jpbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhyZWFnaWxlLW1vbml0b3Jpbmcvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90aHJlYWdpbGUtbW9uaXRvcmluZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aHJlYWdpbGUtbW9uaXRvcmluZy93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aHJlYWdpbGUtbW9uaXRvcmluZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhyZWFnaWxlLW1vbml0b3Jpbmcvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly90aHJlYWdpbGUtbW9uaXRvcmluZy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RocmVhZ2lsZS1tb25pdG9yaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhyZWFnaWxlLW1vbml0b3Jpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aHJlYWdpbGUtbW9uaXRvcmluZy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3RocmVhZ2lsZS1tb25pdG9yaW5nL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RocmVhZ2lsZS1tb25pdG9yaW5nL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGhyZWFnaWxlLW1vbml0b3Jpbmcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RocmVhZ2lsZS1tb25pdG9yaW5nL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==