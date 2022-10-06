import { CommandFn } from "arcybot";

import { badgecreate } from "./badgecreate/logic";
import { badgedelete } from "./badgedelete/logic";
import { badgeedit } from "./badgeedit/logic";
import { badgegive } from "./badgegive/logic";
import { badgerevoke } from "./badgerevoke/logic";
import { meme } from "./meme/logic";
import { memeadd } from "./memeadd/logic";
import { memedelete } from "./memedelete/logic";
import { memelist } from "./memelist/logic";
import { profile } from "./profile/logic";
import { register } from "./register/logic";
import { setdescription } from "./setdescription/logic";
import { update } from "./update/logic";
import { vid } from "./vid/logic";

export const commandsFunctions: CommandFn[] = [
  badgecreate,
  badgedelete,
  badgeedit,
  badgegive,
  badgerevoke,
  meme,
  memeadd,
  memedelete,
  memelist,
  profile,
  register,
  setdescription,
  update,
  vid,
];
