import { Person } from "./types";

export function hello(person: Person): void {
  console.log(`Hello, ${person.name}${person.age}!`);
}
