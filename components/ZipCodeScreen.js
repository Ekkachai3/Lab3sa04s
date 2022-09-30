import React from 'react';
import { ImageBackground, StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
const ZipItem = ({ place, code, navigate }) => (
    <TouchableHighlight onPress={() => navigate('Weather', { zipCode: code })}>
        <View style={styles.box_opacity}>
            <View style={styles.layout}>
                <View style={styles.box_opacity2}>
                    <View style={styles.layout}>
                        <Text style={styles.text2}>Province: </Text>
                        <Text style={styles.text}>{place}       </Text>
                    </View>
                </View>
                <View style={styles.box_opacity2}>
                    <View style={styles.layout}>
                        <Text style={styles.text2}>Zip code: </Text>
                        <Text style={styles.text}>{code} </Text>
                    </View>
                </View>
            </View>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code
export default class ZipCodeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={styles.texts}>Choose a zip code</Text>),
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (

            <View>
                <ImageBackground source={require('./bg.jpeg')} style={styles.backdrop}>
                    <View style={styles.layout}>
                        <FlatList
                            data={availableZipItems}
                            keyExtractor={_keyExtractor}
                            renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { paddingTop: 0 },
    backdrop: { width: '100%', height: '100%' },
    layout: { flexDirection: 'row', flex: 1, justifyContent: 'center', marginTop: 15 },
    box_opacity: { backgroundColor: 'black', opacity: 0.5, paddingTop: 10, borderRadius: 10, margin: 1 },
    box_opacity2: { margin: 1, marginBottom: 25 },
    text: { textAlign: 'center', color: 'white', fontSize: 20, marginBottom: 20 },
    texts: { textAlign: 'center', color: 'orange', paddingLeft: 0, fontSize: 15 },
    text2: { textAlign: 'center', color: 'red', fontSize: 20, marginBottom: 20 },

});

