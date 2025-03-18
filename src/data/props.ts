export type MedicineType = {
    id: string;
    name: string
    price: number
}

export type MonthsType = 'Janeiro' | 'Fevereiro' | 'Março' | 'Abril' | 'Maio' | 'Junio' | 'Julho' | 'Agosto' | 'Setembro' | 'Outubro' | 'Novembro' | 'Dezembro'

export type ShoppingType = {
    id: string;
    date: string;
    price: number;
    product: string;
}

export type ShoppingEndType = {
    id: string;
    month: MonthsType;
    year: number;
    shoppings: ShoppingType[];
}