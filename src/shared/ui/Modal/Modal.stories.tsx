import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Это не финальное состояние модального окна, в ходе всего курса мы будем его менять рефакторить. Также прошу заметить, что переопределен\n',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Это не финальное состояние модального окна, в ходе всего курса мы будем его менять рефакторить. Также прошу заметить, что переопределен\n',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
