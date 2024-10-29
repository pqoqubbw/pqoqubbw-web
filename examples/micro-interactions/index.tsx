import { ArchiveIcon } from "./icons/archive";
import { BadgePercentIcon } from "./icons/badge-percent";
import { BellIcon } from "./icons/bell";
import { CalendarCogIcon } from "./icons/calendar-cog";
import { ChartPieIcon } from "./icons/chart-pie";
import { CircleDollarSignIcon } from "./icons/circle-dollar-sign";
import { CursorClickIcon } from "./icons/cursor-click";
import { DeleteIcon } from "./icons/delete";
import { DownvoteIcon } from "./icons/downvote";
import { EditIcon } from "./icons/edit";
import { ExpandIcon } from "./icons/expand";
import { FilePenLineIcon } from "./icons/file-pen-line";
import { FileStackIcon } from "./icons/file-stack";
import { FingerprintIcon } from "./icons/fingerprint";
import { GitPullRequestIcon } from "./icons/git-pull-request";
import { GridIcon } from "./icons/grid";
import { HandCoinsIcon } from "./icons/hand-coins";
import { HomeIcon } from "./icons/home";
import { PartyPopperIcon } from "./icons/party-popper";
import { RefreshIcon } from "./icons/refresh";
import { RouteIcon } from "./icons/route";
import { ScanTextIcon } from "./icons/scan-text";
import { SettingsIcon } from "./icons/settings";
import { SettingsGearIcon } from "./icons/settings-gear";
import { SunIcon } from "./icons/sun";
import { UnplugIcon } from "./icons/unplug";
import { UpvoteIcon } from "./icons/upvote";
import { UsersIcon } from "./icons/users";
import { VolumeIcon } from "./icons/volume";

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
      <div className="flex sm:gap-4 gap-2 items-center flex-wrap">
        <ChartPieIcon />
        <GitPullRequestIcon />
        <FileStackIcon />
        <SunIcon />
        <FingerprintIcon />
        <RouteIcon />
        <VolumeIcon />
      </div>
      <div className="flex sm:gap-4 gap-2 items-center flex-wrap">
        <HomeIcon />
        <FilePenLineIcon />
        <ArchiveIcon />
        <BadgePercentIcon />
        <HandCoinsIcon />
        <CalendarCogIcon />
        <UsersIcon />
        <ChartPieIcon />
        <CircleDollarSignIcon />
      </div>
    </div>
  );
};

export { MicroInteractions };
