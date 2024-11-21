const id = Symbol("id");
const id2 = Symbol("id");

const cat1 = {
  [id]: 1,
  [id2]: 2,
  firstName: "John",
  age: 24,
  talk: (firstNameOwner, lastNameOwner) => {
    console.log(this);
    console.log(
      "Hello.I am " +
        this.firstName +
        "My owner is " +
        firstNameOwner +
        " " +
        lastNameOwner
    );
  },
};

const cat3 = {
  firstName: "Jo",
  age: 4,
  talk: function () {
    return "Myay";
  },
};

cat1.lastName = "Jenkins";

const catTalk = cat1.talk;
console.log(catTalk.apply(cat1, ["Ivo", "Nikolov"]));

// const boundTalk = catTalk.bind(cat1);
// console.log(boundTalk());
// console.log(cat1);

// const { firstName: catFirstName, age, type } = cat1;
// console.log(catFirstName);
// console.log(age);
// console.log(type);

// console.log(cat);

// for (const key in cat) {
//   const element = cat[key];
//   console.log(key, cat[key]);
// }

// const cat2 = Object.assign({ type: "Persian" }, cat1);
// const cat2 = Object.assign(cat3, cat1);

// const cat2 = Object.create(cat1);

// cat2.firstName = "Ema";

// console.log(cat1);
// console.log(cat2);
// console.log(cat2.firstName);
// console.log(cat2.age);

// Object.freeze(cat1);

// cat1.firstName = "Don";
// console.log(cat1);

// const keys = Object.keys(cat1);
// const values = Object.values(cat1);
// const entries = Object.entries(cat1);

// console.log(Object.hasOwn(cat1, "type"));
