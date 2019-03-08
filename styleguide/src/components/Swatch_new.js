// @flow
import * as React from 'react';
import { View,Text} from 'react-sketchapp';
import type { Color } from '../processColor';

const SWATCH_WIDTH = 285;
const SWATCH_HEIGHT = 56;

type P = {
  name: string,
  color: Color,
};
const SwatchN = ({ color ,index,name}: P) => (
    <View
      name={name+"-"+index}
      style={{
        width: SWATCH_WIDTH,
        height: SWATCH_HEIGHT,
        backgroundColor: color,
        flexDirection: 'row',
      }}

    >
      <Text style={{width: 128,height: "20",color:index<6?"#000":"#fff",marginLeft:"12",marginTop:"18"}}>{name+"-"+index}</Text>
      <Text style={{width: 128,height: "20",color:index<6?"#000":"#fff",textAlign:"right",marginTop:"18"}}>{color}</Text>
  </View>
);

export default SwatchN;
