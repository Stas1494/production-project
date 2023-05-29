import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TitleAndText = Template.bind({});

TitleAndText.args = {
    title: 'Title',
    text: 'Text lorem asdasd textasd asd comment',
};

export const OnlyTitle = Template.bind({});

OnlyTitle.args = {
    title: 'Title',
};

export const OnlyText = Template.bind({});

OnlyText.args = {
    text: 'Text lorem asdasd textasd asd comment',
};

export const TitleAndTextDark = Template.bind({});

TitleAndTextDark.args = {
    title: 'Title',
    text: 'Text lorem asdasd textasd asd comment',
};
TitleAndTextDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTitleDark = Template.bind({});

OnlyTitleDark.args = {
    title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTextDark = Template.bind({});

OnlyTextDark.args = {
    text: 'Text lorem asdasd textasd asd comment',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ErrorTheme = Template.bind({});

ErrorTheme.args = {
    title: 'Title',
    text: 'Text lorem asdasd textasd asd comment',
    theme: TextTheme.ERROR,
};

export const SizeM = Template.bind({});

SizeM.args = {
    title: 'Title',
    text: 'Text lorem asdasd textasd asd comment',
    size: TextSize.M,
};

export const SizeL = Template.bind({});

SizeL.args = {
    title: 'Title',
    text: 'Text lorem asdasd textasd asd comment',
    size: TextSize.L,
};

export const SizeS = Template.bind({});

SizeS.args = {
    title: 'Title',
    text: 'Text lorem asdasd textasd asd comment',
    size: TextSize.S,
};
