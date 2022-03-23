import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Form, SearchForm } from '../index';
import './Openers.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Openers = ({ currentId, setCurrentId, user }) => {

  const openFormModal = () => {
    const formModal = document.querySelectorAll('.modal')[0];
    formModal.style.transform = 'scale(1)';
  }

  const closeFormModal = () => {
    const formModal = document.querySelectorAll('.modal')[0];
    formModal.style.transform = 'scale(0)';
  }

  const openSearchModal = () => {
    const searchModal = document.querySelectorAll('.modal')[1];
    searchModal.style.transform = 'scale(1)';
  }

  const closeSearchModal = () => {
    const searchModal = document.querySelectorAll('.modal')[1];
    searchModal.style.transform = 'scale(0)';
  }

  return (
    <div>
      <div className="openers">
        <div className="opener-container" onClick={openFormModal}><div className="opener-icon"><AddCircleIcon /></div>Add a glimpse</div>
        <div className="opener-container" onClick={openSearchModal}><div className="opener-icon"><SearchIcon /></div>Search</div>
      </div>
      <div className="modal">
        <button className="modal-close-button" onClick={closeFormModal}>
          <CloseIcon />
        </button>
        <div className="form">
          <Form currentId={currentId} setCurrentId={setCurrentId} user={user} />
        </div>
      </div>
      <div className="modal" >
        <button className="modal-close-button" onClick={closeSearchModal}>
          <CloseIcon />
        </button>
        <div className="form">
          <SearchForm />
        </div>
      </div>
    </div>
  )
}

export default Openers;