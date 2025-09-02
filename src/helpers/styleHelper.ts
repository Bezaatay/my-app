import {ColorValue, FlexAlignType, FlexStyle, ViewStyle} from 'react-native';
import colors from './color';

const fontFamily = {
  regular: 'DMSans-Regular',
  italic: 'DMSans-Italic',
  medium: 'DMSans-Medium',
  mediumItalic: 'DMSans-MediumItalic',
  bold: 'DMSans-Bold',
  boldItalic: 'DMSans-BoldItalic',
};

const flexBox = (
  flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined = undefined,
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined = undefined,
  alignItems: FlexAlignType | undefined = undefined,
  flexWrap: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined = undefined,
): FlexStyle => {
  return {
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
  };
};

const borderBox = (borderColor = colors.grey410, borderRadius = 0, borderWidth = 1): ViewStyle => {
  return {
    borderWidth: borderWidth,
    borderColor,
    borderRadius: borderRadius,
  };
};

const textFont = (
  fontSize: number | undefined = undefined,
  fontColor: ColorValue | undefined = colors.black,
  fontWeight: 'regular' | 'medium' | 'bold' = 'regular',
  fontStyle: 'normal' | 'italic' = 'normal',
  lineHeight: number | undefined = undefined,
): object => {
  const turnItem: {
    fontSize: number;
    fontFamily: string;
    color?: ColorValue | undefined;
    fontStyle?: string | undefined;
    lineHeight?: number | undefined;
    fontWeight?: string | undefined;
  } = {
    color: fontColor,
    fontStyle: fontStyle,
    fontSize: fontSize ? fontSize : 14,
    lineHeight: lineHeight ? lineHeight : undefined,
    fontFamily: fontStyle === 'normal' ? fontFamily.regular : fontFamily.italic,
  };

  switch (fontWeight) {
    case 'bold':
      turnItem.fontFamily = fontStyle === 'normal' ? fontFamily.bold : fontFamily.boldItalic;
      turnItem.fontWeight = 'bold';
      break;
    case 'medium':
      turnItem.fontFamily = fontStyle === 'normal' ? fontFamily.medium : fontFamily.mediumItalic;
      turnItem.fontWeight = '500';
      break;
    case 'regular':
      turnItem.fontFamily = turnItem.fontFamily = fontStyle === 'normal' ? fontFamily.regular : fontFamily.italic;
      turnItem.fontWeight = 'normal';
      break;
    default:
      turnItem.fontFamily = turnItem.fontFamily = fontStyle === 'normal' ? fontFamily.regular : fontFamily.italic;
  }

  return turnItem;
};

export {borderBox, flexBox, textFont};
