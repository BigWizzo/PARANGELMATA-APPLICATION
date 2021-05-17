import React from 'react';
import renderer from 'react-test-renderer';
import CountryList from '../components/CountryList';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

test('should render the combined components to the App component', () => {
  const component = renderer.create(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CountryList />
      </PersistGate>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
