import { Button as ButtonNativeComponent, IButtonProps, Heading } from 'native-base';
import React from 'react';

type Props = IButtonProps & {
    title: string
}

export function Button({title, ...rest}: Props) {
  return (
    <ButtonNativeComponent 
        bg='green.500'
        h={14}
        marginTop={8}
        fontSize='sm'
        rounded='sm'
        _pressed={{
            bg: 'green.500'
        }}
        {...rest}
    >
        <Heading color='white' fontSize='sm'>
            {title}
        </Heading>
    </ButtonNativeComponent>
  );
}