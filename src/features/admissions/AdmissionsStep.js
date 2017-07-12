import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

const AdmissionsStep = () => (
  <div className="admissions-step">
    <Breadcrumb size='mini'>
      <Breadcrumb.Section active>Opportunities</Breadcrumb.Section>
      <Breadcrumb.Divider icon='right arrow' />
      <Breadcrumb.Section link>Cost</Breadcrumb.Section>
      <Breadcrumb.Divider icon='right arrow' />
      <Breadcrumb.Section link>Dates</Breadcrumb.Section>
      <Breadcrumb.Divider icon='right arrow' />
      <Breadcrumb.Section link>Apply</Breadcrumb.Section>
    </Breadcrumb>
  </div>
);

export default AdmissionsStep;