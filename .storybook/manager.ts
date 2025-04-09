import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import YourTheme from './YourTheme';
 
addons.setConfig({
  theme: YourTheme,
});