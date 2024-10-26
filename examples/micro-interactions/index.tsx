import { BellIcon } from "./icons/bell";
import { CursorClickIcon } from "./icons/cursor-click";
import { DeleteIcon } from "./icons/delete";
import { DownvoteIcon } from "./icons/downvote";
import { EditIcon } from "./icons/edit";
import { ExpandIcon } from "./icons/expand";
import { GridIcon } from "./icons/grid";
import { PartyPopperIcon } from "./icons/party-popper";
import { RefreshIcon } from "./icons/refresh";
import { ScanTextIcon } from "./icons/scan-text";
import { SettingsIcon } from "./icons/settings";
import { SettingsGearIcon } from "./icons/settings-gear";
import { UnplugIcon } from "./icons/unplug";
import { UpvoteIcon } from "./icons/upvote";

const MicroInteractions = () => {
  return (
    <div className="flex flex-wrap sm:gap-4 gap-2 w-full h-full items-center flex-col justify-center">
      <div className="flex sm:gap-4 gap-2 items-center flex-wrap">
        <UpvoteIcon />
        <DownvoteIcon />
        <RefreshIcon />
        <ScanTextIcon />
        <GridIcon />
        <CursorClickIcon />
        <SettingsIcon />
      </div>
      <div className="flex sm:gap-4 gap-2 items-center flex-wrap">
        <SettingsGearIcon />
        <ExpandIcon />
        <UnplugIcon />
        <PartyPopperIcon />
        <DeleteIcon />
        <BellIcon />
        <EditIcon />
      </div>
    </div>
  );
};

export { MicroInteractions };
