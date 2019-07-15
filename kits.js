// 用于把很多重复使用的代码，进行封装，到时候直接使用


/**
 * @description 读取存储在localStorage里面的数组
 * @param {string} key 存储数据使用的键
 * @return {Array} 返回一个数组，如果不存在，返回空数组
 */
function loadData(key) {
  var str = localStorage.getItem(key);
  var arr = JSON.parse(str);
  if (!arr) {
    arr = [];
  }
  return arr;
}

/**
 * @description 用于将数组存储到localStorage里面的方法
 * @param {string} key 存储使用的键
 * @param {Array} arr 要存储的数组数据
 * @return {undefined}
 */
function saveData(key, arr) {
  var json = JSON.stringify(arr);
  localStorage.setItem(key, json);
}


// 封装计算购物车里面的商品总量的代码
function total() {
  // 加载所有的数据
  var arr = loadData('shopCart');
  // 计算总件数
  var total = 0;
  arr.forEach(function (e) {
    total += e.number;
  });
  return total;
}

//求数组最大值的函数封装
var arr = [1, 9, 3, 7, 5];

function max() {
  console.log(Math.max.apply(null, arr));
}
max();



//求n-m中的随机整数
function randomInt(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}
//求[1-10]之间的随机整数
var r = Math.floor(Math.random() * 10 + 1);
console.log(r);


//封装一个获得随机颜色的函数
function color3() {
  var r = Int1(0, 255);
  var g = Int1(0, 255);
  var b = Int1(0, 255);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}


//反证法
var n = parseInt(prompt('请输入一个整数'));
// 1 假设n是一个质数
var flag = true; //使用一个变量来表示假设是成立的
// 2 尝试找反例 - 只要证明从2到n-1之间，有1个数字是整除的即可
for (var i = 2; i <= n - 1; i++) {
  if (n % i === 0) {
    // 只要满足条件，就证明了，有一个1和n本身以外的数字可以被整除 —— 推倒了假设
    flag = false;
    // 如果找打了反例，就后面的循环没有必要了
    break;
  }
}
// 3.看看flag到底是true还是false，如果还是true，就是没有找到反例，假设是成立的
if (flag) {
  console.log('就是一个质数');
} else {
  console.log('不是一个质数');
}



//遍历数组
var arr = [1, 9, 14, 87, 33, 21, 15];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);