import { CursorClickIcon } from "./icons/cursor-click";
import { DownvoteIcon } from "./icons/downvote";
import { GridIcon } from "./icons/grid";
import { RefreshIcon } from "./icons/refresh";
import { ScanTextIcon } from "./icons/scan-text";
import { SettingsIcon } from "./icons/settings";
import { UpvoteIcon } from "./icons/upvote";

const MicroInteractions = () => {
  return (
    <div className="flex flex-wrap sm:gap-4 gap-2 w-full h-full items-center justify-center">
      <UpvoteIcon />
      <DownvoteIcon />
      <RefreshIcon />
      <ScanTextIcon />
      <GridIcon />
      <CursorClickIcon />
      <SettingsIcon />
    </div>
  );
};

export { MicroInteractions };
