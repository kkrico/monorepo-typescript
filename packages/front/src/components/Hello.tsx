import * as React from 'react';
import HelloWorld from '@monorepo-typescript/common';

export interface HelloProps {
    userName: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export const Hello: React.FC<HelloProps> = (props: HelloProps) => <h1>{HelloWorld(props.userName)}</h1>;
