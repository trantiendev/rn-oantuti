import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ChoiceButtons from './components/ChoiceButtons';
import ChoiceCard from './components/ChoiceCard';
import Header from './components/Header';
import { randomComputerChoice, getRoundOutcome } from './utils';
import CHOICES from './choices'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      result: 'Choose your weapon!',
      userChoice: {},
      computerChoice: {}
    }
  }

  onChoicePress = (choice) => {
    const userChoice = CHOICES.find(item => item.name === choice)
    const computerChoice = randomComputerChoice()
    const result = getRoundOutcome(userChoice.name, computerChoice.name)
    this.setState({ userChoice, computerChoice, result })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header result={this.state.result}/>
        </View>

        <View style={styles.choicesContainer}>
          <ChoiceCard
            playerName={'You'}    
            choice={this.state.userChoice}
          />
          <Text>VS</Text>
          <ChoiceCard
            playerName={'Comp'}    
            choice={this.state.computerChoice}
          />
        </View>

        <View style={styles.choiceButtons}>
          <View style={styles.buttonContainer}>
            <ChoiceButtons onButtonPress={this.onChoicePress}/>
          </View>
        </View>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ebee',
    paddingTop: 50
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 50,
    shadowRadius: 5,
    paddingBottom: 50,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },
});
