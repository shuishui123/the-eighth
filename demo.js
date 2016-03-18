
/**Person类***/
function Person( name) {
	this.name = name;
	if(this instanceof Person) {
		Person.prototype.count++;
	}
}
Person.prototype.count = 0;
Person.prototype.toString = function () {
	return this.name;
};
var ling = new Person('ling');
var long = new Person('long');
console.log(ling.toString()); // 'ling'
console.log(long.toString()); // 'long'
console.log(ling.count); // 2
console.log(long.count); // 2




/*复数类****/
function Complex( real, imaginary) {
	if( isNaN(real) || isNaN(imaginary))
		throw new TypeError();
	this.r = real;
	this.i = imaginary;
}

/*****mul方法: 传入另一个复数类的对象, 得到乘积****/
Complex.prototype.mul = function (that) {
	return new Complex( this.r * that.r - this.i * that.i, this.r *that.i + this.i * that.r);
};
      var num1 = new Complex(1, -1);
      var num2 = new Complex(-1, 1);
      num1.mul(num2);

/********add方法:得到相加的结果******/
Complex.prototype.add = function (that) {
	return new Complex( this.r + that.r, this.i + that.i);
};
      var num1 = new Complex(1, -1);
      var num2 = new Complex(-1, 1);
      num1.add(num2);


/********mag方法: 返回自身的模******/
Complex.prototype.mag = function () {
	return Math.sqrt( this.r * this.r + this.i * this.i);
};
      var num1 = new Complex(1, -1);
      num1.mag();


/********neg方法: 自己取反******/
Complex.prototype.neg = function () {
	return new Complex( -this.r, -this.i);
};
      var num1 = new Complex(1, -1);
      num1.neg();


/****equal方法: 传入另一个复数类的对象, 若值相等返回true否则false***/
Complex.prototype.equals = function (that) {
	return that != null && 
	that.constructor === Complex &&
	this.r === that.r && this.i === that.i;
};
      var num1 = new Complex(1, -1);
      var num2 = new Complex(-1, 1);
      num1.equals(num2);



/********toString方法, 返回一个人类可以阅读的字符串, 让我知道实数部分是什么, 虚数部分是什么****/
Complex.prototype.toString = function () {
	return "实数部分：" + this.r + "," + "虚数部分：" + this.i;
};
      var num1 = new Complex(1, -1);
      num1.toString();
