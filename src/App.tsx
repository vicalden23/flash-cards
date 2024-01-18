import React from 'react';
import { FlashcardArray } from 'react-quizlet-flashcard';
import { Container } from '@mui/material';
import { cards } from './cards';

function App() {
  return (
    <Container
      style={{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <FlashcardArray cards={cards} />
    </Container>
  );
}

export default App;
