import Typography from '../../atoms/Typography';
import { styled, Stack, Paper } from '@mui/material';
import theme from '../../../../theme/theme';
import Button from '../../atoms/Button';
import { CheckCircle } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { markCompleted } from '../../../redux/assignmentsSlice';

const StyledPaper = styled(Paper)(() => ({
  width: theme.spacing(40),
  height: theme.spacing(40),
  backgroundColor: theme.palette.primary.main,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const CompletedButton = styled(Button)(() => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.main,
}));

type AssignmentCardProps = {
  id: string;
  name: string;
  completed: boolean;
};

const AssignmentCard = ({ id, name, completed }: AssignmentCardProps) => {
  const dispatch = useDispatch();

  const handleMarkCompleted = () => {
    dispatch(markCompleted(id));
  };

  return (
    <Stack>
      <Stack
        direction={'row'}
        justifyContent={'center'}
        alignItems="center"
        spacing={2}
      >
        <StyledPaper>
          {completed && (
            <CheckCircle
              sx={{
                color: 'green',
                fontSize: 60,
                position: 'absolute',
                top: theme.spacing(2),
                right: theme.spacing(2),
              }}
            />
          )}
          <Typography text={name} />
        </StyledPaper>
        {!completed && (
          <CompletedButton onClick={handleMarkCompleted} text="Completed" />
        )}
      </Stack>
    </Stack>
  );
};

export default AssignmentCard;
