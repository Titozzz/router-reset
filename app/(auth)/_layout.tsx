import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="login" />
      <Stack.Screen name="password" />

      <Stack.Screen name="first_name" />

      <Stack.Screen name="last_name" />
    </Stack>
  );
};

export default AuthLayout;
