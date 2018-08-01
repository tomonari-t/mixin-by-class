const Mixin = (superclass) => class extends superclass {
  constructor() {
    super()
    console.log('mixin constructor')
  }
  foo() {
    console.log('foo() from myxin')
  }
}

class BaseClass {
  constructor() {
    console.log('base class constructor')
  }

  bar() {
    console.log('bar()')
  }
}

class SubClass extends Mixin(BaseClass) {
  constructor() {
    super()
    console.log(super.constructor)
    console.log('sub class constructor')
    super.bar()
  }
}

const instance = new SubClass()

instance.foo()
