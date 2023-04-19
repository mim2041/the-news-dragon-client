import React from 'react';
import logo from '../../../../../../src/assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-marquee-slider";

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className="text-secondary"><small></small>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div>
                <Button variant="danger">Danger</Button>
                <Marquee>
                    I can be a react component.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;