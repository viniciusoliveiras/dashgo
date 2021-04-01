import Head from 'next/head';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header/index';
import { Sidebar } from '../../components/Sidebar';
import { Pagination } from '../../components/Pagination';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>usuários | dashgo</title>
      </Head>
      <Box>
        <Header />

        <Flex w='100%' mx='auto' my='6' maxWidth={1480} px='6'>
          <Sidebar />

          <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
            <Flex mb='8' justify='space-between' align='center'>
              <Heading size='lg' fontWeight='normal'>
                Usuários
              </Heading>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Criar novo
              </Button>
            </Flex>

            <Table colorScheme='whiteAlpha'>
              <Thead>
                <Tr>
                  <Th px={['4', '4', '6']} color='gray.300' w='8'>
                    <Checkbox colorScheme='pink'></Checkbox>
                  </Th>
                  <Th>Usuário</Th>
                  {isWideVersion && <Th>Data de cadastro</Th>}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td px={['4', '4', '6']}>
                    <Checkbox colorScheme='pink'></Checkbox>
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight='bold'>Vinícius Oliveira</Text>
                      <Text fontSize='sm' color='gray.300'>
                        vinitag190@gmail.com
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>01 abril 2021</Td>}
                </Tr>

                <Tr>
                  <Td px={['4', '4', '6']}>
                    <Checkbox colorScheme='pink'></Checkbox>
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight='bold'>Vinícius Oliveira</Text>
                      <Text fontSize='sm' color='gray.300'>
                        vinitag190@gmail.com
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>01 abril 2021</Td>}
                </Tr>

                <Tr>
                  <Td px={['4', '4', '6']}>
                    <Checkbox colorScheme='pink'></Checkbox>
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight='bold'>Vinícius Oliveira</Text>
                      <Text fontSize='sm' color='gray.300'>
                        vinitag190@gmail.com
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>01 abril 2021</Td>}
                </Tr>
              </Tbody>
            </Table>

            <Pagination />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
