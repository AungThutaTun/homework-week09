const obj = {foo:'hello'};
Objetc.freeze(obj);

obj.foo = 'goodbye';
console.log(obj.foo); // hello