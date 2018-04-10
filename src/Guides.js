import React from 'react';
import guidesData from './guidebook.json';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function Guides(props){
    const guideCards = guidesData.map((guide) =>
  <Col sm="4">
        <Card body outline color="primary" className="mt-3 px-2 py-4">
          <CardTitle>{guide.title}</CardTitle>
          <CardText><em>{guide.type} guide</em> — ${guide.price}</CardText>
          <Button color="success">Buy Guide</Button>
        </Card>
      </Col>
);
    return(
    <Row className="mx-3 mb-5">
      {guideCards}
    </Row>
  );
};

export default Guides;
