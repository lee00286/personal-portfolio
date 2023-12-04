import { Box, Text } from '@chakra-ui/react';

function Profile() {
  const description = 'Description';

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      w="full"
    >
      <Text>{description}</Text>
    </Box>
  );
}

export default Profile();
