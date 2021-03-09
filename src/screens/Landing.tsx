/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import {decrement, increment, setValue} from '../reducers/CounterReducer';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation';
import { HttpServices } from '../services/http.services';


interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>,
  counter:number
}

declare const global: {HermesInternal: null | {}};
class Landing extends React.Component<Props> {

  
  //title:string = "test";
  httpService = new HttpServices();
  state = {
    title:"test"
  }
  getTitle() {
    let self = this;
    this.httpService.getURL().then((response)=>{
      console.log(response.data.title);
      this.setState(() => ({
        title: response.data.title
      }));

    })
  }
  
  componentDidMount() {
    this.getTitle();
  }

  render() {
    
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>App1 Step Oneeee</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                  screen and then come back to see your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>

              <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Title</Text>
                <Text style={styles.sectionDescription}>
                  Title: {this.state.title}
                </Text>
              </View>

              <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Counter: {this.props.counter}
                </Text>
              </View>
              <Button
                title="Increase Counter"
                onPress={() =>
                  this.props.increment()
                }
              />

              <Button
                title="derease Counter"
                onPress={() =>
                  this.props.decrement()
                }
              />

              <Button
                title="set Counter"
                onPress={() =>
                  this.props.setValue(88)
                }
              />
              
              <Button
                title="Go to Container Step 2"
                onPress={() =>
                  this.props.navigation.navigate('App1_Step2')
                }
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const mapStateToProps = (state:any) => {
  const { counter } = state.App1.App1
  return { counter }
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    setValue: (val:number) => {
      dispatch(setValue(val))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
``