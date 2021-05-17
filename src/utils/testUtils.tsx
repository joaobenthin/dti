import React, { ReactElement } from 'react';
import {
  render,
  RenderAPI,
  RenderOptions,
} from '@testing-library/react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import store from '../store';

interface Props {
  children: any;
}

export const AllTheProviders = ({ children }: Props): JSX.Element => {
  return (
    <Provider store={store}>
      <PaperProvider>{children}</PaperProvider>
    </Provider>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions): RenderAPI =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';

export { customRender as render };
