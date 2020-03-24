import { applyMiddleware, createStore, compose } from "redux";
import { useSelector as rUseSelector, useDispatch } from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { useEffect } from "react";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export function useSelector<D>(selector: (state: any) => D) {
  return rUseSelector<any, D>(selector);
}

export function useAction<V>(action: (v: V) => any, v: V) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action(v));
  }, [JSON.stringify(v)]);
  const refetch = (v: V) => dispatch(action(v));
  return refetch;
}
export default store;
