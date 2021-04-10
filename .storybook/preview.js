import 'storybook-formik/register';
import React from 'react';
import { Box } from '@material-ui/core';
import * as NextImage from 'next/image';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withNextRouter } from 'storybook-addon-next-router';
import { ThemeProvider } from '../src/utils/theme';

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const withGlobal = (story) => (
  <ThemeProvider>
    <Box p={4}>{story()}</Box>
  </ThemeProvider>
);

addDecorator(withA11y);
addDecorator(withNextRouter);
addDecorator(withGlobal);
