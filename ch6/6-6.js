class Person {
  #lastName;
  #firstName;

  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }

  get lastName() {
    return this.#lastName;
  }
  get firstName() {
    return this.#firstName;
  }
}

let defaultOwner = new Person({ firstName: "마틴", lastName: "파울러" });

//외부에서는 defaultOwner를 업데이트 할 수 없겠지?
// 객체자체가 문제가 있다.
// defaultOnw
export function getDefaultOwner() {
  //return Object.assign;
  //스프레드 연산자는 얕은복사기 떄문에 더깊이 들어가면 값
  return { ...defaultOwner };
}
