'use client';
import React from 'react';
import Link from 'next/link';

import { cn } from '@/shared/cn';
import { Box, Container, Flex, Grid } from '@radix-ui/themes';

import { buttonVariants } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/typography';
import { InputSearch } from '../ui/input';
import CardBox from '../ui/card';

const Header: React.FC = () => {
  return (
    <Grid columns="1" py="5">
      <Flex justify="between" align="center">
        <Box>
          <Text size="4">Dashboard</Text>
        </Box>
        <Flex gap="6" justify="center" align="center">
          <Box>
            <InputSearch type="text" placeholder="Search..." />
          </Box>
          <Box>
            <CardBox>Yo!</CardBox>
          </Box>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default Header;
