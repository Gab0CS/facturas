
export const invoice = {
    id: 10,
    name: "Componentes PC",
    client: {
        name: "Joe",
        lastName: "Doe",
        address: {
            country: "USA",
            city: "Los Ángeles",
            street: "Avenida siempre viva",
            number: 123
        }
    },
    company: {
        name: "New egg",
        fiscalNumber: 123412,
    },
    items: [
        {
            product: "CPU intel",
            price: 599,
            quantity: 1,
        },
        {
            product: "Corsair keyboard",
            price: 120,
            quantity: 1,
        },
        {
            product: "Monitor asus",
            price: 350,
            quantity: 1,
        }
    ]
}