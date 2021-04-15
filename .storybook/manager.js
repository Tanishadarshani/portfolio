import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://tanishadarshani.com/icon.svg',
    brandTitle: 'Cody Bennett Components',
    brandUrl: 'https://tanishadarshani.com',
  },
});
