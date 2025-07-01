import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import {
  cardStyle,
  mediaStyle,
  contentStyle,
  labelStyle,
  valueStyle,
} from './card.styles';
import { SentenceModal } from './components/sentenceModal.component';
import { updateCharacter } from './api/character.api';

interface Props {
  character: {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
    bestSentence?: string;
  };
}

export const CharacterComponent: React.FC<Props> = ({ character }) => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleSaveSentence = async (newSentence: string) => {
  try {
    await updateCharacter(character.id, { bestSentence: newSentence });
    setDialogOpen(false);

    character.bestSentence = newSentence;
  } catch (error) {
    console.error('Error al actualizar el personaje:', error);
  }
};

  return (
    <Box>
      <Button variant="outlined" sx={{ mb: 2 }} onClick={() => navigate(-1)}>
        ← Volver a la lista
      </Button>

      <Card sx={cardStyle}>
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          sx={mediaStyle}
        />
        <CardContent sx={contentStyle}>
          <Typography variant="h5" gutterBottom>
            {character.name}
          </Typography>

          <Typography sx={labelStyle}>
            Status: <span style={valueStyle}>{character.status}</span>
          </Typography>
          <Typography sx={labelStyle}>
            Species: <span style={valueStyle}>{character.species}</span>
          </Typography>
          <Typography sx={labelStyle}>
            Gender: <span style={valueStyle}>{character.gender}</span>
          </Typography>
          <Typography sx={labelStyle}>
            Origin: <span style={valueStyle}>{character.origin.name}</span>
          </Typography>

          {character.bestSentence && (
            <Typography sx={labelStyle}>
              Best Sentence:{' '}
              <span style={valueStyle}>{character.bestSentence}</span>
            </Typography>
          )}

          <Box mt={2}>
            <Button
              size="small"
              variant="outlined"
              onClick={() => setDialogOpen(true)}
            >
              {character.bestSentence ? 'Editar' : 'Agregar Best Sentence'}
            </Button>
          </Box>
        </CardContent>
      </Card>

      <SentenceModal
        open={dialogOpen}
        currentSentence={character.bestSentence}
        onClose={() => setDialogOpen(false)}
        onSave={handleSaveSentence}
      />
    </Box>
  );
};
