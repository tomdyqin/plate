import { AutoformatRule, ELEMENT_PARAGRAPH } from '@udecode/plate';
import { formatText } from './_utils';

export const mathFraction: AutoformatRule[] = [
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '1/',
    trigger: '2',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '½'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '1/',
    trigger: '3',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '⅓'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '1/',
    trigger: '4',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '¼'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '1/',
    trigger: '5',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '⅕'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '1/',
    trigger: '6',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '⅙'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '1/',
    trigger: '7',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '⅐'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '1/',
    trigger: '8',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '⅛'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '1/',
    trigger: '9',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '⅑'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '1/1',
    trigger: '0',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '⅒'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '2/',
    trigger: '3',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '⅔'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '2/',
    trigger: '5',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '⅖'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '3/',
    trigger: '4',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '¾'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '3/',
    trigger: '5',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '⅗'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '3/',
    trigger: '8',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '⅜'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '4/',
    trigger: '5',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '⅘'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '5/',
    trigger: '6',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '⅚'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '5/',
    trigger: '8',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '⅝'),
  },
  {
    type: ELEMENT_PARAGRAPH,
    mode: 'block',
    markup: '7/',
    trigger: '8',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '⅞'),
  },
];
