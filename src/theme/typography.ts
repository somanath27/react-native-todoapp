import {Platform} from 'react-native';

const fonts = {
  inter: {
    // Cross-platform Google font.
    light: 'Inter-Light',
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    semiBold: 'Inter-SemiBold',
    bold: 'Inter-Bold',
  },
};

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.inter,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({
    ios: fonts.inter,
    android: fonts.inter,
  }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ios: fonts.inter, android: fonts.inter}),
};
