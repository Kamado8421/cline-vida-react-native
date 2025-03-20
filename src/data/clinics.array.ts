import { ClinicType } from './props';

export const Clinics: ClinicType[] = [
    {
        address: 'Rua João Buzar',
        cep: '65485-000',
        cityId: 'ita-mirim-ma',
        cnpj: '12.345.678/0001-99',
        doctorName: 'Dr. Gaspar Amorin',
        id: '0001',
        email: 'gaspar.cline@email.com',
        name: 'Clínica Vida-Ágape',
        residentialNumber: 240,
        neighborhood: 'Centro',
        phone: '(98) 98989-0989',
        dentalServices: [
            { id: '001', title: 'Plano de Aparelho Bucal', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat porro adipisci explicabo quam fuga omnis, quibusdam iure magni aliquam! Incidunt deleniti libero ab doloribus cum autem numquam velit? Sit, commodi.' }
        ]
    },
    {
        address: 'Abidala Buzar',
        cep: '65485-000',
        cityId: 'ita-mirim-ma',
        cnpj: '32.345.777/0003-87',
        doctorName: 'Dra. Suellen Dias',
        id: '0003',
        email: 'dias.cline@email.com',
        name: 'Clínica Dias - Vida',
        residentialNumber: 29,
        neighborhood: 'Centro',
        phone: '(98) 97865-2984',
        dentalServices: [
            { id: '0002', title: 'Restauração Dentária', desc: 'Descição aqui' }
        ]
    },
    {
        address: 'Rua Mudica Sampaio',
        cep: '65485-000',
        cityId: 'ita-mirim-ma',
        cnpj: '89.765.321/0002-23',
        doctorName: 'Dr. Sampaio Garreto',
        id: '0002',
        email: 'garrt0.cline@email.com',
        name: 'Clínica Garreto',
        residentialNumber: 0,
        neighborhood: 'Centro',
        phone: '(98) 98632-3232',
        whatsappNumber: '(99) 99999-9999'
    },
]