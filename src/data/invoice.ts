
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
            id: 1,
            product: "CPU intel",
            price: 599,
            quantity: 1,
        },
        {
            id: 2,
            product: "Corsair keyboard",
            price: 120,
            quantity: 1,
        },
        {
            id: 3,
            product: "Monitor asus",
            price: 350,
            quantity: 1,
        }
    ]
}