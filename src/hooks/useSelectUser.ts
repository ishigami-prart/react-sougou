import { useCallback, useState } from "react";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

//選択したユーザー情報を特定しモーダルを表示するカスタムフック

export const useSlelectUser = () => {
  const [selectUser, setSeletUser] = useState<User | null>(null);
  const onSlectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSeletUser(targetUser!);
    onOpen();
  }, []);
  return { onSlectUser, selectUser };
};
