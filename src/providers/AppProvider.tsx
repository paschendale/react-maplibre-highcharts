import { createContext, useContext, useRef } from "react";
import { MapRef } from "react-map-gl/dist/esm/exports-maplibre";

const AppContext = createContext<{
  mapRef: React.MutableRefObject<MapRef | null> | null;
}>({
  mapRef: null,
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const mapRef = useRef<MapRef>(null);

  return (
    <AppContext.Provider
      value={{
        mapRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
