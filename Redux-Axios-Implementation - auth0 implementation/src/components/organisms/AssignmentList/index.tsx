import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAssignments } from '../../../redux/assignmentsSlice';
import type { RootState, AppDispatch } from '../../../redux/store';
import AssignmentCard from '../../molecules/AssignmentCard';
import { styled, Stack } from '@mui/material';
import Button from '../../atoms/Button';
import theme from '../../../../theme/theme';
import SearchBox from '../../atoms/SearchField';
import { useAuth0 } from '@auth0/auth0-react';

export const CompletedButton = styled(Button)(() => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.main,
}));

type Assignment = {
  id: string;
  name: string;
  completed: boolean;
};

const AssignmentList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { logout } = useAuth0();
  const [searchQuery, setSearchQuery] = useState('');
  const {
    data: assignments,
    loading,
    error,
  } = useSelector((state: RootState) => state.assignments);

  useEffect(() => {
    dispatch(fetchAssignments());
  }, [dispatch]);

  const filteredAssignments = assignments.filter((assignment: Assignment) =>
    assignment.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading assignments...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Stack direction="column" spacing={4}>
      <CompletedButton
        text="Logout"
        variant="outlined"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      />
      <SearchBox
        placeholder="Search assignments..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredAssignments.map((assignment: Assignment) => (
        <AssignmentCard
          key={assignment.id}
          id={assignment.id}
          name={assignment.name}
          completed={assignment.completed}
        />
      ))}

      {filteredAssignments.length === 0 && <p>No assignments found.</p>}
    </Stack>
  );
};

export default AssignmentList;
