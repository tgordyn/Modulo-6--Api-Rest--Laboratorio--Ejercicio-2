  import axios from 'axios';
  import { Character } from './character.api-model';

  const apiUrl = '/api/character';

  export const getCharacter = async (id: number): Promise<Character> => {
  const response = await axios.get(`${apiUrl}/${id}`);
  return response.data;
};

export const updateCharacter = async (id: number, updates: Partial<Character>): Promise<void> => {
  await axios.put(`${apiUrl}/${id}`, updates);
};
