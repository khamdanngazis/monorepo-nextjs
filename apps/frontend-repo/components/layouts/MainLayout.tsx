
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, updateUserData } from '../../apis/userApi';
import { fetchUserStart, fetchUserSuccess, fetchUserFailure, updateUserStart, updateUserSuccess, updateUserFailure } from '../../store/reducers';
import UserTableFragment from '../fragments/UserTableFragment'
import { AppDispatch, RootState } from '../../store/store'; 
import {User} from '@monorepo/shared/src/user'
import UserEditForm from '../fragments/UserEditForm';
import { Box, Button} from '@mui/material';


const MainLayout: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.user.data);
  const loading = useSelector((state: RootState) => state.user.loading);
  const error = useSelector((state: RootState) => state.user.error);

  const [editUser, setEditUser] = useState<User | null>(null);
  const [updatedName, setUpdatedName] = useState<string>('');
  const [updatedAge, setUpdatedAge] = useState<number>(0);

  const handleFetchUsers = async () => {
    dispatch(fetchUserStart());
    try {
      const data = await fetchUserData();
      dispatch(fetchUserSuccess(data));
    } catch (error: unknown) {
      dispatch(fetchUserFailure((error as Error).message || 'Failed to fetch users'));
    }
  };

  const handleUpdateUser = async () => {
    if (!editUser) return;
    dispatch(updateUserStart());
    try {
      const updatedUser = await updateUserData({
        ...editUser,
        name: updatedName || editUser.name,
        age: updatedAge || editUser.age,
      });
      dispatch(updateUserSuccess(updatedUser));
      await handleFetchUsers();
      setEditUser(null);
      setUpdatedName('');
      setUpdatedAge(0);
    } catch (error: unknown) {
      dispatch(updateUserFailure((error as Error).message || 'Failed to update user'));
    }
  };

  const handleCancelEdit = () => {
    setEditUser(null);
    setUpdatedName('');
    setUpdatedAge(0);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Button variant="contained" onClick={handleFetchUsers} disabled={loading}>
        Fetch Users
      </Button>
      <Box sx={{ marginTop:2 }}>
      <UserTableFragment
        users={users}
        loading={loading}
        error={error}
        onEditUser={(user: User) => {
          setEditUser(user);
          setUpdatedName(user.name);
          setUpdatedAge(user.age);
        }}
      />
      {editUser && (
        <UserEditForm
          user={editUser}
          updatedName={updatedName}
          setUpdatedName={setUpdatedName}
          updatedAge={updatedAge}
          setUpdatedAge={setUpdatedAge}
          handleUpdateUser={handleUpdateUser}
          handleCancel={handleCancelEdit}
        />
      )}
      </Box>
    </Box>
  );
};

export default MainLayout;
