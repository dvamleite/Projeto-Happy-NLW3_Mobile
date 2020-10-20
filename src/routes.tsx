import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

import selectMapPosition from './pages/CreateOrphanage/selectMapPosition';
import OrphanageData from './pages/CreateOrphanage/orphanageData';
import Header from './components/header';


export default function Routes() {
    return (
        <NavigationContainer >
            <Navigator screenOptions={{ headerShown: false, cardStyle: {backgroundColor: '#f2f3f5'} }}>
                
                <Screen name="OrphanagesMap"
                    component={OrphanagesMap}
                />

                <Screen name="OrphanageDetails"
                    component={OrphanageDetails}
                    options={{
                        headerShown: true,
                        header: () =><Header showcancel={false} title="Detalhes Do Orfanato" />
                    }}
                />

                <Screen name="selectMapPosition"
                    component={selectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Marca Endereço" />
                    }}
                />

                <Screen name="OrphanageData"
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Cadastra Orphanage" />
                    }}
                />
                
            </Navigator>
        </NavigationContainer>
    );
}