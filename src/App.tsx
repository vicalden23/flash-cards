import React, { useState } from 'react';
import { FlashcardArray } from 'react-quizlet-flashcard';
import { Container } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import CardIcon from '@mui/icons-material/CropSquare';
import { cards } from './cards';

function App() {
  const [isCardView, setIsCardView] = useState(true);
  return (
    <Container>
      <Container
        style={{
          textAlign: 'center',
          marginTop: '20px',
        }}
      >
        <ListIcon
          style={{ fontSize: '30px', marginRight: '5px', cursor: 'pointer' }}
          onClick={() => setIsCardView(false)}
        />
        <CardIcon
          style={{ fontSize: '30px', marginLeft: '5px', cursor: 'pointer' }}
          onClick={() => setIsCardView(true)}
        />
      </Container>

      {isCardView ? (
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
      ) : (
        <ul
          style={{
            marginTop: '40px',
          }}
        >
          {cards.map((c) => (
            <li
              style={{
                marginBottom: '20px',
              }}
            >
              <p>{c.q}</p>
              <p>{c.a}</p>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default App;
