// Define Size and Device
export const size = {
  mobileS: 320,
  mobileM: 395,
  mobileL: 470,
  tablet: 768,
  laptop: 1024,
  laptopM: 1260,
  laptopL: 1440,
  desktop: 2100,
  desktopL: 2560,
};

export const device = {
  mobileS: `(max-width: ${size.mobileS}px)`,
  mobileM: `(max-width: ${size.mobileM}px)`,
  mobileL: `(max-width: ${size.mobileL}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  laptopM: `(max-width: ${size.laptopM}px)`,
  laptopL: `(max-width: ${size.laptopL}px)`,
  desktop: `(max-width: ${size.desktop}px)`,
  desktopL: `(max-width: ${size.desktopL}px)`,
};

// Define Margin
export const structure = {
  PADDING: {
    DESKTOP: {
      TOP: 100,
      RIGHT: 48,
      BOTTOM: 100,
      LEFT: 48,
    },
    TABLET: {
      TOP: 90,
      RIGHT: 32,
      BOTTOM: 90,
      LEFT: 32,
    },
    MOBILE: {
      TOP: 90,
      RIGHT: 16,
      BOTTOM: 90,
      LEFT: 16,
    },
  },
};

// Define Globals
const GLOBALS = {
  LINKS: {
    IOS_APP:
      'https://apps.apple.com/app/ethereum-push-service-epns/id1528614910',
    ANDROID_APP:
      'https://play.google.com/store/apps/details?id=io.epns.epns&hl=mr&gl=US',
  },

  // For Async Storage --> Represents Key and some Constants
  STORAGE: {},

  CONSTANTS: {
    LEFT_BAR_WIDTH: 260,
  },

  HEADER: {
    HEIGHT: 78,
    OUTER_MARGIN: {
      DESKTOP: {
        TOP: 44,
        LEFT: 0,
        BOTTOM: 0,
        RIGHT: 0,
      },
      TABLET: {
        TOP: 24,
        LEFT: 0,
        BOTTOM: 0,
        RIGHT: 0,
      },
      MOBILE: {
        TOP: 8,
        LEFT: 0,
        BOTTOM: 0,
        RIGHT: 0,
      },
    },
    OUTER_PADDING: {
      DESKTOP: {
        TOP: 0,
        LEFT: 16,
        BOTTOM: 0,
        RIGHT: 16,
      },
      TABLET: {
        TOP: 16,
        LEFT: 16,
        BOTTOM: 16,
        RIGHT: 16,
      },
      MOBILE: {
        TOP: 12,
        LEFT: 16,
        BOTTOM: 12,
        RIGHT: 16,
      },
    },
  },

  STRUCTURE: {
    MAX_WIDTH: size.laptopM,
    PADDING: {
      DESKTOP: `${structure.PADDING.DESKTOP.TOP}px ${structure.PADDING.DESKTOP.RIGHT}px ${structure.PADDING.DESKTOP.BOTTOM}px ${structure.PADDING.DESKTOP.LEFT}px`,
      TABLET: `${structure.PADDING.TABLET.TOP}px ${structure.PADDING.TABLET.RIGHT}px ${structure.PADDING.TABLET.BOTTOM}px ${structure.PADDING.TABLET.LEFT}px`,
      MOBILE: `${structure.PADDING.MOBILE.TOP}px ${structure.PADDING.MOBILE.RIGHT}px ${structure.PADDING.MOBILE.BOTTOM}px ${structure.PADDING.MOBILE.LEFT}px`,

      FLUID: {
        DESKTOP: `${structure.PADDING.DESKTOP.TOP}px 0 ${structure.PADDING.DESKTOP.BOTTOM}px 0`,
        TABLET: `${structure.PADDING.TABLET.TOP}px 0 ${structure.PADDING.TABLET.BOTTOM}px 0`,
        MOBILE: `${structure.PADDING.MOBILE.TOP}px 0 ${structure.PADDING.MOBILE.BOTTOM}px 0`,
      },

      VERTICAL_FLUID: {
        DESKTOP: `0 ${structure.PADDING.DESKTOP.RIGHT}px 0 ${structure.PADDING.DESKTOP.LEFT}px`,
        TABLET: `0 ${structure.PADDING.TABLET.RIGHT}px 0 ${structure.PADDING.TABLET.LEFT}px`,
        MOBILE: `0 ${structure.PADDING.MOBILE.RIGHT}px 0 ${structure.PADDING.MOBILE.LEFT}px`,
      },
    },
  },

  ADJUSTMENTS: {
    PADDING: {
      HUGE: '60px',
      BIG: '40px',
      SMALL: '20px',
    },
    MARGIN: {
      VERTICAL: '30px',
      HORIZONTAL: '20px',
    },
    RADIUS: {
      LARGE: '48px',
      MID: '32px',
      SMALL: '16px',
    },
    BLUR: {
      DEFAULT: 5,
      HEADER: 10,
    },
    FONT: {
      PRIMARY_HEADING: {
        DESKTOP: '62px',
        TABLET: '42px',
        MOBILE: '34px',
      },
      HEADING: {
        DESKTOP: '32px',
        TABLET: '28px',
        MOBILE: '26px',
      },
      HIGHLIGHTED_TEXT: {
        DESKTOP: '48px',
        TABLET: '40px',
        MOBILE: '32px',
      },
      NORMAL_TEXT: {
        DESKTOP: '20px',
        TABLET: '16px',
        MOBILE: '14px',
      },
    },
  },

  COLORS: {
    PRIMARY_COLOR: '#DD44B9',
    HIGHLIGHT: '#DD44B9',
    FONT_LIGHT: '#FFF',
    FONT_LIGHT_SECONDARY: 'FFF',
    FONT_DARK: '#121315',
    FONT_DARK_SECONDARY: '#303C5E',
    BG_LIGHT: '#FFF',
    // BG_DARK: "#121315",
    BG_DARK: '#0D0D0F',
    BG_BLACK: '#000',
    HEADER_BG_LIGHT: '#FFFFFFCC',
    HEADER_BG_DARK: '#121315CC',
    BG_DARK_SECONDARY: '#2A2A39',
    BG_LIGHT_SECONDARY: '#F0DCFF',
    BG_HIGHLIGHTED_LIGHT_TRANSPARENT: 'rgba(219, 171, 255, 0.7);',
    BG_HIGHLIGHTED_MID_TRANSPARENT: 'rgba(235, 216, 249, 0.5);',
    BG_GRADIENT_PRIMARY:
      'linear-gradient(251.72deg, #DD44B9 14.29%, #8B6FD9 86.35%);',
  },
};
export default GLOBALS;
