import { NavLink } from 'react-router';
import Button from '../ui/Button';
import { useState } from 'react';
import UpcomingSessions from '../../feature/Sessions/UpcomingSessions';

function MainHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <header id='main-header' className='main-header'>
      {isOpen && <UpcomingSessions onClose={handleClose} />}
      <h1>ReactMentoring</h1>

      <nav>
        <ul>
          <li>
            <NavLink to='/' end>
              Our Mission
            </NavLink>
          </li>
          <li>
            <NavLink to='/sessions' end>
              Browse Sessions
            </NavLink>
          </li>
          <li>
            <Button onClick={handleOpen}>Upcoming Sessions</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
