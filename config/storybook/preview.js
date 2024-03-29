import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        default: 'dark',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#ddd9de' },
            { name: 'dark', class: Theme.DARK, color: '#06063f' },
            { name: 'orange', class: Theme.ORANGE, color: '#c54e0d' },
        ],
    },
};

export const decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT), SuspenseDecorator];
