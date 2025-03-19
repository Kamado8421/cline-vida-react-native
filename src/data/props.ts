export type MunicipiosType = {
    id: string,
    stateId: string,
    city: string
}

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

export type ClinicType = {
    id: string;
    name: string;
    address: string;
    residentialNumber: number;
    complement?: string;
    neighborhood: string;
    cep: string;
    phone: string;
    email: string;
    cnpj: string;
    whatsappNumber?: string;
    doctorName: string;
    cityId: string;
}