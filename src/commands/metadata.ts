import {
    ApplicationCommandType,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
    RESTPostAPIContextMenuApplicationCommandsJSONBody,
} from 'discord.js';

import { Language } from '../models/enum-helpers/index.js';
import { Lang } from '../services/index.js';
import { Args } from './index.js';

export const ChatCommandMetadata: {
    [command: string]: RESTPostAPIChatInputApplicationCommandsJSONBody;
} = {
    HELP: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.help', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.help'),
        description: Lang.getRef('commandDescs.help', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.help'),
        dm_permission: false,
        default_member_permissions: '0',
        options: [
            {
                ...Args.HELP_OPTION,
                required: true,
            },
        ],
    },
    INFO: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.info', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.info'),
        description: Lang.getRef('commandDescs.info', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.info'),
        dm_permission: false,
        default_member_permissions: '0',
        options: [
            {
                ...Args.INFO_OPTION,
                required: true,
            },
        ],
    },
    ADD_CHANNEL: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.addChannel', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.addChannel'),
        description: Lang.getRef('commandDescs.addChannel', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.addChannel'),
        dm_permission: false,
        default_member_permissions: undefined,
        options: [
            {
                ...Args.ADD_CHANNEL_OPTION,
                required: true,
            },
        ],
    },
};

export const MessageCommandMetadata: {
    [command: string]: RESTPostAPIContextMenuApplicationCommandsJSONBody;
} = {
    VIEW_DATE_SENT: {
        type: ApplicationCommandType.Message,
        name: Lang.getRef('messageCommands.viewDateSent', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('messageCommands.viewDateSent'),
        default_member_permissions: '0',
        dm_permission: false,
    },
};

export const UserCommandMetadata: {
    [command: string]: RESTPostAPIContextMenuApplicationCommandsJSONBody;
} = {
    VIEW_DATE_JOINED: {
        type: ApplicationCommandType.User,
        name: Lang.getRef('userCommands.viewDateJoined', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('userCommands.viewDateJoined'),
        default_member_permissions: '0',
        dm_permission: false,
    },
};
