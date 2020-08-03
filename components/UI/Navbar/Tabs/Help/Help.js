import React from 'react';
import Link from 'next/link';

import {
  Div,
  Ul,
} from '../../../../../styles/Components/UI/Navbar/Tabs/Help/Help';

const Help = (props) => {
  const handleCloseTab = () => {
    const { handleCloseHelp } = props;
    console.log('handleCloseHelp:', handleCloseHelp);
    const close = handleCloseHelp;
    close();
  };

  return (
    <Div>
      <Ul>
        <li>
          <Link href='/contact' as='/contact'>
            <a onClick={handleCloseTab}>Contact Us</a>
          </Link>
        </li>
        <li className='last'>
          <Link href='/about' as='/about'>
            <a onClick={handleCloseTab}>About Us</a>
          </Link>
        </li>
      </Ul>
    </Div>
  );
};

export default Help;
