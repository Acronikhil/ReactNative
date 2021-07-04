/* eslint-disable react-native/no-inline-styles */ // eslint-disable-next-line react-native/no-inline-styles
import React, {Component} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      value: {
        fname: '',
        lname: '',
        phone: '',
        pass: '',
      },
      update: null,
    };
  }

  fname = text => {
    let value = {...this.state.value};
    value.fname = text;
    this.setState({value});
  };

  lname = text => {
    let value = {...this.state.value};
    value.lname = text;
    this.setState({value});
  };
  phone = text => {
    let value = {...this.state.value};
    value.phone = text;
    this.setState({value});
  };
  pass = text => {
    let value = {...this.state.value};
    value.pass = text;
    this.setState({value});
  };
  // async componentDidMount() {
  //   try {
  //     fetch('https://webhook.site/73bfa468-3e73-41f1-b519-ab79bae1dcc8', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         userName: 'nik',
  //         pass: 'tmkc',
  //         movies: [
  //           {id: '1', title: 'Star Wars', releaseYear: '1977'},
  //           {id: '2', title: 'Back to the Future', releaseYear: '1985'},
  //           {id: '3', title: 'The Matrix', releaseYear: '1999'},
  //           {id: '4', title: 'Inception', releaseYear: '2010'},
  //           {id: '5', title: 'Interstellar', releaseYear: '2014'},
  //         ],
  //       }),
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   return fetch('https://webhook.site/73bfa468-3e73-41f1-b519-ab79bae1dcc8')
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       this.setState({
  //         isLoading: false,
  //         data: responseJson.movies,
  //       });
  //     });
  // }

  componentDidMount() {
    return fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          data: responseJson.movies,
        });
        console.log(this.state.data);
      });
  }

  render() {
    var appendthis = () => {
      this.state.name = this.state.update;
    };
    let imclicked = () => {
      try {
        fetch('https://webhook.site/49355596-d832-4817-9204-872290388fd5', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: this.state.value,
            pass: 'tmkuc',
            movies: [
              {id: '1', title: 'Star Wars', releaseYear: '1977'},
              {id: '2', title: 'Back to the Future', releaseYear: '1985'},
              {id: '3', title: 'The Matrix', releaseYear: '1999'},
              {id: '4', title: 'Inception', releaseYear: '2010'},
              {id: '5', title: 'Interstellar', releaseYear: '2014'},
            ],
          }),
        });
      } catch (e) {
        console.log(e);
      }
    };

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      let movies = this.state.data.map((val, key) => {
        return (
          <View state={styles.container} key={key}>
            <Text style={styles.text}>{val.title}</Text>
          </View>
        );
      });
      return (
        <View style={styles.container}>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <TextInput
              style={{
                backgroundColor: 'blue',
                width: '80%',
                fontSize: 30,
                color: 'white',
              }}
              placeholder="Enter First Name"
              placeholderTextColor="white"
              onChangeText={this.fname}
            />
            <TouchableOpacity
              style={{padding: 30, backgroundColor: 'red'}}
              onPress={appendthis}>
              <Text style={{color: 'white', fontSize: 25}}>SAVE</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <TextInput
              style={{
                backgroundColor: 'blue',
                width: '80%',
                fontSize: 30,
                color: 'white',
              }}
              placeholder="Enter Last Name"
              placeholderTextColor="white"
              onChangeText={this.lname}
            />
            <TouchableOpacity
              style={{padding: 30, backgroundColor: 'red'}}
              onPress={appendthis}>
              <Text style={{color: 'white', fontSize: 25}}>SAVE</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <TextInput
              style={{
                backgroundColor: 'blue',
                width: '80%',
                fontSize: 30,
                color: 'white',
              }}
              placeholder="Enter Phone No"
              placeholderTextColor="white"
              onChangeText={this.phone}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={{padding: 30, backgroundColor: 'red'}}
              onPress={appendthis}>
              <Text style={{color: 'white', fontSize: 25}}>SAVE</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <TextInput
              style={{
                backgroundColor: 'blue',
                width: '80%',
                fontSize: 30,
                color: 'white',
              }}
              placeholder="Enter Password"
              placeholderTextColor="white"
              onChangeText={this.pass}
            />
            <TouchableOpacity
              style={{padding: 30, backgroundColor: 'red'}}
              onPress={appendthis}>
              <Text style={{color: 'white', fontSize: 25}}>SAVE</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={imclicked}>
            <Text
              style={{
                padding: 30,
                color: 'white',
                backgroundColor: 'black',
                marginVertical: 15,
                fontSize: 25,
              }}>
              POST
            </Text>
          </TouchableOpacity>

          <Text style={styles.text}>{movies}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
