// import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  StatusBar,
  SafeAreaView,
  Image
} from 'react-native';

import blank from './assets/blank.png';
import a from './assets/a.png';
import b from './assets/b.png';
import c from './assets/c.png';
import d from './assets/d.png';
import e from './assets/e.png';
import f from './assets/f.png';
import g from './assets/g.png'; 
import h from './assets/h.png';
import ei from './assets/i.png';
import j from './assets/j.png';
import k from './assets/k.png';
import l from './assets/l.png';
import m from './assets/m.png';
import n from './assets/n.png';
import o from './assets/o.png';
import p from './assets/p.png';
import q from './assets/q.png';
import r from './assets/r.png';
import s from './assets/s.png';
import t from './assets/t.png'; 
import u from './assets/u.png';
import v from './assets/v.png';
import ex from './assets/x.png';
import y from './assets/y.png';
import z from './assets/z.png';

export default function App() {
  const [value, SetValue] = useState('');
  const [data, SetData] = useState([]);

  const handleChange = event => {
    SetValue(event);
    SetData(value.split(''))
    console.log('value is:',value)
    console.log('data is:',data)
  };



  return (
    <View style={styles.container1}>
      <Text>Hit space when done</Text>
      <TextInput
        multiline = {true}
        style={{ marginTop: 5, marginBottom: 15, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Tap and start typing!!"
        placeholderTextColor='black'
        value={value}
        onChangeText={handleChange}
      />
      <SafeAreaView style={styles.container2}>
        {
          data.map((x,i)=>{
            if(x === ' '){
            return(
             <Image source={blank} style={styles.tinyLogo} />
            )}
            if(x === 'a' || x === 'A' ){
            return(
              <Image source={a} style={styles.tinyLogo} />
            )}
            if(x === 'b' || x === 'B' ){
            return(
              <Image source={b} style={styles.tinyLogo} />
            )}
            if(x === 'c' || x === 'C' ){
            return(
              <Image source={c} style={styles.tinyLogo} />
            )}
            if(x === 'd' || x === 'D' ){
            return(
              <Image source={d} style={styles.tinyLogo} />
            )}
            if(x === 'e' || x === 'E' ){
            return(
              <Image source={e} style={styles.tinyLogo} />
            )}
            if(x === 'f' || x === 'F' ){
            return(
              <Image source={f} style={styles.tinyLogo} />
            )}
            if(x === 'g' || x === 'G' ){
            return(
              <Image source={g} style={styles.tinyLogo} />
            )}
            if(x === 'h' || x === 'H' ){
            return(
              <Image source={h} style={styles.tinyLogo} />
            )}
            if(x === 'i' || x === 'I' ){
            return(
              <Image source={ei} style={styles.tinyLogo} />
            )}
            if(x === 'j' || x === 'J' ){
            return(
              <Image source={j} style={styles.tinyLogo} />
            )}
            if(x === 'k' || x === 'K' ){
            return(
              <Image source={k} style={styles.tinyLogo} />
            )}
            if(x === 'l' || x === 'L' ){
            return(
              <Image source={l} style={styles.tinyLogo} />
            )}
            if(x === 'm' || x === 'M' ){
            return(
              <Image source={m} style={styles.tinyLogo} />
            )}
            if(x === 'n' || x === 'N' ){
            return(
              <Image source={n} style={styles.tinyLogo} />
            )}
            if(x === 'o' || x === 'O' ){
            return(
              <Image source={o} style={styles.tinyLogo} />
            )}
            if(x === 'p' || x === 'P' ){
            return(
              <Image source={p} style={styles.tinyLogo} />
            )}
            if(x === 'q' || x === 'Q' ){
            return(
              <Image source={q} style={styles.tinyLogo} />
            )}
            if(x === 'r' || x === 'R' ){
            return(
              <Image source={r} style={styles.tinyLogo} />
            )}
            if(x === 's' || x === 'S' ){
            return(
              <Image source={s} style={styles.tinyLogo} />
            )}
            if(x === 't' || x === 'T' ){
            return(
              <Image source={t} style={styles.tinyLogo} />
            )}
            if(x === 'u' || x === 'U' ){
            return(
              <Image source={u} style={styles.tinyLogo} />
            )}
            if(x === 'v' || x === 'V' ){
            return(
              <Image source={v} style={styles.tinyLogo} />
            )}
            if(x === 'x' || x === 'X' ){
            return(
              <Image source={ex} style={styles.tinyLogo} />
            )}
            if(x === 'y' || x === 'Y' ){
            return(
              <Image source={y} style={styles.tinyLogo} />
            )}
            if(x === 'z' || x === 'Z' ){
            return(
              <Image source={z} style={styles.tinyLogo} />
            )}
          })
        }
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:"95%",
    marginLeft:20
  },
  container2: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: StatusBar.currentHeight || 0,
  },
  tinyLogo: {
    width: 40,
    height: 30,
    marginBottom:20
  },
});
