import { router } from "expo-router";
import { View, Text, Button } from "react-native";

export default () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
      <Text>Go to password, pushing onto the modal stack</Text>
      <Button title="Login" onPress={() => router.push('/password')} />
    </View>
  );
};