import { Box, CircularProgress, Typography } from '@mui/material';
import { User } from '@monorepo/shared/src/user';
import UserTable from './UserTable';

const UserTableFragment: React.FC<{
  users: User[];
  loading: boolean;
  error: string | null;
  onEditUser: (user: User) => void; // Add prop for edit handler
}> = ({ users, loading, error, onEditUser }) => {
  return (
    <Box>
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {users.length > 0 ? (
        <UserTable users={users} onEditUser={onEditUser} />
      ) : (
        <Typography>No users found.</Typography>
      )}
    </Box>
  );
};

export default UserTableFragment;
