// @flow
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import * as React from 'react';
import { render } from 'react-sketchapp';
import Styleguide from './pages/styleguide';


export default (context: any) => {

    render(<Styleguide />, context.document.currentPage());

}
