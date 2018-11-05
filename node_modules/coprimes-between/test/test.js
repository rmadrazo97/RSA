var test = require("tape");
var coprimesBetween = require(__dirname + "/..");

test("coprimesBetween(2, 10, 15) must equals to [2, 4, 7, 8]", function(t) {
	t.same(coprimesBetween(2, 10, 15), [2, 4, 7, 8]);
	t.end();
});

test("coprimesBetween(2, 10, 15) must not equals to [2, 4, 7, 8, 11]", function(t) {
	t.notSame(coprimesBetween(2, 10, 15), [2, 4, 7, 8, 11]);
	t.end();
});

test("coprimesBetween(5, 14, 3) must equals to [5, 7, 8, 10, 11, 13, 14]", function(t) {
	t.same(coprimesBetween(5, 14, 3), [5, 7, 8, 10, 11, 13, 14]);
	t.end();
});

test("coprimesBetween(5, 14, 2) must equals to [5, 7, 9, 11, 13]", function(t) {
	t.same(coprimesBetween(5, 14, 2), [5, 7, 9, 11, 13]);
	t.end();
});

test("coprimesBetween(14, 5, 2) must equals to [5, 7, 9, 11, 13]", function(t) {
	t.same(coprimesBetween(14, 5, 2), [5, 7, 9, 11, 13]);
	t.end();
});

test("coprimesBetween(5, 5, 10) must equals to []", function(t) {
	t.same(coprimesBetween(5, 5, 10), []);
	t.end();
});

test("coprimesBetween(5, 5, 7) must equals to [5]", function(t) {
	t.same(coprimesBetween(5, 5, 7), [5]);
	t.end();
});

test("coprimesBetween(10, 5, 8) must equals to [5, 7, 9]", function(t) {
	t.same(coprimesBetween(10, 5, 8), [5, 7, 9]);
	t.end();
});