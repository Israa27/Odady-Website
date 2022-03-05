import React from 'react';
import { Tab,Tabs, Container } from 'react-bootstrap';
import './tab.css';
export default function TabInf() {
  return <Container>
  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="الوصف" title="الوصف">
    <p>لا يوجد معلومات بعد  </p>
  </Tab>
  <Tab eventKey="معلومات اضافية" title="معلومات اضافية">
  <p>لا يوجد معلومات بعد </p>
  </Tab>
  <Tab eventKey="contact" title="مراجعات (0)" >
  <p>لا يوجد معلومات بعد </p>
  </Tab>
</Tabs>
</Container>
}
