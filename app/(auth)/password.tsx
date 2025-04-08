import { router, useNavigation } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Password</Text>
      <Text>Go to first name, resetting all the modal stack</Text>
      <Button
        title="Next"
        onPress={() => {
          // Ideally we would want to use
          // router.reset('/first_name')
          //
          // To avoid potential conflicts with animation the dismiss first and then replace ?
          // Also the API would be way cleaner
          //
          // Here we use navigation.getState().routes.length > 1 to check if the modal stack has screens to dismiss
          // before dismissing, to not dismiss the modal stack itself
          if (navigation.getState().routes.length > 1) {
            router.dismissAll();
          }
          router.replace('/first_name');
        }}
      />
    </View>
  );
};
