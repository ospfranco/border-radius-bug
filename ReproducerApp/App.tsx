import React from 'react';
import {SafeAreaView, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={{height: '100%', backgroundColor: 'indigo'}}>
        <View
          style={{
            marginVertical: 400,
            borderTopLeftRadius: 10.5,
            borderTopRightRadius: 10.5,
            backgroundColor: 'white',
            padding: 14,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
