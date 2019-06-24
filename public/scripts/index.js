(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBar = exports.graphy = void 0;

var graphy = function graphy(graph) {
  var graphY = graph.querySelector('.graph__y');
  var graphBars = graph.querySelector('.graph__bars'); // const minVal = Number( graphY.getAttribute( 'data-min' ) )

  var maxVal = Number(graphY.getAttribute('data-max'));
  var stepVal = Number(graphY.getAttribute('data-step')); // Generate grid

  for (var i = 0; i < maxVal / stepVal + 1; i++) {
    var newDiv = document.createElement('div');
    newDiv.classList.add('grid__value');
    newDiv.textContent = "\u20AC".concat(i * stepVal);
    newDiv.setAttribute('style', "height:".concat(stepVal / maxVal * 200, "px"));
    graphY.appendChild(newDiv);
  }

  for (var _i = 0; _i < 7; _i++) {
    var newBar = document.createElement('div');

    if (_i === 0) {
      var progress = document.createElement('div');
      progress.classList.add('bar__progress');
      newBar.appendChild(progress);
    }

    newBar.setAttribute('style', "height:".concat(40 * (_i < 4 ? 3 : 5), "px"));
    newBar.classList.add('bars__bar');
    graphBars.appendChild(newBar);
  }
};

exports.graphy = graphy;

var updateBar = function updateBar(n, step, progValue) {
  var graph = document.querySelector('.graph');
  var graphBars = graph.querySelector('.graph__bars');
  var bars = graphBars.querySelectorAll('.bars__bar');
  bars[n].setAttribute('style', "height:".concat(step * 40, "px"));

  if (progValue) {
    bars[n].querySelector('.bar__progress').setAttribute('style', "height:".concat(progValue + 40, "px;"));
  }
};

exports.updateBar = updateBar;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spendable = void 0;

var spendable = function spendable(el, total, newVal, floatVal) {
  var ratio = newVal / total;
  var bAmount = el.querySelector('.ball__amount');
  var bProgress = el.querySelector('.ball__progress');
  var sFloat = el.querySelector('.spendable__float'); // const bBall = el.querySelector( '.spendable__ball' )

  if (sFloat) {
    var floatRatio = floatVal / total;
    sFloat.setAttribute('style', "transform:translateX(calc(1rem + 100%)) translateY(".concat((1 - floatRatio) * 120
    /* should be bBall.clientHeight */
    , "px)"));
  }

  bAmount.innerHTML = "\u20AC".concat(newVal);
  bProgress.setAttribute('style', "height:".concat(ratio * 100, "%;")); // Voor whatever reason leest het de height van bBall verkeerd uit
};

exports.spendable = spendable;

},{}],3:[function(require,module,exports){
"use strict";

var _spendable = require("./components/spendable/spendable.js");

var _graphy = require("./components/graphy/graphy.js");

(0, _spendable.spendable)(document.querySelector('.spendables .spendable:last-of-type'), 1033, 500, 350);
(0, _graphy.graphy)(document.querySelector('.graph'));
var ball_1 = document.querySelector('.spendables .spendable:first-of-type');
var ball_2 = document.querySelector('.spendables .spendable:last-of-type');
(0, _spendable.spendable)(ball_1, 1000, 500); // Element,Total Value,New Value,Float value (not required)

(0, _spendable.spendable)(ball_2, 1500, 1500, 300);
setTimeout(function () {
  (0, _spendable.spendable)(ball_2, 1500, 1000, 300);
  (0, _spendable.spendable)(ball_1, 1000, 450);
  (0, _graphy.updateBar)(5, 2);
}, 2000);
setTimeout(function () {
  (0, _graphy.updateBar)(0, 3, 2);
}, 5000);

},{"./components/graphy/graphy.js":1,"./components/spendable/spendable.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvdmlld3MvY29tcG9uZW50cy9ncmFwaHkvZ3JhcGh5LmpzIiwiYXBwL3ZpZXdzL2NvbXBvbmVudHMvc3BlbmRhYmxlL3NwZW5kYWJsZS5qcyIsImFwcC92aWV3cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQSxJQUFNLE1BQU0sR0FBRyxTQUFULE1BQVMsQ0FBQSxLQUFLLEVBQUU7QUFDckIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLGFBQU4sQ0FBcUIsV0FBckIsQ0FBZjtBQUNBLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxhQUFOLENBQXFCLGNBQXJCLENBQWxCLENBRnFCLENBR3JCOztBQUNBLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBRSxNQUFNLENBQUMsWUFBUCxDQUFxQixVQUFyQixDQUFGLENBQXJCO0FBQ0EsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFFLE1BQU0sQ0FBQyxZQUFQLENBQXFCLFdBQXJCLENBQUYsQ0FBdEIsQ0FMcUIsQ0FPckI7O0FBQ0EsT0FBTSxJQUFJLENBQUMsR0FBRyxDQUFkLEVBQWlCLENBQUMsR0FBSyxNQUFNLEdBQUMsT0FBVCxHQUFtQixDQUF4QyxFQUEyQyxDQUFDLEVBQTVDLEVBQWlEO0FBQ2hELFFBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXdCLEtBQXhCLENBQWY7QUFFQSxJQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLEdBQWpCLENBQXNCLGFBQXRCO0FBQ0EsSUFBQSxNQUFNLENBQUMsV0FBUCxtQkFBeUIsQ0FBQyxHQUFDLE9BQTNCO0FBQ0EsSUFBQSxNQUFNLENBQUMsWUFBUCxDQUFxQixPQUFyQixtQkFBeUMsT0FBTyxHQUFDLE1BQVYsR0FBbUIsR0FBMUQ7QUFDQSxJQUFBLE1BQU0sQ0FBQyxXQUFQLENBQW9CLE1BQXBCO0FBQ0E7O0FBRUQsT0FBTSxJQUFJLEVBQUMs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RUFBdUIsSUFBdkIsRUFBNEIsR0FBNUI7QUFFQSxVQUFVLENBQ1QsWUFBSTtBQUNILDRCQUFXLE1BQVgsRUFBa0IsSUFBbEIsRUFBdUIsSUFBdkIsRUFBNEIsR0FBNUI7QUFDQSw0QkFBVyxNQUFYLEVBQWtCLElBQWxCLEVBQXVCLEdBQXZCO0FBQ0EseUJBQVcsQ0FBWCxFQUFhLENBQWI7QUFDQSxDQUxRLEVBTVQsSUFOUyxDQUFWO0FBU0EsVUFBVSxDQUNULFlBQUk7QUFDSCx5QkFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWY7QUFDQSxDQUhRLEVBSVQsSUFKUyxDQUFWIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgZ3JhcGh5ID0gZ3JhcGg9Pntcblx0Y29uc3QgZ3JhcGhZID0gZ3JhcGgucXVlcnlTZWxlY3RvciggJy5ncmFwaF9feScgKVxuXHRjb25zdCBncmFwaEJhcnMgPSBncmFwaC5xdWVyeVNlbGVjdG9yKCAnLmdyYXBoX19iYXJzJyApXG5cdC8vIGNvbnN0IG1pblZhbCA9IE51bWJlciggZ3JhcGhZLmdldEF0dHJpYnV0ZSggJ2RhdGEtbWluJyApIClcblx0Y29uc3QgbWF4VmFsID0gTnVtYmVyKCBncmFwaFkuZ2V0QXR0cmlidXRlKCAnZGF0YS1tYXgnICkgKVxuXHRjb25zdCBzdGVwVmFsID0gTnVtYmVyKCBncmFwaFkuZ2V0QXR0cmlidXRlKCAnZGF0YS1zdGVwJyApIClcblx0XG5cdC8vIEdlbmVyYXRlIGdyaWRcblx0Zm9yICggbGV0IGkgPSAwOyBpIDwgKCBtYXhWYWwvc3RlcFZhbCApKzE7IGkrKyApIHtcblx0XHRjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApXG5cblx0XHRuZXdEaXYuY2xhc3NMaXN0LmFkZCggJ2dyaWRfX3ZhbHVlJyApXG5cdFx0bmV3RGl2LnRleHRDb250ZW50ID0gYOKCrCR7aSpzdGVwVmFsfWBcblx0XHRuZXdEaXYuc2V0QXR0cmlidXRlKCAnc3R5bGUnLGBoZWlnaHQ6JHsoIHN0ZXBWYWwvbWF4VmFsICkqMjAwfXB4YCApICAgXG5cdFx0Z3JhcGhZLmFwcGVuZENoaWxkKCBuZXdEaXYgKVxuXHR9XG4gICAgXG5cdGZvciAoIGxldCBpID0gMDsgaSA8IDc7IGkrKyApIHtcblx0XHRjb25zdCBuZXdCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApXG5cblx0XHRpZiggaT09PTAgKXtcblx0XHRcdGNvbnN0IHByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKVxuICAgICAgICAgICAgXG5cdFx0XHRwcm9ncmVzcy5jbGFzc0xpc3QuYWRkKCAnYmFyX19wcm9ncmVzcycgKVxuXHRcdFx0bmV3QmFyLmFwcGVuZENoaWxkKCBwcm9ncmVzcyApXG5cdFx0fSBcblxuXHRcdG5ld0Jhci5zZXRBdHRyaWJ1dGUoICdzdHlsZScsYGhlaWdodDokeyA0MCAqICggaSA8IDQgPyAzIDogNSApIH1weGAgKVxuICAgICAgICBcblx0XHRuZXdCYXIuY2xhc3NMaXN0LmFkZCggJ2JhcnNfX2JhcicgKVxuXG5cdFx0Z3JhcGhCYXJzLmFwcGVuZENoaWxkKCBuZXdCYXIgKVxuXHR9XG59XG5cbmNvbnN0IHVwZGF0ZUJhciA9ICggbixzdGVwLHByb2dWYWx1ZSApPT57XG5cdGNvbnN0IGdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5ncmFwaCcgKVxuXHRjb25zdCBncmFwaEJhcnMgPSBncmFwaC5xdWVyeVNlbGVjdG9yKCAnLmdyYXBoX19iYXJzJyApXG5cdGNvbnN0IGJhcnMgPSBncmFwaEJhcnMucXVlcnlTZWxlY3RvckFsbCggJy5iYXJzX19iYXInIClcblxuXHRiYXJzW25dLnNldEF0dHJpYnV0ZSggJ3N0eWxlJyxgaGVpZ2h0OiR7c3RlcCAqIDQwfXB4YCApXG5cdFxuXHRpZiggcHJvZ1ZhbHVlICl7XG5cdFx0YmFyc1tuXS5xdWVyeVNlbGVjdG9yKCAnLmJhcl9fcHJvZ3Jlc3MnICkuc2V0QXR0cmlidXRlKCAnc3R5bGUnLGBoZWlnaHQ6JHtwcm9nVmFsdWUgKyA0MH1weDtgIClcblx0fVxuXG59XHRcblxuZXhwb3J0IHsgZ3JhcGh5LHVwZGF0ZUJhciAgfSIsImNvbnN0XG5cdHNwZW5kYWJsZSA9ICggZWwsdG90YWwsbmV3VmFsLGZsb2F0VmFsICk9Pntcblx0XHRjb25zdCByYXRpbyA9IG5ld1ZhbC90b3RhbFxuXHRcdGNvbnN0IGJBbW91bnQgPSBlbC5xdWVyeVNlbGVjdG9yKCAnLmJhbGxfX2Ftb3VudCcgKVxuXHRcdGNvbnN0IGJQcm9ncmVzcyA9IGVsLnF1ZXJ5U2VsZWN0b3IoICcuYmFsbF9fcHJvZ3Jlc3MnIClcblx0XHRjb25zdCBzRmxvYXQgPSBlbC5xdWVyeVNlbGVjdG9yKCAnLnNwZW5kYWJsZV9fZmxvYXQnIClcblx0XHQvLyBjb25zdCBiQmFsbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoICcuc3BlbmRhYmxlX19iYWxsJyApXG5cdFx0aWYoIHNGbG9hdCApe1xuXHRcdFx0Y29uc3QgZmxvYXRSYXRpbyA9IGZsb2F0VmFsL3RvdGFsXG5cdFx0XHRzRmxvYXQuc2V0QXR0cmlidXRlKCAnc3R5bGUnLGB0cmFuc2Zvcm06dHJhbnNsYXRlWChjYWxjKDFyZW0gKyAxMDAlKSkgdHJhbnNsYXRlWSgkeyggMS1mbG9hdFJhdGlvICkqMTIwLyogc2hvdWxkIGJlIGJCYWxsLmNsaWVudEhlaWdodCAqL31weClgIClcblx0XHR9XG5cblx0XHRiQW1vdW50LmlubmVySFRNTCA9IGDigqwke25ld1ZhbH1gXG5cdFx0YlByb2dyZXNzLnNldEF0dHJpYnV0ZSggJ3N0eWxlJyxgaGVpZ2h0OiR7cmF0aW8qMTAwfSU7YCApXG5cdFx0Ly8gVm9vciB3aGF0ZXZlciByZWFzb24gbGVlc3QgaGV0IGRlIGhlaWdodCB2YW4gYkJhbGwgdmVya2VlcmQgdWl0XG5cdH1cblxuZXhwb3J0IHtzcGVuZGFibGV9IiwiaW1wb3J0IHsgc3BlbmRhYmxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NwZW5kYWJsZS9zcGVuZGFibGUuanMnXG5pbXBvcnQgeyBncmFwaHksdXBkYXRlQmFyIH0gZnJvbSAnLi9jb21wb25lbnRzL2dyYXBoeS9ncmFwaHkuanMnXG5zcGVuZGFibGUoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3BlbmRhYmxlcyAuc3BlbmRhYmxlOmxhc3Qtb2YtdHlwZScgKSwxMDMzLDUwMCwzNTAgKVxuZ3JhcGh5KCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmdyYXBoJyApIClcblxuY29uc3QgYmFsbF8xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zcGVuZGFibGVzIC5zcGVuZGFibGU6Zmlyc3Qtb2YtdHlwZScgKVxuY29uc3QgYmFsbF8yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zcGVuZGFibGVzIC5zcGVuZGFibGU6bGFzdC1vZi10eXBlJyApXG5cbnNwZW5kYWJsZSggYmFsbF8xLDEwMDAsNTAwICkgLy8gRWxlbWVudCxUb3RhbCBWYWx1ZSxOZXcgVmFsdWUsRmxvYXQgdmFsdWUgKG5vdCByZXF1aXJlZClcbnNwZW5kYWJsZSggYmFsbF8yLDE1MDAsMTUwMCwzMDAgKVxuXG5zZXRUaW1lb3V0KFxuXHQoKT0+e1xuXHRcdHNwZW5kYWJsZSggYmFsbF8yLDE1MDAsMTAwMCwzMDAgKVxuXHRcdHNwZW5kYWJsZSggYmFsbF8xLDEwMDAsNDUwIClcblx0XHR1cGRhdGVCYXIoIDUsMiApXG5cdH0sXG5cdDIwMDBcbilcblxuc2V0VGltZW91dChcblx0KCk9Pntcblx0XHR1cGRhdGVCYXIoIDAsMywyIClcblx0fSxcblx0NTAwMFxuKSJdfQ==
