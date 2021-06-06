import 'react-native-gesture-handler';
import React from 'react';
import Routes from './pages/Routes';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

FontAwesome.loadFont();
Ionicons.loadFont();
MaterialIcons.loadFont();

export default function App() {
  return <Routes />;
}
