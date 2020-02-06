import * as React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Hello } from '@monorepo-typescript/components';

const App = (): React.ReactElement => (
    <View>
        <Hello userName="Daniel Ramos" />
    </View>
);
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
    rootTag: document.getElementById('app'),
});
