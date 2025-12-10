import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { Immer } from "immer";
import { create } from "zustand";

const useWindowStore = create(
  Immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),

    closeWindow: (windowKey) => set((state) => {}),

    focusWindow: (windowKey) => set((state) => {}),
  }))
);
