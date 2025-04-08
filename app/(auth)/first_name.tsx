import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>First Name</Text>
      <Text>Go to last name, pushing onto the modal stack</Text>
      <Button title="Next" onPress={() => router.push('/last_name')} />
    </View>
  );
};