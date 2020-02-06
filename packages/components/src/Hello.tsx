import * as React from 'react';
import HelloWorld from '@monorepo-typescript/common';
import { Text } from 'react-native';

export interface HelloProps {
    userName: string;
}

export const Hello: React.FC<HelloProps> = (props: HelloProps) => <Text>{HelloWorld(props.userName)}</Text>;
