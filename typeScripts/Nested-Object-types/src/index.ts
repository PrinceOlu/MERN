type Phone = number;

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    // adding a question mark makes this field optional
    address?: { 
        street: string;
        city: string;
        country: string;
        zipCode: number;
    };
    gsm: Phone; // gsm is now expected to be a number, defined by the Phone alias
};

let person1: Person = {
    name: "Prince",
    age: 10,
    isStudent: true,
    address: {
        street: "Surrey",
        city: "Surrey",
        country: "Canada",
        zipCode: 123,
    },
    gsm: 1234  // gsm is assigned directly as a number
};

let person2: Person = {
    name: "Olu",
    age: 20,
    isStudent: false,
    gsm: 1234  // gsm is assigned directly as a number
};
