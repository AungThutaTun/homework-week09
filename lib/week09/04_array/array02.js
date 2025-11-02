const studetns = [
    {
        name: "Alice",
        age: 10
    },
    {
        name: "Bob",
        age: 20
    },
    {
        name: "Charlie",
        age: 3
    }
];

const nameArray =studetns.map(function(person) {
    return person.name;
});

const under20 = students.filter(function(person) {
    return person.age < 20;
});
console.log(under20);