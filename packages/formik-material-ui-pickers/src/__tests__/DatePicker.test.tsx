import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import renderer from 'react-test-renderer';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { DatePicker } from '../DatePicker';

test('DatePicker Renders Correctly', () => {
  const component = renderer.create(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik initialValues={{test: new Date('2020-01-01')}} onSubmit={() => null}>
        <Form>
          <Field name="test" label="Date" component={DatePicker} />
        </Form>
      </Formik>
    </MuiPickersUtilsProvider>
  );

  expect(component.toJSON()).toMatchSnapshot();
});