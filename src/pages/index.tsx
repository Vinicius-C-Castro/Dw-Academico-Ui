import React, { Component, useCallback, useEffect, useState } from 'react';
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { Sidebar } from '../components/Sidebar';
import axios from 'axios';
import api from '../services/api';

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
    type: 'fatetime',
    axisborder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: ['Indígena', 'Amarela', 'Não Declarada', 'Preta', 'Pardo', 'Branca'],
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

interface Etnia {
  count: string;
  etnia: string;
}

interface Serie {
  name: string;
  data: string[]
}
export default function Etnia() {
  const [serie, setSerie] = useState<Serie[]>([]);

  useEffect(() => {
    api.get<Etnia[]>('/etnia').then(response => {
      const etnia = response.data;
      const auxSeries =  [{ name: 'series1', data: etnia.map(et => et.count)}];
      setSerie(auxSeries);
    });
  }, []);
  
  return (
    <Flex direction="column" h="100vh">
      <Flex width="100%" my="6" maxWidth={1680} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" align="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8} pb="4" height="100vh">
            <Text fontSize="lg" mb="4">
              Alunos Etnia
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

