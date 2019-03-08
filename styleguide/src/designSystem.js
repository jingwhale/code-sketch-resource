import processColor from './processColor';
import type { Color } from './processColor';
import { generate, presetPalettes } from '@ant-design/colors';


export const colors = generate('#1890ff');

export const presetPalettesGrey = {};


presetPalettesGrey.grey = presetPalettes.grey;

delete presetPalettes["grey"];

//字体与行高
export const presetFont = {
    size: ["Font Size",12,14,16,20,24,30,38,46,56,68],
    height: ["Line Height",20,22,24,28,32,38,46,54,64,76]
};


const typeSizes = [80, 48, 36, 24, 20, 16];

export const spacing = 16;

const fontFamilies = {
    display: 'Helvetica',
    body: 'Georgia',
};

const fontWeights = {
    regular: 'regular',
    bold: 'bold',
};

export const fonts = {
    Headline: {
        color: colors.Night,
        fontSize: typeSizes[0],
        fontFamily: fontFamilies.display,
        fontWeight: fontWeights.bold,
        lineHeight: 80,
    },
    'Title 1': {
        color: colors.Night,
        fontSize: typeSizes[2],
        fontFamily: fontFamilies.display,
        fontWeight: fontWeights.bold,
        lineHeight: 48,
    },
    'Title 2': {
        color: colors.Night,
        fontSize: typeSizes[3],
        fontFamily: fontFamilies.display,
        fontWeight: fontWeights.bold,
        lineHeight: 36,
    },
    'Title 3': {
        color: colors.Night,
        fontSize: typeSizes[4],
        fontFamily: fontFamilies.body,
        fontWeight: fontWeights.regular,
        lineHeight: 24,
    },
    Body: {
        color: colors.Night,
        fontSize: typeSizes[5],
        fontFamily: fontFamilies.body,
        fontWeight: fontWeights.regular,
        lineHeight: 24,
        marginBottom: 24,
    },
};

export default {
    colors,
    fonts,
    spacing,
    presetPalettes,
    presetPalettesGrey,
    presetFont
};

export type DesignSystem = {
    fonts: any,
    colors: { [key: string]: Color },
};
