import { useMachine } from "@xstate/react";
import { queryMachine } from "./queryMachine";

export const useQueryX = (query: string, variables: any) => {
  const [state, send] = useMachine(queryMachine, {
    context: { query, variables },
  });

  return {
    loading: state.matches("loading"),
    data: state.context.data.data,
    error: state.context.error,
    cancelled: state.matches("cancelled"),
    retry: () => send("RETRY"),
    refresh: () => send("REFRESH"),
    cancel: () => send("CANCEL"),
  };
};
