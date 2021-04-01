import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Vinícius Oliveira</Text>
          <Text color='gray.300' fontSize='small'>
            vinitag190@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size='md'
        name='Vinícius Oliveira'
        src='https://github.com/viniciusoliveiras.png'
      />
    </Flex>
  );
}
