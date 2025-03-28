import { ClinicType } from './props';
/*
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
]*/

export const Clinics: ClinicType[] = [
    // Clínicas em Ita-Mirim-MA (melhoradas)
    {
        id: '0001',
        name: 'Clínica Vida-Ágape',
        address: 'Rua João Buzar',
        residentialNumber: 240,
        neighborhood: 'Centro',
        complement: 'Próximo à praça central',
        cep: '65485-000',
        phone: '(98) 98989-0989',
        email: 'contato@vidaagape.com.br',
        cnpj: '12.345.678/0001-99',
        doctorName: 'Dr. Gaspar Amorin',
        cityId: 'ita-mirim-ma',
        dentalServices: [
            { id: '001', title: 'Plano de Aparelho Bucal', desc: 'Tratamento ortodôntico completo com acompanhamento especializado.' }
        ]
    },
    {
        id: '0002',
        name: 'Clínica Garreto',
        address: 'Rua Mudica Sampaio',
        residentialNumber: 15,
        neighborhood: 'Centro',
        cep: '65485-000',
        phone: '(98) 98632-3232',
        whatsappNumber: '(99) 99999-9999',
        email: 'suporte@clinicagarreto.com',
        cnpj: '89.765.321/0002-23',
        doctorName: 'Dr. Sampaio Garreto',
        cityId: 'ita-mirim-ma'
    },
    {
        id: '0003',
        name: 'Clínica Dias - Vida',
        address: 'Avenida Abidala Buzar',
        residentialNumber: 29,
        neighborhood: 'Centro',
        cep: '65485-000',
        phone: '(98) 97865-2984',
        email: 'contato@diasvida.com',
        cnpj: '32.345.777/0003-87',
        doctorName: 'Dra. Suellen Dias',
        cityId: 'ita-mirim-ma',
        dentalServices: [
            { id: '002', title: 'Restauração Dentária', desc: 'Recuperação da estrutura dentária com materiais de alta qualidade.' },
            { id: '003', title: 'Clareamento Dental', desc: 'Procedimento estético para um sorriso mais branco e saudável.' }
        ]
    },

    // Novas clínicas em São Luís - MA (slz-ma)
    {
        id: '1001',
        name: 'Clínica Sorriso Feliz',
        address: 'Avenida dos Holandeses',
        residentialNumber: 455,
        neighborhood: 'Calhau',
        cep: '65071-380',
        phone: '(98) 3232-5566',
        email: 'contato@sorrisofeliz.com.br',
        cnpj: '45.678.910/0001-11',
        doctorName: 'Dr. Marcos Rezende',
        cityId: 'slz-ma',
        dentalServices: [
            { id: '004', title: 'Implantes Dentários', desc: 'Substituição de dentes perdidos com implantes de titânio.' }
        ]
    },

    {
        id: 'lacmar',
        name: 'Laboratório Lacmar',
        doctorName: 'Vinícius Vasconcelos Braid',
        urlImage: 'https://i.ibb.co/Kjny47Nf/input.jpg',
        address: 'Av. dos Holandeses, Quadra 9',
        residentialNumber: 2,
        neighborhood: 'Calhau',
        cep: '65071-380',
        phone: '(98) 98765-4321',
        email: 'lacmarcalhau@lab.com.br',
        cnpj: '20.815.524/0001-10', 
        cityId: 'slz-ma',
        complement: 'Quadra 9',
        dentalServices: [],
        whatsappNumber: '559832363865'

    },
    {
        id: '1002',
        name: 'Odonto Mais',
        address: 'Rua dos Franceses',
        residentialNumber: 89,
        neighborhood: 'Centro',
        cep: '65015-200',
        phone: '(98) 98765-4321',
        email: 'suporte@odontomais.com.br',
        cnpj: '98.765.432/0001-22',
        doctorName: 'Dra. Fernanda Martins',
        cityId: 'slz-ma'
    },
    {
        id: '1004',
        name: 'Clínica Sorriso Perfeito',
        address: 'Rua do Sol',
        residentialNumber: 321,
        neighborhood: 'Centro Histórico',
        cep: '65010-110',
        phone: '(98) 99632-2233',
        email: 'info@sorrisoperfeito.com',
        cnpj: '54.321.678/0001-44',
        doctorName: 'Dra. Amanda Carvalho',
        cityId: 'slz-ma'
    },
    {
        id: '1005',
        name: 'Clínica Bem Estar',
        address: 'Rua Grande',
        residentialNumber: 78,
        neighborhood: 'Centro',
        cep: '65035-000',
        phone: '(98) 98555-4444',
        email: 'contato@clinicabemestar.com',
        cnpj: '65.432.109/0001-55',
        doctorName: 'Dr. João Almeida',
        cityId: 'slz-ma',
        dentalServices: [
            { id: '009', title: 'Odontopediatria', desc: 'Atendimento odontológico especializado para crianças.' },
            { id: '006', title: 'Ortodontia', desc: 'Correção do posicionamento dos dentes com aparelhos ortodônticos.' },
            { id: '007', title: 'Extração de Siso', desc: 'Procedimento para remoção dos terceiros molares.' }
        ]
    }
];
