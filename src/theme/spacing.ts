/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
export const spacing = {
  xxxs: 8,
  xxs: 16,
  xs: 24,
  sm: 32,
  md: 48,
  lg: 64,
  xl: 80,
  xxl: 96,
  xxxl: 120,
  huge: 148,
} as const;

export type Spacing = keyof typeof spacing;
