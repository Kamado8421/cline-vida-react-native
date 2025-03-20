import React from 'react';
import { View, Text, FlatList } from 'react-native';
import DentalCard from './dental-card';
import { Clinics } from '@/src/data/clinics.array';

interface PropsType { }
export default function DentalCards(props: PropsType) {
    return (
        <FlatList
            style={{ marginTop: 50 }}
            data={Clinics.filter(c => c.dentalServices?.length)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <FlatList
                    style={{
                        paddingHorizontal: 20,
                        marginTop: 10
                    }}
                    data={item.dentalServices}
                    keyExtractor={(item) => item.id}
                    renderItem={(data) => <DentalCard
                        serviceId={data.item.id}
                        clinicId={item.id}
                        address={item.address}
                        clinicName={item.name}
                        serviceName={data.item.title}
                    />}
                />
            )}
        />
    )
}