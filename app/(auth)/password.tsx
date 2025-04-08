import { router } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Password</Text>
      <Text>Go to first name, resetting all the modal stack</Text>
      <Button
        title="Next"
        onPress={() => {
          // Ideally we would want to use
          // router.reset('/first_name')
          // To avoid potential conflicts with animation the dismiss first and then replace ?
          // Also the API would be way cleaner
          if (router.canGoBack()) {
            router.dismissAll();
          }
          router.replace('/first_name');
        }}
      />
    </View>
  );
};
