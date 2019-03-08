// @flow
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import * as React from 'react';

import { render, TextStyles, View ,Page,Artboard,Text,Image} from 'react-sketchapp';
import designSystem, {generatec, presetFont, presetPalettes} from '../designSystem';
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

            <Artboard name="Text" style={{width: ARTBORD_WIDTH,marginLeft:260}}>
                <View name="header" style={{width: ARTBORD_WIDTH,height:400,backgroundColor:"#1890FF"}}>
                    <Text style={{fontSize:96,color:"#fff",marginTop:100,marginBottom:20,marginLeft:100}}>色彩体系-文字</Text>
                    <Text style={{width: 1200,fontSize:30,color:"#fff",marginLeft:100}}>
                        用户通过文本来理解内容和完成工作，科学的字体系统将大大提升用户的阅读体验及工作效率,Ant Design 字体方案，基于『动态秩序』设计原则，结合自然对数以及音律的规则。
                    </Text>
                </View>
                <View name="body">
                    <View name="字体家族" style={{marginBottom:100}}>
                        <View style={{width: 1200,marginLeft:100,marginBottom:40}}>
                            <Text style={{fontSize:32,marginTop:100,marginBottom:16}}>字体家族</Text>
                            <Text style={{width: 1200,fontSize:24}}>
                                优秀的字体系统首先是要选择合适的字体家族。Ant Design 的字体家族中优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示。
                            </Text>
                        </View>
                        <View style={{width: 1200,flexWrap: 'wrap',marginLeft:100,backgroundColor:"#F2F4F5",fontSize:22,padding:10}}>
                            <Text style={{}}>font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif,
                                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
                            </Text>
                        </View>
                    </View>

                    <View name="主字体">
                        <View style={{width: 1200,marginLeft:100,marginBottom:100}}>
                            <Text style={{fontSize:32,marginTop:100,marginBottom:16}}>主字体</Text>
                            <Text style={{width: 1200,fontSize:24}}>
                                我们基于电脑显示器阅读距离（50 cm）以及最佳阅读角度（0.3）对 主字体进行了，从原先的 12 上升至 14的调整，以保证在多数常用显示器上的用户阅读效率最佳。
                            </Text>
                            <Image source="https://gw.alipayobjects.com/zos/rmsportal/yriUFbqOPtVniYYiikfb.png"
                                resizeMode="center"
                                style={{
                                    height: 211,
                                    width: 680
                                }}></Image>
                        </View>
                    </View>

                    <View name="字阶与行高">
                        <View style={{width: 1200,marginLeft:100,marginBottom:100}}>
                            <Text style={{fontSize:32,marginTop:100,marginBottom:16}}>字阶与行高</Text>
                            <Text style={{width: 1200,fontSize:24}}>
                                字阶和行高决定着一套字体系统的动态与秩序之美。字阶是指一系列有规律的不同尺寸的字体。行高可以理解为一个包裹在字体外面的无形的盒子。
                            </Text>
                            <Image source="https://gw.alipayobjects.com/zos/rmsportal/xpykKKFJQorFJltdXkie.png"
                                   resizeMode="center"
                                   style={{
                                       height: 163,
                                       width: 800,
                                   }}></Image>
                            <Text style={{width: 1200,fontSize:24,marginTop:20,marginBottom:16}}>
                                Ant Design 受到 5 音阶以及自然律的启发定义了 10 个不同尺寸的字体以及与之相对应的行高。
                            </Text>
                            <View style={{width: ARTBORD_WIDTH,flexDirection: 'row',flexWrap: 'wrap'}}>
                                {Object.keys(designSystem.presetFont.size).map(index => (
                                    <Text style={{width: index>0?80:200,textAlign:"center",fontSize:28}}>{designSystem.presetFont.size[index]}</Text>
                                ))}
                            </View>
                            <View style={{width: ARTBORD_WIDTH,flexDirection: 'row',flexWrap: 'wrap',marginTop:10}}>
                                {Object.keys(designSystem.presetFont.height).map(index => (
                                    <Text style={{width: index>0?80:200,textAlign:"center",fontSize:28}}>{designSystem.presetFont.height[index]}</Text>
                                ))}
                            </View>
                        </View>
                    </View>
                    <View name="字重">
                        <View style={{width: 1200,marginLeft:100,marginBottom:100}}>
                            <Text style={{fontSize:32,marginTop:100,marginBottom:16}}>字重</Text>
                            <Text style={{width: 1200,fontSize:24}}>
                                字重的选择同样基于秩序、稳定、克制的原则。多数情况下，只出现 regular 以及 medium 的两种字体重量，分别对应代码中的 400 和 500。在英文字体加粗的情况下会采用 semibold 的字体重量，对应代码中的 600。
                            </Text>
                        </View>
                    </View>
                    <View name="字体颜色">
                        <View style={{width: 1200,marginLeft:100,marginBottom:10}}>
                            <Text style={{fontSize:32,marginTop:100,marginBottom:16}}>字体颜色</Text>
                            <Text style={{width: 1200,fontSize:24,marginBottom:40}}>
                                文本颜色如果和背景颜色太接近就会难以阅读。考虑到无障碍设计的需求，我们参考了 WCAG 的标准，将正文文本、标题和背景色之间保持在了 7:1 以上的 AAA 级对比度。
                            </Text>
                            <Image source="https://gw.alipayobjects.com/zos/rmsportal/jPbEabWakVQHosHxhQPR.png"
                                   resizeMode="center"
                                   style={{
                                       height: 451,
                                       width: 686,
                                   }}></Image>
                        </View>
                    </View>
                </View>
            </Artboard>
        </Page>
    );
}

export default Styleguide;
