function PrintUserInfo(name: string, age: number, email?: string): void {
    console.log("Name:", name);
    console.log("Age:", age);
    if (email) {
        console.log("Email:", email);
    }
}

PrintUserInfo("Alice", 30);
PrintUserInfo("Bob", 25, "bob@mail.com");
