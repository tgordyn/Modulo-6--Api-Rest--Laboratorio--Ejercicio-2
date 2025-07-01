import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCharacterCollection } from './api/character-collection.api';
import { mapCharacterCollectionFromApiToVm } from './character-collection.mapper';
import { CharacterCollectionComponent } from './character-collection.component';
import { CharacterCollection } from './character-collection.vm';

export const CharacterCollectionContainer: React.FC = () => {
 const [characters, setCharacters] = useState<CharacterCollection>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await getCharacterCollection();
        const mapped = mapCharacterCollectionFromApiToVm(response);
        setCharacters(mapped);
      } catch (error) {
        console.error('Error fetching characters:', error);
        setCharacters([]);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <CharacterCollectionComponent
      characters={characters}
      onSelect={(id: number) => navigate(`/character/${id}`)}
    />
  );
};
