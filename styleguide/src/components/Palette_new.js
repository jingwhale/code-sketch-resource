// @flow
import * as React from 'react';
import { View,Text} from 'react-sketchapp';
import SwatchN from './Swatch_new';

const SWATCH_WIDTH = 285;

type P = {
  colors: any,
};
const PaletteN = ({ name,colors}: P) => (

  <View
     name={name}
    style={{
      width: SWATCH_WIDTH,
      flexWrap: 'wrap',
      marginRight: 33,
      marginBottom: 64
    }}
  >
      <Text style={{width:SWATCH_WIDTH,textAlign:"center",marginBottom:16}}>{name}</Text>
      {Object.keys(colors).map(index => (
      <SwatchN color={colors[index]} index={+index+1} name={name}/>
    ))}
  </View>
);

export default PaletteN;
