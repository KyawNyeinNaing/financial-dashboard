'use client';
import React from 'react';
import Link from 'next/link';

import { cn } from '@/shared/cn';
import { Container, Grid } from '@radix-ui/themes';

import { buttonVariants } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

const Header: React.FC = () => {
  return (
    <Container size="4">
      <Grid columns="1"></Grid>
    </Container>
  );
};

export default Header;
