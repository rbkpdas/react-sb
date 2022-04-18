import React from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';
import { Calculator } from '../components/Calculator';

const stories = storiesOf('Calculator Test', module);

stories.add('Calculator', () => {
  return <Calculator />;
});
