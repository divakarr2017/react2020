
import React, { useEffect, useState } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
function AboutUs(props) {
   const [open, setOpen] = useState(false);
   const [dimmer, setDimmer] = useState(false);
  
   function show(dimmer)
    {
      setOpen(true);
      setDimmer(dimmer);
    }
    function close()
    {
      setOpen(false);
    }

   return(
      <div>
        <Button onClick={() => show(true)}>Default</Button>
        <Button onClick={() => show('inverted')} >Inverted</Button>
        <Button onClick={() => show('blurring')} >Blurring</Button>

        <Modal dimmer={dimmer} open={open} onClose={() => close()}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size='medium'
              src='https://react.semantic-ui.com/images/avatar/large/rachel.png'
            />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black'  onClick={() => close()}  >
              Nope
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Yep, that's me"
              onClick={close}
            />
          </Modal.Actions>
        </Modal>
      </div>

   )

}
export default AboutUs;
