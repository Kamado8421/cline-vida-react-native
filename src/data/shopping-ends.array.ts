import { ShoppingEndType } from "./props";

export const shoppingsEnds: ShoppingEndType[] = [
    {id: "001", month: 'Janeiro', year: 2025, shoppings: [
        {id: "0001-2025-jan", date: "04/01/2025", price: 10.75, product: 'Paracetamol'},
        {id: "0002-2025-jan", date: "07/01/2025", price: 70, product: 'Colírio'},
        {id: "0003-2025-jan", date: "07/01/2025", price: 12, product: 'Clorotiazida'},
    ]},
    {id: "002", month: 'Fevereiro', year: 2025, shoppings: [
        {id: "0001-2025-fev", date: "07/02/2025", price: 9.99, product: 'Paracetamol'},
    ]},
    {id: "003", month: 'Março', year: 2025, shoppings: [
        {id: "0001-2025-mar", date: "09/03/2025", price: 30, product: 'Losartana'},
        {id: "0002-2025-mar", date: "16/03/2025", price: 20, product: 'Benegripe'},
        {id: "0003-2025-mar", date: "19/03/2025", price: 12, product: 'Clorotiazida'},
    ]},
]