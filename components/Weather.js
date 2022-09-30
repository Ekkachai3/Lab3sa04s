import React from 'react';
import Forecast from './Forecast'
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: 'Main', description: 'Description', temp: 0
            }
        }
    }
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&appid=fd68c0f2039c5a25f666a9ff374bc93e`)
            .then((response) => response.json())
            .then((json) => {
                this.setState(
                    {
                        forecast: {
                            main: json.weather[0].main,
                            description: json.weather[0].description,
                            temp: json.main.temp
                        }
                    });
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    componentDidMount = () => this.fetchData()
    componentDidUpdate = (prevProps) => {
        if (prevProps.zipCode !== this.props.zipCode) {
            this.fetchData()
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text>Weather</Text>),
            headerRight: (
                <Button title="Change zip" onPress={() => navigation.navigate('ZipCode')}
                />
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./bg.jpg')} style={styles.backdrop}>
                    <View style={styles.layout}>
                        <View style={styles.box_opacity}>
                            <Text style={styles.text}>Zip code is {this.props.zipCode}.</Text>
                            <Forecast main={this.state.forecast.main} description={this.state.forecast.description} temp={this.state.forecast.temp} />
                        </View>
                    </View>
                    <View style={styles.layout2}>
                        <View style={styles.layout}>
                        <Text style={styles.text_name}>3SA04 : 6035512062</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { paddingTop: 0 },
    backdrop: { width: '100%', height: '100%' },
    layout: { flexDirection: 'column', flex: 1},
    layout2: { flexDirection:'row-reverse',flex:0.1, width: '100%', height: '100%',backgroundColor: 'black',opacity: 0.5},
    box_opacity: { backgroundColor: 'black', opacity: 0.5, paddingTop: 10 },
    text: { textAlign: 'center', color: 'white', fontSize: 20 },
    text_name: { textAlign: 'center', color: 'yellow', fontSize: 20 ,marginTop:15},
    bott:{borderRadius: 10}

});