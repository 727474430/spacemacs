// 测试Set方法
var set = new Set();

// map
[1, 2, 3, 4 ,5].map(x => set.add(x));
set.forEach(x => console.log(x));

console.log(set.has(4));
console.log(set.has(3));

// 去重
let arr = [1, 1, 2 ,2 , 3, 3];

function dedupe (array) {
    return Array.from(new Set(array));
}

console.log(dedupe(arr));



// Map 相关
var map = new Map();
map.set('name', 'lack');
map.set('age', 24);

for (let [key, value] of map) {
    console.log(`key: ${key} , value: ${value}`);
}

function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();
for (let h of hw) {
    console.log(h);
}
function* foo() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
	return 6;
}

for( let v of foo()) {
	console.log(v);
}


var ss = new Set([1, 2, 3, 4, 5, 6]);
for (let s of ss) {
    console.log(s);
}

var arrs = ['a', 'b', 'c'];
for (let a of arrs) {
    console.log(a);
}


var array = [1,2,3,'a','b'];
for( var a in array) {
	console.log(a);
}
for( var a of array) {
	console.log(a);
}


var fibonacci = {
    [Symbol.iterator]: function*() {
        var pre = 0, cur = 1;
        for (;;) {
            var temp = pre;
            pre = cur;
            cur += temp;
            yield cur;
        }
    }
};

var array = ['a', 'b', 'c', 'd'];
for (let ar of array) {
    console.log(ar);
}
