import Loading from '@/src/components/pre-loading';
import { colors } from '@/src/config/colors';
import { checkUser } from '@/src/services/storages.service';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router, Tabs } from 'expo-router';
import { useEffect, useState } from 'react';

export default function TabLayout() {

  const [user, setUser] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const check = async () => {
      setIsloading(true);
      const result = await checkUser(setUser);
      if (!result) {
        router.navigate('/');
      } else {
        setIsloading(false)
      }
    }
    check();
  }, [])

  if(isLoading) return <Loading />

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
    </Tabs>
  );
}
