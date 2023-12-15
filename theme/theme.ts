import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const styles = {
  global: (props: StyleFunctionProps) => ({
    ':root': {
      bgColor: mode('root.light', 'root.dark')(props)
    },
    body: {
      w: '100vw',
      minH: '100vh'
    },
    main: {
      display: 'flex',
      flexDir: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      p: { base: 0, md: 16 },
      w: 'full',
      h: 'full',
      fontFamily: 'sans-serif',
      userSelect: 'none'
    }
  })
};

const components = {
  Heading: {
    baseStyle: {
      fontFamily: 'Menlo',
      fontWeight: 'bold',
      wordBreak: 'break-all'
    },
    variants: {
      error: {
        as: 'h1',
        color: 'errorText',
        textAlign: 'center'
      },
      page: {
        as: 'h1',
        mr: '4',
        fontSize: '3xl'
      },
      section: {
        as: 'h2',
        mr: '2',
        fontSize: '2xl'
      },
      line: {
        as: 'h3',
        mb: '2',
        fontSize: 'xl'
      }
    }
  },
  Text: {
    baseStyle: {
      fontFamily: 'sans-serif'
    },
    variants: {
      navSubText: (props: StyleFunctionProps) => ({
        color: mode('navSubText.light', 'navSubText.dark')(props)
      })
    }
  },
  Link: {
    variants: {
      error: {
        as: 'button',
        borderRadius: 'lg',
        px: '4',
        py: '3',
        bgColor: 'errorBtn.default',
        _hover: { textDecor: 'none', bgColor: 'errorBtn.hover' }
      }
    }
  },
  Spinner: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode('spinner.light', 'spinner.dark')(props)
    }),
    variants: {
      asset: (props: StyleFunctionProps) => ({
        borderColor: mode('asset.light', 'asset.dark')(props)
      })
    }
  },
  ErrorBox: {
    baseStyle: {
      display: 'flex',
      flexDir: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10',
      p: '4',
      w: '100vw',
      h: '100vh',
      bgColor: 'errorBg'
    }
  },
  SidebarBox: {
    baseStyle: (props: StyleFunctionProps) => ({
      pos: 'fixed',
      display: 'flex',
      flexDir: 'column',
      justifyContent: 'space-between',
      border: { base: 0, md: '2px' },
      borderRadius: { base: 0, md: 'lg' },
      borderColor: { md: mode('border.light', 'border.dark')(props) },
      pt: '4',
      pb: '4',
      w: { base: 'full', md: 60 },
      h: { base: 'full', md: 'auto' },
      bgColor: mode('body.light', 'body.dark')(props),
      transition: '3s ease'
    })
  },
  NavBox: {
    baseStyle: (props: StyleFunctionProps) => ({
      display: 'flex',
      flexDir: 'row',
      alignItems: 'center',
      mx: '4',
      my: '2',
      borderRadius: 'lg',
      px: '4',
      py: '2',
      role: 'group',
      cursor: 'pointer',
      bgColor: mode('body.light', 'body.dark')(props)
    }),
    variants: {
      default: (props: StyleFunctionProps) => ({
        _hover: { bgColor: mode('nav.light', 'nav.dark')(props) }
      }),
      current: (props: StyleFunctionProps) => ({
        bgColor: mode('nav.light', 'nav.dark')(props),
        _hover: { bgColor: mode('nav.light', 'nav.dark')(props) }
      }),
      mobile: (props: StyleFunctionProps) => ({
        justifyContent: 'space-between',
        ml: { base: 0, md: 64 },
        mr: 0,
        my: 0,
        px: { base: 4, md: 4 },
        py: 0,
        borderX: { base: 0, md: '2px' },
        borderTop: { base: 0, md: '2px' },
        borderBottom: '2px',
        borderRadius: { base: 0, md: 'lg' },
        borderColor: {
          base: mode('border.light', 'border.dark')(props),
          md: mode('border.light', 'border.dark')(props)
        },
        h: '20',
        cursor: 'auto'
      }),
      body: (props: StyleFunctionProps) => ({
        flexDir: 'column',
        justifyContent: { base: 'space-between', md: 'flex-end' },
        mt: { base: 0, md: 4 },
        mr: 0,
        mb: 0,
        ml: { base: 0, md: 64 },
        border: { base: 0, md: '2px' },
        borderRadius: { base: 0, md: 'lg' },
        borderColor: {
          base: mode('border.light', 'border.dark')(props),
          md: mode('border.light', 'border.dark')(props)
        },
        py: '4',
        cursor: 'auto'
      })
    }
  },
  MenuItemBox: {
    baseStyle: (props: StyleFunctionProps) => ({
      bgColor: mode('body.light', 'body.dark')(props),
      _selected: { bgColor: mode('border.light', 'border.dark')(props) },
      _hover: { bgColor: mode('border.light', 'border.dark')(props) }
    })
  },
  ContainerBox: {
    baseStyle: {
      display: 'flex',
      flexDir: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      w: 'full'
    },
    variants: {
      page: {
        p: '4'
      },
      section: {
        my: '4'
      },
      line: {
        my: '4',
        _last: { mb: '0' }
      }
    }
  },
  HeadingBox: {
    baseStyle: {
      display: 'flex',
      flexDir: { base: 'column', md: 'row' }
    },
    variants: {
      page: {
        mb: '4',
        w: 'full'
      },
      section: {
        mb: '2'
      }
    }
  },
  ContentBox: {
    baseStyle: (props: StyleFunctionProps) => ({
      border: '1px',
      borderRadius: 'lg',
      borderColor: mode('border.light', 'border.dark')(props),
      p: '4',
      w: 'full'
    })
  },
  IconTagBox: {
    baseStyle: (props: StyleFunctionProps) => ({
      display: 'flex',
      justify: 'flex-start',
      align: 'center',
      gap: '1',
      borderRadius: 'lg',
      px: '2',
      py: '1',
      backgroundColor: mode('bg.light', 'bg.dark')(props)
    }),
    variants: {
      date: {
        mb: { base: '2', md: '4' }
      },
      location: {
        mb: '4'
      }
    }
  },
  SpinnerBox: {
    baseStyle: {
      display: 'flex',
      justify: 'center',
      align: 'center',
      p: '4',
      w: 'full'
    },
    variants: {
      line: {
        my: '4',
        p: 0,
        _last: { mb: '0' }
      },
      asset: {
        borderRadius: 'lg'
      }
    }
  }
};

