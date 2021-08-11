/** @jsx jsx */

import { jsx } from '@udecode/plate-test-utils';
import { withReact } from 'slate-react';
import { optionsAutoformat } from '../../../../../../docs/src/live/config/pluginOptions';
import { withAutoformat } from '../../../createAutoformatPlugin';

jsx;

const input = (
  <editor>
    <hp>
      -
      <cursor />
      hello
    </hp>
  </editor>
) as any;

const output = (
  <editor>
    <hul>
      <hli>
        <hlic>hello</hlic>
      </hli>
    </hul>
  </editor>
) as any;

it('should autoformat', () => {
  const editor = withAutoformat(optionsAutoformat)(withReact(input));

  editor.insertText(' ');

  expect(input.children).toEqual(output.children);
});
