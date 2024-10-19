import { OpenPanelComponent } from "@openpanel/nextjs";

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
