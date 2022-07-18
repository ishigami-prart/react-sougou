import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

export const useMessage = () => {
  const toast = useToast();
  const showMessage = useCallback(() => {});

  return { showMessage };
};
