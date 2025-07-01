import { Character } from '../../character/api/character.api-model';

export interface CharacterListResponse {
  info: {
    count: number;
  };
  results: Character[];
}
