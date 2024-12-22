import { Box, Button ,TextField ,Typography} from '@mui/material';

const UserEditForm: React.FC<{
  user: { name: string; email: string; age: number };
  updatedName: string;
  setUpdatedName: React.Dispatch<React.SetStateAction<string>>;
  updatedAge: number;
  setUpdatedAge: React.Dispatch<React.SetStateAction<number>>;
  handleUpdateUser: () => void;
  handleCancel: () => void;
}> = ({ user, updatedName, setUpdatedName, updatedAge, setUpdatedAge, handleUpdateUser, handleCancel }) => {
  return (
    <Box
          component="form"
          sx={{
            marginTop: 4,
            padding: 3,
            border: '1px solid #ccc',
            borderRadius: 2,
            maxWidth: 400,
          }}
        >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>Edit User</Typography>
      <TextField
        fullWidth
        label="Name"
        value={updatedName}
        onChange={(e) => setUpdatedName(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField 
        fullWidth 
        label="Email" 
        value={user.email} 
        disabled 
        sx={{ marginBottom: 2 }}
      />
      <TextField
        fullWidth
        label="Age"
        type="number"
        value={updatedAge}
        onChange={(e) => setUpdatedAge(Number(e.target.value))}
        sx={{ marginBottom: 2 }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" onClick={handleUpdateUser}>
          Save
        </Button>
        <Button variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default UserEditForm;
