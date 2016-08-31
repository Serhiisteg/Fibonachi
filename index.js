var n=prompt('Enter number');
var f = [0, 1];
var i;
// var num = f[f.length - 1];

for (i = 2; i < n; i ++) {
  f[i] = f[i-1] + f[i-2];
}

document.write(f.shift(2,n));


// var n = prompt('Введіть число');
// n = Math.round(Math.pow((1+Math.sqrt(5))/2,n)/Math.sqrt(5) - Math.pow((1-Math.sqrt(5))/2,n)/Math.sqrt(5));
// document.write(n);