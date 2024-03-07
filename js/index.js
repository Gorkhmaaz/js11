///Task 1
function countProperties(obj){
    const keys = Object.keys(obj)
    return keys.length
}
const obj = {name: 'Vasya', age: 25, job: 'engineer'}
console.log(countProperties(obj))

///Task 2
function hasKey(obj,key){
    return key in obj
}
const obj1 = {name: 'James', age: 30, job:'designer'}
console.log(hasKey(obj1,'name' ))
console.log(hasKey(obj1,'surname'))

////Task 3
function objectValues(obj){
    return Object.values(obj)
}
const obj2 = {name: 'Anna', age: 35, job:'shop assistant'}
console.log(objectValues(obj2))

///Task 4
function allObjects(obj3,obj4){
   return {...obj3, ...obj4}
}
const obj3 = {name: 'Jen', age: 35, job:'teacher'}
const obj4 = {rate: 9.8, hasChildren: 30, }
console.log(allObjects(obj3,obj4))

////Task 5
function filterNumberProperties(obj){
    const result = {}
    for (let key in obj){
        if(typeof obj[key] === 'number'){
            result[key] = obj[key]
        }
    }
    return result
}
const obj5 = {a:5,b:'hello', c:4, d:'name'}
console.log(filterNumberProperties(obj5))

///Task 6 
function sortObjects(obj){
    const sortedKeys = Object.keys(obj).sort()
    const sortedObj = {}
    for (let key of sortedKeys){
        sortedObj[key] = obj[key]
    }
    return sortedObj
}
const obj6 = {c: 5, d: 3, b: 1, a: 7}
console.log(sortObjects(obj6))

////Task 7
function sumObj(obj){
    let sum = 0
    for(let key in obj){
        sum += obj[key]
    }
    return sum
}
const obj7 = {a: 3, b:4 , c:5, d: 7}
console.log(sumObj(obj7))

////Task 8
function hasNumber(obj){
    for(let key in obj){
       if(typeof obj[key] === 'number'){
        return true
       }
    }
    return false
}
const obj8 = {name:'Ivan', age: 45, city:'Moscow'}
console.log(hasNumber(obj8))

////Task 9
function removeProperties(obj, keysToRemove) {
    for (const key of keysToRemove) {
        if (key in obj) {
            delete obj[key];
        }
    }
    return obj
}
const obj9 = {
    name: 'Lucy',
    age: 35,
    city: 'Boston'
};
const keysToRemove = ['city'];
removeProperties(obj9, keysToRemove);
console.log(obj9); 

////Task 10
function objectToArray(obj){
    const res = []
    for (let key in obj){
        res.push([key], obj[key])
    }
    return res
}
const obj10 = {
    name: 'Sergey',
    age: 35,
    city: 'Rostov'
};
console.log(objectToArray(obj10))

////Task 11
const person = {
    name: 'Gorxmaz',
    introduce:function(){
        console.log('Меня зовут ' + person.name)
    }
}
person.introduce()


///Task 12
function calculateArea(width,height){
    return width * height
}
const rectangle = {
    width: 4, 
    height:4,
    getArea: function(){
        return calculateArea(rectangle.width, rectangle.height)
    }
}
console.log(rectangle.getArea())

///Task 13
const car = {
    speed:60,
    accelarate: function(value){
        car.speed += value
    }
}
car.accelarate(30)
console.log(car.speed)


///Task 15
const calculator = {
    plus: function(a,b){
        return a + b
    },
    minus: function(a,b){
        return a- b
    },
    multiply: function(a,b){
       return a * b
    },
    divide: function(a,b){
        return a / b
    }
}
console.log(calculator.plus(10,5))
console.log(calculator.minus(10,5))
console.log(calculator.multiply(10,5))
console.log(calculator.divide(10,5))