import {
  AutocompleteInteraction,
  ApplicationCommandOptionChoiceData,
} from "discord.js";

import { getFilteredChoices } from "commands/_utils";
import { Options } from "commands/role/builder";
import { getOption } from "utils";

/**
 * Handles autocompletion for the "role" command.
 * @param interaction
 * @return void
 */
export const roleAutocomplete = async (
  interaction: AutocompleteInteraction,
): Promise<void> => {
  if (!interaction.isAutocomplete()) return;

  const allowedRoles = getOption<string[]>("iam_roles") ?? [];
  const discordRoles =
    interaction.guild?.roles.cache
      .filter(role => allowedRoles.includes(role.id))
      .map(role => ({ name: role.name, value: role.id })) ?? [];

  let choices: ApplicationCommandOptionChoiceData[] = discordRoles;
  const focused = interaction.options.getFocused(true);

  if (focused.name === Options.ROLE_SELF_ASSIGN)
    choices = getFilteredChoices(choices, focused.value);

  await interaction.respond(choices);
};
