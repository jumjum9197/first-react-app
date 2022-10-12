import { Fragment } from "react";
import {Col, Container,  Row, Card} from "react-bootstrap";
import './App.css';
import Image from "./assets/img/images";
import Img from "./components/myimg"

function App() {
  return (
    <Fragment>
    <Container  as={"section"} fluid>
    <Row className="my-row">
      <Col className="col-lg-6 col-sm-6 col-md-6 col-xs-6 col xxl-6 d-flex justify-content-center align-items-center">
      <div>
        <div className="circle">
          <Img src={Image.phone} width='60' height={'60'} className="phone"></Img>
        </div>
        <Img src={Image.menu_icon}
        width={'400'}
        height={'400'}
       className="rad "/>
        {/* <img className="menu " src={Image.menu_icon} alt="myimage" /> */}
      </div>
         
      </Col>
   

     
      <Col className="col-lg-6 col-sm-6 col-md-6 col-xs-6 col xxl-6  ">
            <Card className=" my-card">
              <Card.Title className="ps-3 "><h2 className="fw-bold  pb-3 about">About</h2></Card.Title>
              <Card.Body>
                <div className="line"></div>
                <h3 className="text">

                      Oh feel if up to till like. He an thing rapid these after going drawn or.
                      Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing. </h3>
                      <h4 className="spoke">He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.</h4>
                    <div>
                    <Img className="call  " src={Image.index}  alt="myimage" />
                    <span className="green">+2345678</span>
                    </div>
                   

                   
     
              </Card.Body>
            </Card>
   
      </Col> 
    </Row>
    <center>
    <div className="foot">
      <a href="#" className="temp"> HTML Template</a> <span className="temp" >created with </span> <a href="#" className="temp"> Best Website Builder</a> . 
    </div>

    </center>
    

    
    </Container>
  </Fragment>
  );
}

export default App;
