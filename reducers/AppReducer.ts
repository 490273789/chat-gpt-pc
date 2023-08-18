export type State = {
  displayNavigation: boolean;
  themeModel: "dark" | "light";
};

export enum ActionType {
  UPDATE = "UPDATE",
}

type UpdateAction = {
  type: ActionType.UPDATE;
  field: string;
  value: any;
};

export type Action = UpdateAction;

export const initState: State = {
  displayNavigation: true,
  themeModel: "light",
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.UPDATE:
      return { ...state, [action.field]: action.value };
    default:
      throw new Error();
  }
}
