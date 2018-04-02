import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import Button from './Button.js';
import HistoryItem from './HistoryItem.js';

const image = require('../img/count.jpg');
 
class Counter extends Component {

	constructor(props) { 
	    super(props);
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.updateCounter = this.updateCounter.bind(this);
      this.reset = this.reset.bind(this);
  }
 
  updateCounter(operation) {
    this.props.updateCounter(operation);
  }

  increment() { 
    this.updateCounter('increment')
  };

  decrement() {
    this.updateCounter('decrement')
  };

  reset() {
    this.updateCounter('reset')
  };

	render() {
		const isDisabledDecrement = (this.props.counter === 0);
    const isDisabledIncrement = (this.props.counter === 10);
	  const currentCount = this.props.counter;
    const history = this.props.history;

	    return (
	      <View style={styles.container}>
	        <Text style={styles.title}>The Count</Text>
	        <Image source={image} style={styles.image} />
	        <View style={ styles.counterContainer}>
	          <Button label='-' disabled={isDisabledDecrement} onPress={this.decrement} />
	          <Text style={ styles.currentValue }>{ currentCount }</Text>
	          <Button label='+' disabled={isDisabledIncrement} onPress={this.increment} />
	        </View>

          <Button label='Reset' disabled={isDisabledDecrement} onPress={this.reset} />
	        <Text style={styles.historyTitle}>History</Text>
	        <ScrollView>
            {history.map((item, key) => (
              <HistoryItem item={item} key={key} />
            ))} 
          </ScrollView>
	      </View>
	    );
	}
}

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 160,
    width: 240,
  },
  title: {
    fontSize: 30,
    color: 'hsl(294, 39%, 30%)',
    fontWeight: 'bold',
    marginTop: 20,
  },
  counterContainer: {
    flexDirection: 'row',
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: 'hsl(294, 39%, 30%)',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    marginTop: 5
  },
  currentValue: {
    fontSize: 40,
    color: 'black'
  },
  historyTitle: {
    color: 'hsl(294, 39%, 30%)',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  disabled: {
    backgroundColor: 'grey', 
  },
  history: {
    flex: 1,
  },
});