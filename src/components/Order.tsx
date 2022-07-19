import { HStack, Text } from 'native-base';
import React from 'react';

export type OrderProps = {
    id: string;
    patrimony: string;
    when: string;
    status: 'open' | 'close'
}

type Props = {
    data: OrderProps
}

export function Order({data, ...rest}: Props) {
  return (
    <HStack>
        <Text color='white' fontSize='md'>
            Patrimonio: {data.patrimony}
        </Text>
    </HStack>
  );
}