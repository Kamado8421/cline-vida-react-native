import {FlatList } from 'react-native';
import ConsultCard from './consult-cad';
import { ConsultType } from '@/src/data/props';
import { Clinics } from '@/src/data/clinics.array';

export default function ConsultCards({ data }: { data: ConsultType[] }) {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
                <ConsultCard
                    consultId={item.id}
                    active={item.finished}
                    dateOpen={item.dateOpened}
                    clinicId={item.clinicId}
                    adress={Clinics.find(c => c.id === item.clinicId)?.address || 'Endereço não encontrado...'}
                    clinicName={Clinics.find(c => c.id === item.clinicId)?.name || 'Nome da clínica não encotrad...'}
                />
            }
        />
    )
}

