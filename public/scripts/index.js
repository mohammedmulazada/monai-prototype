(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphy = void 0;

var graphy = function graphy(graph, barN, newValue) {
  var graphY = graph.querySelector('.graph__y');
  var graphBars = graph.querySelector('.graph__bars');
  var minVal = Number(graphY.getAttribute('data-min'));
  var maxVal = Number(graphY.getAttribute('data-max'));
  var stepVal = Number(graphY.getAttribute('data-step'));

  for (var i = 0; i < maxVal / stepVal + 1; i++) {
    var newDiv = document.createElement('div');
    newDiv.classList.add('grid__value');
    newDiv.textContent = "\u20AC".concat(i * stepVal);
    newDiv.setAttribute('style', "height:".concat(stepVal / maxVal * 200, "px"));
    graphY.appendChild(newDiv);
  }

  for (var _i = 0; _i < 7; _i++) {
    var newBar = document.createElement('div');

    if (_i == 0) {
      var progress = document.createElement('div');
      progress.classList.add('bar__progress');
      newBar.appendChild(progress);
    } else {
      newBar.setAttribute('style', "height:".concat(Math.floor(Math.random() * 5) * 40, "px"));
    }

    newBar.classList.add('bars__bar');
    graphBars.appendChild(newBar);
  }
};

exports.graphy = graphy;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spendable = void 0;

var spendable = function spendable(el, total, newVal, floatVal) {
  var ratio = newVal / total;
  var floatRatio = floatVal / total;
  var bAmount = el.querySelector('.ball__amount');
  var bProgress = el.querySelector('.ball__progress');
  var sFloat = el.querySelector('.spendable__float'); // const bBall = el.querySelector( '.spendable__ball' )

  bAmount.innerHTML = "\u20AC".concat(newVal);
  bProgress.setAttribute('style', "height:".concat(ratio * 100, "%;"));
  sFloat.setAttribute('style', "transform:translateX(calc(1rem + 100%)) translateY(".concat((1 - floatRatio) * 120
  /* should be bBall.clientHeight */
  , "px)")); // Voor whatever reason leest het de height van bBall verkeerd uit
};

exports.spendable = spendable;

},{}],3:[function(require,module,exports){
"use strict";

var _spendable = require("./components/spendable/spendable.js");

var _graphy = require("./components/graphy/graphy.js");

(0, _spendable.spendable)(document.querySelector('.spendables .spendable:last-of-type'), 1033, 500, 350);
(0, _graphy.graphy)(document.querySelector('.graph'));
setInterval(function () {
  (0, _spendable.spendable)(document.querySelector('.spendables .spendable:last-of-type'), 1033, Math.floor(Math.random() * 1033), Math.floor(Math.random() * 350));
}, 1000);

},{"./components/graphy/graphy.js":1,"./components/spendable/spendable.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvdmlld3MvY29tcG9uZW50cy9ncmFwaHkvZ3JhcGh5LmpzIiwiYXBwL3ZpZXdzL2NvbXBvbmVudHMvc3BlbmRhYmxlL3NwZW5kYWJsZS5qcyIsImFwcC92aWV3cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQSxJQUFNLE1BQU0sR0FBRyxTQUFULE1BQVMsQ0FBRSxLQUFGLEVBQVEsSUFBUixFQUFhLFFBQWIsRUFBeUI7QUFDdkMsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLGFBQU4sQ0FBcUIsV0FBckIsQ0FBZjtBQUNBLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxhQUFOLENBQXFCLGNBQXJCLENBQWxCO0FBQ0EsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFFLE1BQU0sQ0FBQyxZQUFQLENBQXFCLFVBQXJCLENBQUYsQ0FBckI7QUFDQSxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUUsTUFBTSxDQUFDLFlBQVAsQ0FBcUIsVUFBckIsQ0FBRixDQUFyQjtBQUNBLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBRSxNQUFNLENBQUMsWUFBUCxDQUFxQixXQUFyQixDQUFGLENBQXRCOztBQUVBLE9BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBZCxFQUFpQixDQUFDLEdBQUssTUFBTSxHQUFDLE9BQVQsR0FBbUIsQ0FBeEMsRUFBMkMsQ0FBQyxFQUE1QyxFQUFpRDtBQUNoRCxRQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF3QixLQUF4QixDQUFmO0FBRUEsSUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixHQUFqQixDQUFzQixhQUF0QjtBQUNBLElBQUEsTUFBTSxDQUFDLFdBQVAsbUJBQXlCLENBQUMsR0FBQyxPQUEzQjtBQUNBLElBQUEsTUFBTSxDQUFDLFlBQVAsQ0FBcUIsT0FBckIsbUJBQXlDLE9BQU8sR0FBQyxNQUFWLEdBQW1CLEdBQTFEO0FBQ0EsSUFBQSxNQUFNLENBQUMsV0FBUCxDQUFvQixNQUFwQjtBQUNBOztBQUVELE9BQU0sSUFBSSxFQUFDLEdBQUcsQ0FBZCxFQUFpQixFQUFDLEdBQUcsQ0FBckIsRUFBd0IsRUFBQyxFQUF6QixFQUE4QjtBQUM3QixRQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF3QixLQUF4QixDQUFmOztBQUVBLFFBQUksRUFBQyxJQUFFLENBQVAsRUFBVTtBQUNULFVBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXdCLEtBQXhCLENBQWpCO0FBRUEsTUFBQSxRQUFRLENBQUMsU0FBVCxDQUFtQixHQUFuQixDQUF3QixlQUF4QjtBQUNBLE1BQUEsTUFBTSxDQUFDLFdBQVAsQ0FBb0IsUUFBcEI7QUFDQSxLQUxELE1BS007QUFDTCxNQUFBLE1BQU0sQ0FBQyxZQUFQLENBQXFCLE9BQXJCLG1CQUF5QyxJQUFJLENBQUMsS0FBTCxDQUFZLElBQUksQ0FBQyxNQUFMLEtBQWMsQ0FBMUIsQ0FBRixHQUFrQyxFQUF6RTtBQUNBOztBQUVELElBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsR0FBakIsQ0FBc0IsV0FBdEI7QUFFQSxJQUFBLFNBQVMsQ0FBQyxXQUFWLENBQXVCLE1BQXZCO0FBQ0E7QUFDRCxDQWhDRDs7Ozs7Ozs7Ozs7O0FDQUEsSUFDQyxTQUFTLEdBQUcsU0FBWixTQUFZLENBQUUsRUFBRixFQUFLLEtBQUwsRUFBVyxNQUFYLEVBQWtCLFFBQWxCLEVBQThCO0FBQ3pDLE1BQU0sS0FBSyxHQUFHLE1BQU0sR0FBQyxLQUFyQjtBQUNBLE1BQU0sVUFBVSxHQUFHLFFBQVEsR0FBQyxLQUE1QjtBQUNBLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxhQUFILENBQWtCLGVBQWxCLENBQWhCO0FBQ0EsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLGFBQUgsQ0FBa0IsaUJBQWxCLENBQWxCO0FBQ0EsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLGFBQUgsQ0FBa0IsbUJBQWxCLENBQWYsQ0FMeUMsQ0FNekM7O0FBRUEsRUFBQSxPQUFPLENBQUMsU0FBUixtQkFBd0IsTUFBeEI7QUFDQSxFQUFBLFNBQVMsQ0FBQyxZQUFWLENBQXdCLE9BQXhCLG1CQUEwQyxLQUFLLEdBQUMsR0FBaEQ7QUFDQSxFQUFBLE1BQU0sQ0FBQyxZQUFQLENBQXFCLE9BQXJCLCtEQUFtRixDQUFFLElBQUUsVUFBSixJQUFpQjtBQUFHO0FBQXZHLFlBVnlDLENBV3pDO0FBQ0EsQ0FiRjs7Ozs7OztBQ0FBOztBQUNBOztBQUNBLDBCQUFXLFFBQVEsQ0FBQyxhQUFULENBQXdCLHFDQUF4QixDQUFYLEVBQTJFLElBQTNFLEVBQWdGLEdBQWhGLEVBQW9GLEdBQXBGO0FBQ0Esb0JBQVEsUUFBUSxDQUFDLGFBQVQsQ0FBd0IsUUFBeEIsQ0FBUjtBQUVBLFdBQVcsQ0FDVixZQUFJO0FBQ0gsNEJBQVcsUUFBUSxDQUFDLGFBQVQsQ0FBd0IscUNBQXhCLENBQVgsRUFBMkUsSUFBM0UsRUFBZ0YsSUFBSSxDQUFDLEtBQUwsQ0FBWSxJQUFJLENBQUMsTUFBTCxLQUFjLElBQTFCLENBQWhGLEVBQWlILElBQUksQ0FBQyxLQUFMLENBQVksSUFBSSxDQUFDLE1BQUwsS0FBYyxHQUExQixDQUFqSDtBQUNBLENBSFMsRUFJVCxJQUpTLENBQVgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBncmFwaHkgPSAoIGdyYXBoLGJhck4sbmV3VmFsdWUgKT0+e1xuXHRjb25zdCBncmFwaFkgPSBncmFwaC5xdWVyeVNlbGVjdG9yKCAnLmdyYXBoX195JyApXG5cdGNvbnN0IGdyYXBoQmFycyA9IGdyYXBoLnF1ZXJ5U2VsZWN0b3IoICcuZ3JhcGhfX2JhcnMnIClcblx0Y29uc3QgbWluVmFsID0gTnVtYmVyKCBncmFwaFkuZ2V0QXR0cmlidXRlKCAnZGF0YS1taW4nICkgKVxuXHRjb25zdCBtYXhWYWwgPSBOdW1iZXIoIGdyYXBoWS5nZXRBdHRyaWJ1dGUoICdkYXRhLW1heCcgKSApXG5cdGNvbnN0IHN0ZXBWYWwgPSBOdW1iZXIoIGdyYXBoWS5nZXRBdHRyaWJ1dGUoICdkYXRhLXN0ZXAnICkgKVxuICAgIFxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgPCAoIG1heFZhbC9zdGVwVmFsICkrMTsgaSsrICkge1xuXHRcdGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnIClcblxuXHRcdG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCAnZ3JpZF9fdmFsdWUnIClcblx0XHRuZXdEaXYudGV4dENvbnRlbnQgPSBg4oKsJHtpKnN0ZXBWYWx9YFxuXHRcdG5ld0Rpdi5zZXRBdHRyaWJ1dGUoICdzdHlsZScsYGhlaWdodDokeyggc3RlcFZhbC9tYXhWYWwgKSoyMDB9cHhgICkgICBcblx0XHRncmFwaFkuYXBwZW5kQ2hpbGQoIG5ld0RpdiApXG5cdH1cbiAgICBcblx0Zm9yICggbGV0IGkgPSAwOyBpIDwgNzsgaSsrICkge1xuXHRcdGNvbnN0IG5ld0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnIClcblxuXHRcdGlmKCBpPT0wICl7XG5cdFx0XHRjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnIClcbiAgICAgICAgICAgIFxuXHRcdFx0cHJvZ3Jlc3MuY2xhc3NMaXN0LmFkZCggJ2Jhcl9fcHJvZ3Jlc3MnIClcblx0XHRcdG5ld0Jhci5hcHBlbmRDaGlsZCggcHJvZ3Jlc3MgKVxuXHRcdH0gZWxzZXtcblx0XHRcdG5ld0Jhci5zZXRBdHRyaWJ1dGUoICdzdHlsZScsYGhlaWdodDokeyggTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSo1ICkgKSo0MH1weGAgKVxuXHRcdH1cbiAgICAgICAgXG5cdFx0bmV3QmFyLmNsYXNzTGlzdC5hZGQoICdiYXJzX19iYXInIClcblxuXHRcdGdyYXBoQmFycy5hcHBlbmRDaGlsZCggbmV3QmFyIClcblx0fVxufVxuXG5leHBvcnQge2dyYXBoeX0iLCJjb25zdFxuXHRzcGVuZGFibGUgPSAoIGVsLHRvdGFsLG5ld1ZhbCxmbG9hdFZhbCApPT57XG5cdFx0Y29uc3QgcmF0aW8gPSBuZXdWYWwvdG90YWxcblx0XHRjb25zdCBmbG9hdFJhdGlvID0gZmxvYXRWYWwvdG90YWxcblx0XHRjb25zdCBiQW1vdW50ID0gZWwucXVlcnlTZWxlY3RvciggJy5iYWxsX19hbW91bnQnIClcblx0XHRjb25zdCBiUHJvZ3Jlc3MgPSBlbC5xdWVyeVNlbGVjdG9yKCAnLmJhbGxfX3Byb2dyZXNzJyApXG5cdFx0Y29uc3Qgc0Zsb2F0ID0gZWwucXVlcnlTZWxlY3RvciggJy5zcGVuZGFibGVfX2Zsb2F0JyApXG5cdFx0Ly8gY29uc3QgYkJhbGwgPSBlbC5xdWVyeVNlbGVjdG9yKCAnLnNwZW5kYWJsZV9fYmFsbCcgKVxuXG5cdFx0YkFtb3VudC5pbm5lckhUTUwgPSBg4oKsJHtuZXdWYWx9YFxuXHRcdGJQcm9ncmVzcy5zZXRBdHRyaWJ1dGUoICdzdHlsZScsYGhlaWdodDoke3JhdGlvKjEwMH0lO2AgKVxuXHRcdHNGbG9hdC5zZXRBdHRyaWJ1dGUoICdzdHlsZScsYHRyYW5zZm9ybTp0cmFuc2xhdGVYKGNhbGMoMXJlbSArIDEwMCUpKSB0cmFuc2xhdGVZKCR7KCAxLWZsb2F0UmF0aW8gKSoxMjAvKiBzaG91bGQgYmUgYkJhbGwuY2xpZW50SGVpZ2h0ICovfXB4KWAgKVxuXHRcdC8vIFZvb3Igd2hhdGV2ZXIgcmVhc29uIGxlZXN0IGhldCBkZSBoZWlnaHQgdmFuIGJCYWxsIHZlcmtlZXJkIHVpdFxuXHR9XG5cbmV4cG9ydCB7c3BlbmRhYmxlfSIsImltcG9ydCB7IHNwZW5kYWJsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zcGVuZGFibGUvc3BlbmRhYmxlLmpzJ1xuaW1wb3J0IHsgZ3JhcGh5IH0gZnJvbSAnLi9jb21wb25lbnRzL2dyYXBoeS9ncmFwaHkuanMnXG5zcGVuZGFibGUoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3BlbmRhYmxlcyAuc3BlbmRhYmxlOmxhc3Qtb2YtdHlwZScgKSwxMDMzLDUwMCwzNTAgKVxuZ3JhcGh5KCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmdyYXBoJyApIClcblxuc2V0SW50ZXJ2YWwoXG5cdCgpPT57XG5cdFx0c3BlbmRhYmxlKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnNwZW5kYWJsZXMgLnNwZW5kYWJsZTpsYXN0LW9mLXR5cGUnICksMTAzMyxNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpKjEwMzMgKSxNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpKjM1MCApIClcblx0fVxuXHQsMTAwMFxuKSJdfQ==
