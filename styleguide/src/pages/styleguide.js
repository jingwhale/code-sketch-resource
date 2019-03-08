// @flow
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import * as React from 'react';

import { render, TextStyles, View ,Page,Artboard,Text} from 'react-sketchapp';
import designSystem, {generatec, presetPalettes} from '../designSystem';
import type { DesignSystem } from '../designSystem';

import PaletteN from '../components/Palette_new';
import TypeSpecimen from '../components/TypeSpecimen';


const ARTBORD_WIDTH = 1440;

const Styleguide = () => {
    return (
        <Page name="style" style={{width: 1000000000,flexDirection: 'row',flexWrap: 'wrap',marginLeft:100}}>
            <Artboard name="Color" style={{width: ARTBORD_WIDTH}}>
                <View name="header" style={{width: ARTBORD_WIDTH,height:400,backgroundColor:"#1890FF"}}>
                    <Text style={{fontSize:96,color:"#fff",marginTop:100,marginBottom:20,marginLeft:100}}>色彩体系-调色板</Text>
                    <Text style={{width: 1200,fontSize:30,color:"#fff",marginLeft:100}}>
                        Ant Design 系统级色彩体系同样源于『自然』的设计价值观，形成了特有的 12 色，并对 12 个颜色进行了衍生。在中性色板的定义上，则是平衡了可读性、美感以及可用性。
                    </Text>
                </View>

                <View name="body">
                    <View name="基础色板">
                        <View style={{width: 1200,marginLeft:100,marginBottom:80}}>
                            <Text style={{fontSize:32,marginTop:100,marginBottom:16}}>基础色板</Text>
                            <Text style={{width: 1200,fontSize:24}}>基础色板共计 120 个颜色，包含 12 个主色以及衍生色。这些颜色基本可以满足中后台设计中对于颜色的需求。</Text>
                        </View>
                        <View style={{width: ARTBORD_WIDTH,flexDirection: 'row',flexWrap: 'wrap',marginLeft:100}}>
                            {Object.keys(designSystem.presetPalettes).map(name => (
                                <PaletteN key={name} name={name.substring(0, 1).toUpperCase() + name.substring(1)} colors={designSystem.presetPalettes[name]} />
                            ))}
                        </View>
                    </View>
                    <View name="中性色板" style={{height: 1080}}>
                        <View style={{width: 1200,marginLeft:100,marginBottom:100}}>
                            <Text style={{fontSize:32,marginTop:100,marginBottom:16}}>中性色板</Text>
                            <Text style={{width: 1200,fontSize:24}}>
                                中性色包含了黑、白、灰。在蚂蚁中后台的网页设计中被大量使用到，合理的选择中性色能够令页面信息具备良好的主次关系，助力阅读体验。Ant Design 的中性色板一共包含了从白到黑的 10 个颜色。</Text>
                        </View>
                        <View style={{width: ARTBORD_WIDTH,flexDirection: 'row',flexWrap: 'wrap',marginLeft:100}}>
                            {Object.keys(designSystem.presetPalettesGrey).map(name => (
                                <PaletteN key={name} name={name.substring(0, 1).toUpperCase() + name.substring(1)} colors={designSystem.presetPalettesGrey[name]} />
                            ))}
                        </View>
                    </View>
                </View>
            </Artboard>

            <Artboard name="Text" style={{width: ARTBORD_WIDTH,height:1000,flexDirection: 'row',flexWrap: 'wrap',marginLeft:100}}>
                <View name="header" style={{width: ARTBORD_WIDTH,height:400,backgroundColor:"#1890FF"}}>
                    <Text style={{fontSize:96,color:"#fff",marginTop:100,marginBottom:20,marginLeft:100}}>色彩体系-文字</Text>
                    <Text style={{width: 1200,fontSize:30,color:"#fff",marginLeft:100}}>
                        Ant Design 系统级色彩体系同样源于『自然』的设计价值观，形成了特有的 12 色，并对 12 个颜色进行了衍生。在中性色板的定义上，则是平衡了可读性、美感以及可用性。
                    </Text>
                </View>
                <View name="body">
                    {Object.keys(designSystem.fonts).map(name => (
                        <TypeSpecimen key={name} name={name} style={TextStyles.get(name)} />
                    ))}
                </View>
            </Artboard>
        </Page>
    );
}

export default Styleguide;
