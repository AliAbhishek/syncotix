import { Modal } from '@mantine/core';
import React, { useState } from 'react'

const Modals = ({isOpen}) => {
  const [noTransitionOpened, setNoTransitionOpened] = useState(isOpen);
  return (
    <>
    
    <Modal
        opened={noTransitionOpened}
        onClose={() => setNoTransitionOpened(false)}
        title="Please consider this"
        size='lg'
        closeOnClickOutside={false}
        
        transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
      >
      </Modal>
    </>
  )
}

export default Modals