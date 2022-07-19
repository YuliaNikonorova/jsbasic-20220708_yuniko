let calculator = {
  read(a, b){
    this.a = a,
    this.b = b
  },
  sum(a, b){
    return (this.a+this.b);
  },
  mul(a, b){
    return (this.a*this.b)
  }
};


window.calculator = calculator; 
