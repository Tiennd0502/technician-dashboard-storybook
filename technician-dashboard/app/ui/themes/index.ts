import { extendTheme } from '@chakra-ui/react';

import { radii, colors, fonts, fontSizes, fontWeights, sizes } from './bases';
import { Button, Heading, Text, Avatar } from './components';

export const configThemes = {
  ...extendTheme({
    semanticTokens: {
      fonts,
      fontSizes,
      fontWeights,
      colors,
      radii,
      sizes,
    },
    styles: {
      global: {
        'html, body': {
          fontFamily: 'primary',
        },
      },
    },
    components: {
      Avatar,
      Button,
      Heading,
      Text,
    },
  }),
};
