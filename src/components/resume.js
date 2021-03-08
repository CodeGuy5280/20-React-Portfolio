import React, { Component } from 'react';
import { Grid, Cell, Footer, FooterLinkList, FooterSection} from 'react-mdl';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="#"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Alex Leal</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Full Stack Flex DU Coding Bootcamp</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Colorado</p>
            <h5>Phone</h5>
            <p>(123) xxx-xxxx</p>
            <h5>Email</h5>
            <p>alex.j.leal@live.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
          </Cell>
        </Grid>
        <Footer size="mini">
    <FooterSection type="left" logo="Title">
        <FooterLinkList>
            <a href="https://reactjs.org/">Help</a>
            <a href="https://google.com">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
      </div>
    )
  }
}

export default Resume;