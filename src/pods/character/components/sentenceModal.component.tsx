import React from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';

interface SentenceDialogProps {
  open: boolean;
  currentSentence?: string;
  onClose: () => void;
  onSave: (newSentence: string) => void;
}

export const SentenceModal: React.FC<SentenceDialogProps> = ({
  open,
  currentSentence,
  onClose,
  onSave,
}) => {
  const [sentence, setSentence] = React.useState(currentSentence || '');

  React.useEffect(() => {
    setSentence(currentSentence || '');
  }, [currentSentence]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {currentSentence ? 'Editar Best Sentence' : 'Agregar Best Sentence'}
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          multiline
          rows={3}
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          label="Frase"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={() => onSave(sentence)} variant="contained">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
