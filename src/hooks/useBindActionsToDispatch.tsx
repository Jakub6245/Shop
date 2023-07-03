import store from "../store/store";

import { actions as productActions } from "../features/product/slices/ProductSlice";
import { actions as cartActions } from "../features/cart/slices/CartSlice";
import { actions as searchActions } from "../features/search/slices/SearchSlice";
import { actions as loginActions } from "../features/login/slices/LoginSlice";

export interface ActionsObject {
  [x: string]: (...args: any[]) => any;
}

export const bindActionsToDispatch = <T extends ActionsObject>(
  dispatch: Function,
  actions: T
) => {
  return Object.keys(actions).reduce(
    (boundActions, key) => {
      boundActions[key as keyof T] = (...args: Parameters<T[keyof T]>) => {
        dispatch(actions[key as keyof T](...args));
      };

      return boundActions;
    },
    {} as {
      [K in keyof T]: (...args: Parameters<T[K]>) => void;
    }
  );
};

export const boundProductActions = bindActionsToDispatch(store.dispatch, {
  ...productActions,
});

export const boundCartActions = bindActionsToDispatch(
  store.dispatch,
  cartActions
);

export const boundSearchActions = bindActionsToDispatch(
  store.dispatch,
  searchActions
);

export const boundLoginActions = bindActionsToDispatch(
  store.dispatch,
  loginActions
);
