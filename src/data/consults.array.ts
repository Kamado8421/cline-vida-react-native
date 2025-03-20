import { ConsultType } from "./props";

export const consults: ConsultType[] = [
    {
        id: '0001',
        clinicId: '0001',
        dateEnd: '28/03/2025',
        dateOpened: '15/03/2025',
        finished: false
    },
    
    {
        id: '0002',
        clinicId: '0001',
        dateEnd: '05/01/2025',
        dateOpened: '28/12/2024',
        finished: true
    },
    {
        id: '0003',
        clinicId: '0002',
        dateEnd: '10/02/2025',
        dateOpened: '02/02/2025',
        finished: true
    },
]