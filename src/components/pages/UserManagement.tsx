import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap>
      <WrapItem>
        <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md">
          <Stack textAlign="center">
            <Image
              borderRadius="full"
              boxSize="160px"
              src="https://source.unsplash.com/random"
              alt="プロフィール画像"
              m="auto"
            />
            <Text>じゃけえ</Text>
            <Text>Takumi Okamoto</Text>
          </Stack>
        </Box>
      </WrapItem>
    </Wrap>
  );
});
