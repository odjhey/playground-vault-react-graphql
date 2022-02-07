import { customFetch } from "../utils/customFetch";

import { createMachine, EventObject } from "xstate";
import { useMachine } from "@xstate/react";
import { assign } from "@xstate/immer";

const DEFAULT_CONTEXT = {
  query: "",
  variables: {},
  data: { data: undefined },
  error: undefined,
};

type TCONTEXT = typeof DEFAULT_CONTEXT;

const queryMachine = createMachine({
  id: "with-query",
  initial: "loading",
  context: DEFAULT_CONTEXT,
  states: {
    loading: {
      invoke: {
        id: "fetch",
        src: (context: TCONTEXT, event) =>
          customFetch(context.query, context.variables),
        onDone: {
          target: "done",
          actions: assign<TCONTEXT, { data: any } & EventObject>(
            (ctx, event) => {
              ctx.error = undefined;
              ctx.data = event.data;
            }
          ),
        },
        onError: {
          target: "error",
          actions: assign((ctx: TCONTEXT, event) => (ctx.error = event.data)),
        },
      },
    },
    done: {
      on: {
        REFRESH: "loading",
      },
    },
    error: {
      on: {
        RETRY: "loading",
      },
    },
  },
});

export const useQueryX = (query: string, variables: any) => {
  const [state, send] = useMachine(queryMachine, {
    context: { query, variables },
  });

  return {
    loading: state.matches("loading"),
    data: state.context.data.data,
    error: state.context.error,
    retry: () => send("RETRY"),
    refresh: () => send("REFRESH"),
  };
};
