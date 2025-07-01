import React from 'react';
import { Box } from '@mui/material';
import { CharacterCard } from './components/character-card.component';

interface Character {
  id: number;
  name: string;
  image: string;
}

interface Props {
  characters: Character[];
  onSelect: (id: number) => void;
}

export const CharacterCollectionComponent: React.FC<Props> = ({
  characters,
  onSelect,
}) => {
  console.log('characters', characters);
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} p={2}>
      {characters.map((character) => (
        <Box
          key={character.id}
          sx={{ height: '100%', cursor: 'pointer' }}
          onClick={() => onSelect(character.id)}
        >
          <CharacterCard character={character} />
        </Box>
      ))}
    </Box>
  );
};
