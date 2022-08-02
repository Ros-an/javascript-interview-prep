const userDetail = {
    firstName: "roshan",
    lastName: "mahato",
    printFullName: function (city, state) {
        console.log(`My name is ${this.firstName} ${this.lastName}, ${city}, ${state}`);
    }
}

userDetail.printFullName() // normal method calling

//apply, call, bind method - when you wana burrow function of other object
const userDetail1 = {
    firstName: "Arvind",
    lastName: "Kejriwal"
}

userDetail.printFullName.apply(userDetail1,["Delhi","No state"]); //apply
userDetail.printFullName.call(userDetail1, "Delhi","No state"); // call

const printUserDetail= userDetail.printFullName.bind(userDetail1,"Richmond","Bengaluru"); //bind
printUserDetail();

console.log("--------------------------------------");
//when function is not within object;

const printFullName = function (city, state) {
    console.log(`My name is ${this.firstName} ${this.lastName}, ${city}, ${state}`)
}

printFullName.call(userDetail, "siliguri","west bengal"); //call
printFullName.apply(userDetail, ["siliguri","west bengal"]); //apply
const printUserDetail1 = printFullName.bind(userDetail1, "siliguri","west bengal");
printUserDetail1(); //bind

console.log("------------------polyfill of bind--------------------");

const printDetailFunc = function (town, state) {
    console.log(`${this.firstName} ${this.lastName} ${town} ${state}`);
}

Function.prototype.myBind = function (...args) {
    const obj = this;
    const params = args.slice(1);
    console.log("this is args", args, params);
    return function (...args2) {
        // obj.call(args[0]); since to apply works with argruments in array
        obj.apply(args[0], [...params,...args2]);
    }
}
const printDetail = printDetailFunc.myBind(userDetail1,"Siliguri");
printDetail("Bengal");