'use strict';

var english_german = require('./english_german.json');
var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Dictionary = new React.createClass({
    render: function() {
      var layout =
          <React.View style = { styles.parent } >

              <React.Text>
                  Type something in English:
              </React.Text>

              <React.TextInput text={ this.state.input }
                onChangeText = {(e) => this.setState({input : e})}
                onSubmitEditing = {this.showMeaning}
              />

              <React.Text style = { styles.germanLabel } >
                  Its German equivalent is:
              </React.Text>

              <React.Text style = { styles.germanWord } >
               {this.state.output}
              </React.Text>

          </React.View>
      ;
      return layout;
  },
  getInitialState: function() {
    return {
        input: '',
        output: ''
    };
  },
  showMeaning: function() {
      // Use the ternary operator to check if the word
      // exists in the dictionary.
      var meaning = this.state.input in english_german ?
                      english_german[this.state.input] :
                      "Not Found";

      // Update the state
      this.setState({
           output: meaning
      });
  },
});
var styles = StyleSheet.create({

    // For the container View
    parent: {
        padding: 16
    },

    // For the Text label
    germanLabel: {
        marginTop: 20,
        fontWeight: 'bold'
    },

    // For the Text meaning
    germanWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic'
    }
});

AppRegistry.registerComponent('DictionaryReactNativeApp', () => Dictionary);
