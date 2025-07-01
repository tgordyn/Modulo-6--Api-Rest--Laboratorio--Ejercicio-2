import axios from 'axios';
import { CharacterListResponse } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<CharacterListResponse> => {
  const response = await axios.get('/api/character');
  return response.data;
};
