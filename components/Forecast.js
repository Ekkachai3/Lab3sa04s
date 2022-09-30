import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Forecast extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.cel}>{this.props.main}</Text>
                    <Text style={styles.texts}>{this.props.description}</Text>
                    <View style={styles.layout}>
                        <Text style={styles.cel}>{this.props.temp}</Text>
                        <Text style={styles.texts}>°C</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    texts: { textAlign: 'center', paddingTop: 15, color: 'white' },
    cel: { textAlign: 'center', paddingTop: 15, color: 'orange', fontSize: 39 },
    layout: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }
});