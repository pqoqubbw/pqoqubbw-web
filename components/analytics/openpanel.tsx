import { OpenPanel, OpenPanelComponent } from "@openpanel/nextjs";

export const op = new OpenPanel({
  clientId: process.env.CLIENT_ID!,
  clientSecret: process.env.CLIENT_SECRET!,
});

const Openpanel = () => {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <OpenPanelComponent
      clientId={process.env.CLIENT_ID!}
      clientSecret={process.env.CLIENT_SECRET!}
      trackScreenViews
      trackAttributes
      trackOutgoingLinks
    />
  );
};

export { Openpanel };
