const selectFieldConfig = [
  {
    name: 'multiple',
    fieldType: 'select',
    title: 'Is multiple:',
    defaultValue: 'no',
    options: [
      {
        value: 'no',
        content: 'no',
      },
      {
        value: 'yes',
        content: 'yes',
      },
    ]
  },
  {
    name: 'options',
    fieldType: 'options',
    title: 'options',
  }
];

export default selectFieldConfig;
