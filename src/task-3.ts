const usernames: string[] = ["Alice", "Bob", "Charlie"];

const ratings: number[] = [4.5, 34.8, 5];

interface Product {
    id: number;
    title: string;
}

const products: Product[] = [
    {id: 1, title: "Phone"},
    {id: 2, title: "Laptop"},
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);