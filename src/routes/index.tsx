import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { SingIn } from '../screens/SingIn'
import React from 'react'

export function Routes() {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}