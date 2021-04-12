import Head from 'next/head';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';
import { Header } from '../../components/Header/index';
import { Sidebar } from '../../components/Sidebar';
import { Pagination } from '../../components/Pagination';
import Link from 'next/link';
import { useUsers } from '../../services/hooks/useUsers';
import { useState } from 'react';

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page);

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
                {!isLoading && isFetching && (
                  <Spinner size='sm' color='gray.500' ml='4' />
                )}
              </Heading>
              <Link href='/users/create' passHref>
                <Button
                  as='a'
                  size='sm'
                  fontSize='sm'
                  colorScheme='pink'
                  leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                >
                  Criar novo
                </Button>
              </Link>
            </Flex>

            {isLoading ? (
              <Flex justify='center'>
                <Spinner mt='14' />
              </Flex>
            ) : error ? (
              <Flex justify='center'>
                <Text>Falha ao obter dados dos usuários</Text>
              </Flex>
            ) : (
              <>
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
                    {data.users.map((user) => {
                      return (
                        <Tr key={user.id}>
                          <Td px={['4', '4', '6']}>
                            <Checkbox colorScheme='pink'></Checkbox>
                          </Td>
                          <Td>
                            <Box>
                              <Text fontWeight='bold'>{user.name}</Text>
                              <Text fontSize='sm' color='gray.300'>
                                {user.email}
                              </Text>
                            </Box>
                          </Td>
                          {isWideVersion && <Td>{user.createdAt}</Td>}
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>

                <Pagination
                  totalCountOfRegisters={data.totalCount}
                  currentPage={page}
                  onPageChange={setPage}
                />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
