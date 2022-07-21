import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  useEffect(() => getUsers(), []);
  return (
    <>
      {true ? (
        <Center height="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          <WrapItem>
            <UserCard
              imageUrl="https://source.unsplash.com/random"
              userName="じゃけえ"
              fullName="Takumi Okada"
            />
          </WrapItem>
        </Wrap>
      )}
    </>
  );
});
