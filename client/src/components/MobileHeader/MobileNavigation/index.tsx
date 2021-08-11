import React, { useState } from 'react';
import { HamburgerMenuIcon } from '../../Icons';
import { Modal } from '@material-ui/core';
import * as Styled from './styled';
import { navigationData } from '../../../data/navigation';
import Socials from '../../Socials';

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Styled.MenuButton onClick={handleOpen}>
        <HamburgerMenuIcon/>
      </Styled.MenuButton>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div>
          {navigationData.map((item, i) => (
            <div key={i}>
              {item}
            </div>
          ))}
        <Socials/>
        </div>
      </Modal>
    </div>
  )
};

export default MobileNavigation;