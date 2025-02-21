"use strict";

const person = `{
    "name": "Shantel",
    "age": 43,
    "email":  "ssmith2006@gmail.com"
}`;

const parsedPerson = JSON.parse(person);
console.log(parsedPerson);
const stringData = JSON.stringify(parsedPerson);
console.log(stringData);

