class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue;
  }

  add(number) {
    this.initialValue = this.initialValue + '+' + number;
    return this;
  }
  
  subtract(number) {
    this.initialValue = this.initialValue + '-' + number;
    return this;
  }

  multiply(number) {
    this.initialValue = this.initialValue + '*' + number;
    return this;
  }

  devide(number) {
    this.initialValue = this.initialValue + '/' + number;
    return this;

  }

  pow(number) {
    this.initialValue = this.initialValue + '**' + number;
    return this;
  }

  valueOf() {
    var sum = eval(this.initialValue);
    return sum;
  }
}

module.exports = SmartCalculator;
