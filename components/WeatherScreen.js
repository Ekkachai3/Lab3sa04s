import React from 'react';
import Weather from './Weather'
import { Button, StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';
import ZipCodeScreen from './ZipCodeScreen'
export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={styles.texts}>Weather of Country</Text>),
            headerRight: (
                <View style={styles.layout}>
                    <Button title="Change zip" onPress={() => navigation.navigate('ZipCode')}
                    />
                </View>
            )
        }
    }
    render() {
        const zipCode = this.props.navigation.getParam('zipCode')
        return (<Weather zipCode={zipCode} />);
    }
}
const styles = StyleSheet.create({
    texts: { textAlign: 'center', color: 'orange', paddingLeft: 20, fontSize: 15 },
    layout:{marginRight:20}
});
