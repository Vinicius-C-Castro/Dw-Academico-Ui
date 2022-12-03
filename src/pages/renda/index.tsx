import React, { Component, useCallback, useEffect, useState } from 'react';
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { Sidebar } from '../../components/Sidebar';

import api from '../../services/api';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

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
    show: true,
  },
  dataLabels: {
    enabled: true,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'bar',
    axisborder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: ['Menor que R$ 468,50', 'Menor que R$ 477,00', 'Menor que R$ 339,00 ', 'Não declarado', 'R$ 2343,00 a 2811,00', 'R$ 469,00 a 937,00', 'R$ 1875,00 a 2342,50', 'R$ 478,00 a 954,00', 'R$ 340,00 a 678,00 ', 'R$ 1406,00 a 1874,00', 'Maior que R$ 3340,00', 'R$ 2386,00 a 3339,00', 'Maior que R$ 2812,00', 'R$ 938,00 a 1405,50', 'R$ 1432,00 a 2385,00', 'R$ 1367,00 a 1695,00 ', 'R$ 1696,00 a 2034,00 ', 'R$ 955,00 a 1431,00', 'R$ 1018,00 a 1356,00 ', 'Maior que R$ 2034,00 ', 'R$ 679,00 a 1017,00 ']
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityto: 0.3,
    },
    colors: theme.colors.green[600]
  },
};

interface Renda {
  count: string;
  renda_familiar: string;
}

interface Serie {
  name: string;
  data: string[]
}
export default function Renda() {
  const [serie, setSerie] = useState<Serie[]>([]);

  useEffect(() => {
    api.get<Renda[]>('/renda').then(response => {
      const etnia = response.data;
      const auxSeries =  [{ name: 'series1', data: etnia.map(et => et.count), categories: etnia.map(et => et.renda_familiar)}];
      setSerie(auxSeries);
      console.log(etnia.map(et => et.renda_familiar))
    });
  }, []);

  

  return (
    <Flex direction="column" h="100vh">
      <Flex width="100%" my="6" maxWidth={1680} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" align="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8} pb="4" height="100vh">
            <Text fontSize="lg" mb="4">
              Alunos Renda
            </Text>
            <Chart options={options} series={serie} type="bar" height={800} />
          </Box>

        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
function userState(arg0: {}): [any, any] {
  throw new Error('Function not implemented.');
}