const colors = {
  root: {
    light: '#FFFFF0', // yellow.50
    dark: '#171923' // gray.900
  },
  error: '#F56565', // red.400
  errorText: '#FFF',
  errorBtn: {
    default: '#CBD5E0', // gray.300
    hover: '#A0AEC0' // gray.400
  },
  nav: {
    light: '#F6E05E', // yellow.300
    dark: '#2D3748' // gray.700
  },
  navSubText: {
    light: '#4A5568', // gray.600
    dark: '#A0AEC0' // gray.400
  },
  btnBg: {
    light: '#FEFCBF', // yellow.100
    dark: '#4A5568' // gray.600
  },
  btnHover: {
    light: '#F6E05E', // yellow.300
    dark: '#718096' // gray.500
  },
  body: {
    light: '#FFF',
    dark: '#171923' // gray.900
  },
  border: {
    light: '#F6E05E', // yellow.300
    dark: '#718096' // gray.500
  },
  bg: {
    light: '#FEFCBF', // yellow.100
    dark: '#4A5568' // gray.600
  },
  link: {
    light: '#319795', // teal.500
    dark: '#EDF2F7' // gray.100
  },
  asset: {
    light: '#F7FAFC', // gray.50
    dark: '#A0AEC0' // gray.400
  },
  assetBg: {
    light: '#E2E8F0', // gray.200
    dark: '#4A5568' // gray.600
  },
  spinner: {
    light: '#D69E2E', // yellow.500
    dark: '#718096' // gray.500
  }
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
};

const theme = extendTheme({
  styles,
  components,
  colors,
  config
});

export default theme;
