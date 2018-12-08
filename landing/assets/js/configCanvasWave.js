'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function Point(i) {
    _classCallCheck(this, Point);

    this.i = i;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
};

var canvas = document.getElementById('canvas-wave');
var ctx = canvas.getContext('2d');
var width = canvas.offsetWidth;
var height = canvas.offsetHeight;
canvas.width = width;
canvas.height = height;
canvas.onclick = init;

var points = [];
var frame = 0,
    running = true;
for (var i = 0; i < 32; i++) {
    points.push(new Point(i));
}var first = points[0],
    last = points[points.length - 1];
ctx.globalCompositeOperation = "lighter";

function init() {
    ctx.clearRect(0, 0, width, height);
    frame = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var p = _step.value;

            p.x = p.i * (width / 10);
            p.y = 0.25 * height * (Math.random() - Math.random());
            p.vx = 0;
            p.vy = 0;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (!running) {
        running = true;
        run();
    }
}

function transform() {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = points[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var p = _step2.value;

            p.vx += 0.1 * (Math.random() - Math.random());
            p.vy += 0.2 * (Math.random() - Math.random());
            p.x += p.vx;
            p.y += p.vy;
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
}

function drawLine() {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(128, 64, 0, 0.25)";

    ctx.moveTo(first.x, height * 0.5 + (last.y + first.y) / 2);
    for (var _i = 1; _i < points.length - 1; _i++) {
        var p0 = points[_i],
            p1 = points[_i + 1];
        ctx.quadraticCurveTo(p0.x, height * 0.5 + p0.y, (p0.x + p1.x) / 2, height * 0.5 + (p0.y + p1.y) / 2);
    }
    ctx.quadraticCurveTo(last.x, last.y, last.x, (last.y + first.y) / 2);
    ctx.stroke();
}

init();

function run() {
    if (frame++ < 500) requestAnimationFrame(run);else running = false;
    drawLine();
    transform();
}
run();