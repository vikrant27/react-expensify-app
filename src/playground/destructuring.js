// const person = {
//     name: 'Vikrant',
//     age: 25,
//     location: {
//         city: 'India',
//         temp: 34
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);


// const { city, temp: temperature} = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature } in ${city}.`);
// }

// Array Destructuring


const address = ['24 S Juniper Street', 'Mohali', 'Punjab', '12344434'];

const [street, city, state = 'Chandigarh', zip] = address;

console.log(`You are in ${city} ${state}`);

// console.log(`You are in ${address[1]} ${address[2]}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , mediumPrice ] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`)
