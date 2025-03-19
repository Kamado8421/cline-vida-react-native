import { MunicipiosType } from "./props"

export const EstadosBrasileiros: { id: string, name: string, uf: string }[] = [
    { id: 'acre-br', name: 'Acre', uf: 'AC' },
    { id: 'alagoas-br', name: 'Alagoas', uf: 'AL' },
    { id: 'amapa-br', name: 'Amapá', uf: 'AP' },
    { id: 'amazonas-br', name: 'Amazonas', uf: 'AM' },
    { id: 'bahia-br', name: 'Bahia', uf: 'BA' },
    { id: 'ceara-br', name: 'Ceará', uf: 'CE' },
    { id: 'distrito-federal-br', name: 'Distrito Federal', uf: 'DF' },
    { id: 'espirito-santo-br', name: 'Espírito Santo', uf: 'ES' },
    { id: 'goias-br', name: 'Goiás', uf: 'GO' },
    { id: 'maranhao-br', name: 'Maranhão', uf: 'MA' },
    { id: 'mato-grosso-br', name: 'Mato Grosso', uf: 'MT' },
    { id: 'mato-grosso-do-sul-br', name: 'Mato Grosso do Sul', uf: 'MS' },
    { id: 'minas-gerais-br', name: 'Minas Gerais', uf: 'MG' },
    { id: 'para-br', name: 'Pará', uf: 'PA' },
    { id: 'paraiba-br', name: 'Paraíba', uf: 'PB' },
    { id: 'parana-br', name: 'Paraná', uf: 'PR' },
    { id: 'pernambuco-br', name: 'Pernambuco', uf: 'PE' },
    { id: 'piaui-br', name: 'Piauí', uf: 'PI' },
    { id: 'rio-de-janeiro-br', name: 'Rio de Janeiro', uf: 'RJ' },
    { id: 'rio-grande-do-norte-br', name: 'Rio Grande do Norte', uf: 'RN' },
    { id: 'rio-grande-do-sul-br', name: 'Rio Grande do Sul', uf: 'RS' },
    { id: 'rondonia-br', name: 'Rondônia', uf: 'RO' },
    { id: 'roraima-br', name: 'Roraima', uf: 'RR' },
    { id: 'santa-catarina-br', name: 'Santa Catarina', uf: 'SC' },
    { id: 'sao-paulo-br', name: 'São Paulo', uf: 'SP' },
    { id: 'sergipe-br', name: 'Sergipe', uf: 'SE' },
    { id: 'tocantins-br', name: 'Tocantins', uf: 'TO' },
]

export const ClinicasAfiliadas: MunicipiosType[] = [
    { id: 'ita-mirim-ma', stateId: 'maranhao-br', city: 'Itapecuru-Mirim' },
    { id: 'caxias-ma', stateId: 'maranhao-br', city: 'Caxias' },
    { id: 'slz-ma', stateId: 'maranhao-br', city: 'São Luís' },
]