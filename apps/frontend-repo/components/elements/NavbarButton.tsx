import {Button} from '@mui/material';

const NavbarButton: React.FC<{ title: string; onClick: () => void }> = ({ title, onClick }) => {
  return (
    <Button
      color="inherit"
      variant="outlined"
      sx={{
        borderColor: '#fffff',  // Green Border
        color: '#ffff',         // Green Text
        '&:hover': {
          backgroundColor: '#1565c0', // Dark Green on Hover
          borderColor: '#1565c0',
          color: '#ffffff',  // White text on hover
        },
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default NavbarButton;
