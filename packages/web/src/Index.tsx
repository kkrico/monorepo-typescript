import * as React from 'react';
import { AppRegistry, View } from 'react-native';
import { Hello } from '@monorepo-typescript/components/src/Hello';

const App = (): React.ReactElement => (
    <View>
        <Hello userName="Daniel Ramos" />
    </View>
);
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
    rootTag: document.getElementById('app'),
});
