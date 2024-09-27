import React from 'react';
import { MDBFooter} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold td-none' href='https://Foddy.com/'>
          Foddy.com
        </a>
      </div>
    </MDBFooter>
    </div>
  );
}

export default Footer;