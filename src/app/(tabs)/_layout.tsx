import Loading from '@/src/components/pre-loading';
import { colors } from '@/src/config/colors';
import { HOST } from '@/src/services/api.service';
import { AuthService, UserApiType } from '@/src/services/auth.service';
import { checkUser } from '@/src/services/storages.service';
import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router, Tabs } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export default function TabLayout() {

  const [user, setUser] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const check = async () => {
      setIsloading(true);


      const auth = new AuthService(HOST);
      const res = await auth.validateUserToken()

      if (!res.success) {
        setIsloading(false);
        return router.navigate('/');
      } else {
        setIsloading(false)
      }

    }
    check();
  }, [])

  if (isLoading) return <Loading />

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: colors.blue[200] }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Início',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="Cart"
        options={{
          title: 'Carrinho',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Suas Compras',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="shopping-cart" color={color} />,
        }}
      />
    </Tabs>
  );
}
