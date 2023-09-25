'use client';
import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import styled from 'styled-components';

import { Icons } from '@/components/ui/image';
import { Text } from '@/components/ui/typography';
import { useWindowSize } from '@/hooks/useWindowSize';
import { windowWidthAtom } from '@/shared/atom';
import { WINDOW_WIDTH } from '@/shared/enum';
import { Box, Flex, Grid } from '@radix-ui/themes';

import CardBox from '../ui/card';
import { InputSearch } from '../ui/input';

const Header: React.FC = () => {
  const { windowWidth } = useWindowSize();
  const [, setWindowSize] = useAtom(windowWidthAtom);

  useEffect(() => {
    setWindowSize(windowWidth);
  }, [windowWidth]);

  return (
    <Grid columns="1" py="5">
      <Flex
        gap="4"
        justify="between"
        align={windowWidth > WINDOW_WIDTH.LG ? 'center' : 'start'}
        direction={windowWidth > WINDOW_WIDTH.LG ? 'row' : 'column'}
      >
        <Box>
          <Text size="4">Dashboard</Text>
        </Box>
        <Flex
          gap="6"
          justify="center"
          align="center"
          direction={windowWidth > WINDOW_WIDTH.LG ? 'row' : 'column'}
        >
          <Box>
            <InputSearch type="text" placeholder="Search..." />
          </Box>
          <Box>
            <CardBoxStyled className="w-[289px] h-[40px]">
              <Flex justify="between" align="center" height="100%" p="4">
                <Flex align="center" gap="3">
                  <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center -ml-4">
                    <Icons.profile className="w-[50px] h-[50px]" />
                  </div>
                  <Text>Hello, Michaela!</Text>
                </Flex>
                <Flex align="center" gap="3">
                  <Icons.email className="w-[20px] h-[20px]" />
                  <Icons.notification className="w-[20px] h-[20px]" />
                </Flex>
              </Flex>
            </CardBoxStyled>
          </Box>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default Header;

const CardBoxStyled = styled(CardBox)`
  overflow: unset;
`;
