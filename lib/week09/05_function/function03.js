const add = function(a, b) {
    return a + b;
}
setTimeout(function() {
    console.log('1s')
},1000);


(function() {
    console.log('executed');
})();