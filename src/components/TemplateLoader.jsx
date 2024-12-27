import React from 'react';
import { observer } from 'mobx-react-lite';
import template from '../data/template.json';

export const TemplateLoader = observer(({ store }) => {
  const loadTemplate = () => {
    // Load template into store
    store.loadJSON(template);
  };

  React.useEffect(() => {
    loadTemplate();
  }, []);

  return null;
});