// store/types.ts
import { CommitOptions, DispatchOptions, Store } from "vuex";
import { Actions } from "./actions";
import { Mutations } from "./mutations";
import { RootState } from "./state";

type MyMutations = {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload?: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>;
};


type MyActions = {
    dispatch<K extends keyof Actions>(
      key: K,
      payload?: Parameters<Actions[K]>[1],
      options?: DispatchOptions
    ): ReturnType<Actions[K]>;
  };



export type MyStore = Omit<Store<RootState>, "commit"> & MyMutations;
// Omit위에거는 STORE의 commit을 빼고 MyMutations의 commit을  가져와라




//인터섹션 & (합집합)
type A = {
    name : string;
}

type B =  {
    age : number;
}

type C = A & B;   // a와 b 모두 들어가 있어야함

const Person : C = {
    name : "a",
    age : 10
}