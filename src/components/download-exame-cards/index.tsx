import { View, Text, FlatList } from 'react-native';
import DownloadExameCard from './download-exame-card';

interface PropsType {}
export default function DownloadExameCards(props: PropsType){
    return (
        <>
        <DownloadExameCard 
            clinicName='Clínica Ágape'
            megabytes={2.5}
            date='19/03'
            examName='Exame de Rotina'
        />
        <DownloadExameCard 
            clinicName='Clínica Ágape'
            megabytes={2.5}
            date='05/02'
            examName='Exame de Rotina'
        />
        </>
    )
}