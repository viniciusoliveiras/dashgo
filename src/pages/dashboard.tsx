import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';
import { Header } from '../components/Header/index';
import { Sidebar } from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

export default function Dashboard() {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        '2021-03-25T00:00:00.000Z',
        '2021-03-26T00:00:00.000Z',
        '2021-03-27T00:00:00.000Z',
        '2021-03-28T00:00:00.000Z',
        '2021-03-29T00:00:00.000Z',
        '2021-03-30T00:00:00.000Z',
        '2021-03-31T00:00:00.000Z',
      ],
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };

  const series = [
    {
      name: 'seriesOne',
      data: [30, 70, 230, 61, 20, 150, 66],
    },
  ];

  return (
    <>
      <Head>
        <title>dashboard | dashgo</title>
      </Head>
      <Flex direction='column' h='100vh'>
        <Header />

        <Flex w='100%' mx='auto' my='6' maxWidth={1480} px='6'>
          <Sidebar />

          <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
            <Box p={['6', '8']} bgColor='gray.800' borderRadius='8' pb='4'>
              <Text fontSize='lg' mb='4'>
                Inscritos da semana
                <Chart
                  options={options}
                  series={series}
                  type='area'
                  height={160}
                />
              </Text>
            </Box>

            <Box
              p='8'
              bgColor='gray.800'
              borderRadius='8'
              // pb='4'
            >
              <Text fontSize='lg' mb='4'>
                Texa de abertura
                <Chart
                  options={options}
                  series={series}
                  type='area'
                  height={160}
                />
              </Text>
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
