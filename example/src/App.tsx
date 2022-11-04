import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { multiply, showAdPieVideoAds } from 'react-native-dongdm-adpie';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Button
        color={'#ff0000'}
        title="Click This"
        onPress={() => {
          showAdPieVideoAds({});
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
