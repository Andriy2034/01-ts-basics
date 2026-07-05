interface Product {
    readonly id: number;
    title: string;
    description?: string;
}

const product: Product = {
    id: 1,
    title: "Table",
    description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);