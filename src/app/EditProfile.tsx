import { View, Text, StyleSheet, Image } from 'react-native';
import EditProfileImg from '../components/edit-profile-img';
import ToBackButton from '../components/to-back';
import { colors } from '../config/colors';
import EditFormsProfile from '../components/edit-forms-profile';

export default function EditProfile(){
    return (
        <View style={s.container}>
            <ToBackButton />
            <EditProfileImg style={{alignSelf: 'center', marginTop: 100}}/>
            <Text style={s.title}>Edite seu Perfil</Text>
            <EditFormsProfile />
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 20,
        fontWeight: 600,
        marginTop: 20,
        textAlign: 'center',
        color: colors.blue[200],
        marginBottom: 30
    }
})