import React from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import { Heading , Card, Caption, Button, Subtitle, Icon,Image} from '@shoutem/ui';
import { Font, Components } from 'expo';
import Deck from './src/Deck';

console.disableYellowBox = true;
const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

export default class App extends React.Component {
  state = {
    fontsAreLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
    });

    this.setState({fontsAreLoaded: true});
  }

  renderCard(item) {
    return (
      <Card style={{  alignSelf: 'stretch', width : 300, marginBottom: 30}}>
  <Image
    styleName="featured"
    source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-11.png'}}
  />
  <View styleName="content">
    <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
    <View styleName="horizontal v-center space-between">
      <View styleName="horizontal">
        <Subtitle styleName="md-gutter-right">$99.99</Subtitle>
        <Caption styleName="line-through">$120.00</Caption>
      </View>
      <Button styleName="tight clear"><Icon name="cart" /></Button>
    </View>
  </View>
</Card>
    );

  }
  render() {
     if (!this.state.fontsAreLoaded) {
      return <Components.AppLoading />;
    }
    
    return (
 <View style={styles.container}>
   <ScrollView style={{alignItems: 'center'}}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
        />
        </ScrollView>
      </View> 
  );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
