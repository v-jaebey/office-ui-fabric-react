import {
  FontSizes,
  FontWeights,
  IRawStyle,
  ITheme,
  concatStyleSets,
  getFocusStyle
} from '../../Styling';
import { IContextualMenuStyles, IMenuItemStyles } from './ContextualMenu.types';

import { memoizeFunction } from '../../Utilities';

const MS_HIGHCONTRAST_ACTIVE = '@media screen and (-ms-high-contrast: active)';

const ContextualMenuItemHeight = '32px';

const getItemHighContrastStyles = memoizeFunction((): IRawStyle => {
  return {
    selectors: {
      [MS_HIGHCONTRAST_ACTIVE]: {
        backgroundColor: 'Highlight',
        borderColor: 'Highlight',
        color: 'HighlightText',
        MsHighContrastAdjust: 'none'
      }
    },
  };
});

export const getMenuItemStyles = memoizeFunction((
  theme: ITheme,
): IMenuItemStyles => {
  const { semanticColors, fonts } = theme;
  const ContextualMenuItemBackgroundHoverColor = semanticColors.menuItemBackgroundHovered;
  const ContextualMenuItemBackgroundSelectedColor = semanticColors.menuItemBackgroundChecked;

  const menuItemStyles: IMenuItemStyles = {
    item: [
      fonts.medium,
      {
        color: semanticColors.bodyText,
        position: 'relative',
        boxSizing: 'border-box',
      }],
    divider: {
      display: 'block',
      height: '1px',
      backgroundColor: semanticColors.bodyDivider,
      position: 'relative'
    },
    root: [
      getFocusStyle(theme),
      {
        font: 'inherit',
        color: 'inherit',
        backgroundColor: 'transparent',
        border: 'none',
        width: '100%',
        height: ContextualMenuItemHeight,
        lineHeight: ContextualMenuItemHeight,
        display: 'block',
        cursor: 'pointer',
        padding: '0px 6px',
        textAlign: 'left',
      },
    ],
    rootDisabled: {
      color: semanticColors.disabledBodyText,
      cursor: 'default',
      pointerEvents: 'none',
    },
    rootHovered: {
      backgroundColor: ContextualMenuItemBackgroundHoverColor,
      ...getItemHighContrastStyles()
    },
    rootFocused: {
      backgroundColor: ContextualMenuItemBackgroundHoverColor,
      ...getItemHighContrastStyles()
    },
    rootChecked: {
      ...getItemHighContrastStyles()
    },
    rootPressed: {
      backgroundColor: ContextualMenuItemBackgroundSelectedColor,
      ...getItemHighContrastStyles()
    },
    rootExpanded: {
      backgroundColor: ContextualMenuItemBackgroundSelectedColor,
      color: semanticColors.bodyTextChecked,
      fontWeight: FontWeights.semibold,
      ...getItemHighContrastStyles()
    },
    linkContent: {
      whiteSpace: 'nowrap',
      height: 'inherit',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '100%'
    },
    anchorLink: {
      padding: '0px 6px',
      textRendering: 'auto',
      color: 'inherit',
      letterSpacing: 'normal',
      wordSpacing: 'normal',
      textTransform: 'none',
      textIndent: '0px',
      textShadow: 'none',
      textDecoration: 'none',
      boxSizing: 'border-box'
    },
    label: {
      margin: '0 4px',
      verticalAlign: 'middle',
      display: 'inline-block',
      flexGrow: '1',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    icon: {
      display: 'inline-block',
      minHeight: '1px',
      maxHeight: ContextualMenuItemHeight,
      width: '14px',
      margin: '0 4px',
      verticalAlign: 'middle',
      flexShrink: '0',
    },
    iconColor: {
      color: semanticColors.menuIcon,
      selectors: {
        [MS_HIGHCONTRAST_ACTIVE]: {
          color: 'HighlightText',
        }
      }
    },
    checkmarkIcon: {
      color: semanticColors.bodySubtext,
      selectors: {
        [MS_HIGHCONTRAST_ACTIVE]: {
          color: 'HighlightText',
        }
      }
    },
    subMenuIcon: {
      height: ContextualMenuItemHeight,
      lineHeight: ContextualMenuItemHeight,
      textAlign: 'center',
      display: 'inline-block',
      verticalAlign: 'middle',
      flexShrink: '0',
      fontSize: FontSizes.mini
    },
    splitButtonFlexContainer: {
      display: 'flex',
      height: ContextualMenuItemHeight,
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center'
    },
    splitButtonSeparator: {}
  };

  return concatStyleSets(menuItemStyles);
});

export const getStyles = memoizeFunction((
  theme: ITheme,
): IContextualMenuStyles => {
  const { semanticColors, fonts } = theme;

  const ContextualMenuBackground = semanticColors.bodyBackground;
  const ContextualMenuHeaderColor = semanticColors.menuHeader;

  const styles: IContextualMenuStyles = {
    root: {
      backgroundColor: ContextualMenuBackground,
      minWidth: '180px',
    },
    container: {

    },
    list: {
      listStyleType: 'none',
      margin: '0',
      padding: '0',
      lineHeight: '0',
    },
    title: {
      fontSize: '16px',
      paddingRight: '14px',
      paddingLeft: '14px',
      paddingBottom: '5px',
      paddingTop: '5px',
      backgroundColor: theme.palette.neutralLight
    },
    header: [
      fonts.small,
      {
        fontWeight: FontWeights.semibold,
        color: ContextualMenuHeaderColor,
        background: 'none',
        border: 'none',
        height: ContextualMenuItemHeight,
        lineHeight: ContextualMenuItemHeight,
        cursor: 'default',
        padding: '0px 6px',
        userSelect: 'none',
        textAlign: 'left',
      }
    ],
  };
  return concatStyleSets(styles);
});