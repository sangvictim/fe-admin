import { create } from "zustand";

type State = {
  checkedIds: any[];
};

type Actions = {
  toggleCheck: (id: number) => void;
  toggleCheckAll: (id: any[]) => void;
  isAllChecked: (ids: any[]) => boolean;
  isPartialChecked: (ids: any[]) => boolean;
  isChecked: (ids: number) => boolean;
  clearChecked: () => void;
};

export const useCheckedStore = create<State & Actions>((set, get) => ({
  checkedIds: [],
  toggleCheck: (id: number) =>
    set((state) => {
      if (state.checkedIds.includes(id)) {
        return { checkedIds: state.checkedIds.filter((i) => i != id) };
      } else {
        return { checkedIds: [...state.checkedIds, id] };
      }
    }),

  toggleCheckAll: (ids: any[]) =>
    set((state) => {
      if (state.checkedIds.length == ids.length) {
        return { checkedIds: [] };
      } else {
        return { checkedIds: ids };
      }
    }),

  isChecked: (id: number) => get().checkedIds.includes(id),
  isAllChecked: (ids: any[]) => get().checkedIds.length == ids.length,
  isPartialChecked: (ids: any[]) => get().checkedIds.length > 0 && get().checkedIds.length < ids.length,
  clearChecked: () => set({ checkedIds: [] }),
}));
