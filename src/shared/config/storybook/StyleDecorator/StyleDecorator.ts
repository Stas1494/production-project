// eslint-disable-next-line st-import-plugin/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (story: ()=> Story) => story();
