import React from 'react';
import CountryForm from '../components/CountryForm';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

test('should render the submit form to the App DOM', () => {
  const component = renderer.create(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CountryForm />
      </PersistGate>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
