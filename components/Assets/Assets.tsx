import React from 'react';
import { Box, Grid, useColorModeValue } from '@chakra-ui/react';
import { NodeData } from '@contentful/rich-text-types';
import Asset from './Asset';

function Assets({ assets }: { assets: Array<NodeData> }) {
  const bgColor = useColorModeValue('gray.200', 'gray.600');

  if (!assets || assets.length === 0) return <Box></Box>;

  const columnNum = assets.length < 4 ? assets.length : 4;

  return (
    <Grid
      templateColumns={`repeat(${columnNum}, 1fr)`}
      gap={6}
      mt="4"
      borderRadius="lg"
      p="4"
      w="full"
      backgroundColor={bgColor}
    >
      {assets.map((asset, index) => (
        <Asset key={`asset-${index}`} assetId={asset.sys.id} />
      ))}
    </Grid>
  );
}

export default Assets;
