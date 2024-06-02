import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

// @ts-ignore
import { config as virtualConfig } from 'virtual-config';
import { Config } from '../../../lib/config';

const ConfigContext = createContext(virtualConfig as Config);

export function getConfig(): Config {
  return virtualConfig;
}

export const ConfigProvider = ({
  children,
  config: initialConfig,
}: {
  children: ReactNode;
  config?: Config;
}) => {
  const [config, setConfig] = useState(() => {
    if (initialConfig) return initialConfig;
    return getConfig();
  });
  useEffect(() => {
    // @ts-ignore
    if (import.meta.hot) import.meta.hot.on('vocs:config', setConfig);
  }, []);
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};

export function useConfig() {
  return useContext(ConfigContext);
}
