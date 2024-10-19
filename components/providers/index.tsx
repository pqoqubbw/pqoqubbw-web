import { AppThemeProvider } from "@/components/theme";

import { ViewTransitions } from "next-view-transitions";

import { Openpanel } from "../analytics/openpanel";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ViewTransitions>
      <AppThemeProvider>
        {children}
        <Openpanel />
      </AppThemeProvider>
    </ViewTransitions>
  );
};
