// Union Types
let id: number | string;
id = 1;
id = "hello";

let email: string | null;
email = "price@email.com";
email = null;

type Id = number | string;
let sampleId: Id;

sampleId = 12344;
console.log(sampleId); // Outputs: 12344

sampleId = "hello";
console.log(sampleId); // Outputs: hello
