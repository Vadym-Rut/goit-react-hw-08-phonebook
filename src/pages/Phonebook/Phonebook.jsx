import React, { useState } from 'react';
import Loader from 'components/Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { EmergencyBtn } from 'components/EmergencyBtn';
import { Modal } from 'components/Modal';
import { Container } from 'components/App.styled';

const Phonebook = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };


  return (
    <Container>
      <Loader>
        <UserMenu />
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <EmergencyBtn title="EMERGENCY NUMBERS!!!" onClick={toggleModal} />
        {showModal && <Modal onClose={toggleModal} />}
      </Loader>
    </Container>
  );
};

export default Phonebook;
