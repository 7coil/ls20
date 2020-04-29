import { IsBoolean } from "class-validator";

enum DiscordPermission {
  createInstantInvite = 0x00000001,
  kickMembers = 0x00000002,
  banMembers = 0x00000004,
  administrator = 0x00000008,
  manageChannels = 0x00000010,
  manageGuild = 0x00000020,
  addReactions = 0x00000040,
  viewAuditLog = 0x00000080,
  prioritySpeaker = 0x00000100,
  stream = 0x00000200,
  viewChannel = 0x00000400,
  sendMessages = 0x00000800,
  sendTtsMessages = 0x00001000,
  manageMessages = 0x00002000,
  embedLinks = 0x00004000,
  attachFiles = 0x00008000,
  readMessageHistory = 0x00010000,
  mentionEveryone = 0x00020000,
  useExternalEmojis = 0x00040000,
  viewGuildInsights = 0x00080000,
  connect = 0x00100000,
  speak = 0x00200000,
  muteMembers = 0x00400000,
  deafenMembers = 0x00800000,
  moveMembers = 0x01000000,
  useVad = 0x02000000,
  changeNickname = 0x04000000,
  manageNicknames = 0x08000000,
  manageRoles = 0x10000000,
  manageWebhooks = 0x20000000,
  manageEmojis = 0x40000000,
}

class DiscordPermissions {
  @IsBoolean()
  createInstantInvite: boolean;
  @IsBoolean()
  kickMembers: boolean;
  @IsBoolean()
  banMembers: boolean;
  @IsBoolean()
  administrator: boolean;
  @IsBoolean()
  manageChannels: boolean;
  @IsBoolean()
  manageGuild: boolean;
  @IsBoolean()
  addReactions: boolean;
  @IsBoolean()
  viewAuditLog: boolean;
  @IsBoolean()
  prioritySpeaker: boolean;
  @IsBoolean()
  stream: boolean;
  @IsBoolean()
  viewChannel: boolean;
  @IsBoolean()
  sendMessages: boolean;
  @IsBoolean()
  sendTtsMessages: boolean;
  @IsBoolean()
  manageMessages: boolean;
  @IsBoolean()
  embedLinks: boolean;
  @IsBoolean()
  attachFiles: boolean;
  @IsBoolean()
  readMessageHistory: boolean;
  @IsBoolean()
  mentionEveryone: boolean;
  @IsBoolean()
  useExternalEmojis: boolean;
  @IsBoolean()
  viewGuildInsights: boolean;
  @IsBoolean()
  connect: boolean;
  @IsBoolean()
  speak: boolean;
  @IsBoolean()
  muteMembers: boolean;
  @IsBoolean()
  deafenMembers: boolean;
  @IsBoolean()
  moveMembers: boolean;
  @IsBoolean()
  useVad: boolean;
  @IsBoolean()
  changeNickname: boolean;
  @IsBoolean()
  manageNicknames: boolean;
  @IsBoolean()
  manageRoles: boolean;
  @IsBoolean()
  manageWebhooks: boolean;
  @IsBoolean()
  manageEmojis: boolean;

  constructor({
    createInstantInvite = false,
    kickMembers = false,
    banMembers = false,
    administrator = false,
    manageChannels = false,
    manageGuild = false,
    addReactions = false,
    viewAuditLog = false,
    prioritySpeaker = false,
    stream = false,
    viewChannel = false,
    sendMessages = false,
    sendTtsMessages = false,
    manageMessages = false,
    embedLinks = false,
    attachFiles = false,
    readMessageHistory = false,
    mentionEveryone = false,
    useExternalEmojis = false,
    viewGuildInsights = false,
    connect = false,
    speak = false,
    muteMembers = false,
    deafenMembers = false,
    moveMembers = false,
    useVad = false,
    changeNickname = false,
    manageNicknames = false,
    manageRoles = false,
    manageWebhooks = false,
    manageEmojis = false,
  }: {
    createInstantInvite: boolean,
    kickMembers: boolean,
    banMembers: boolean,
    administrator: boolean,
    manageChannels: boolean,
    manageGuild: boolean,
    addReactions: boolean,
    viewAuditLog: boolean,
    prioritySpeaker: boolean,
    stream: boolean,
    viewChannel: boolean,
    sendMessages: boolean,
    sendTtsMessages: boolean,
    manageMessages: boolean,
    embedLinks: boolean,
    attachFiles: boolean,
    readMessageHistory: boolean,
    mentionEveryone: boolean,
    useExternalEmojis: boolean,
    viewGuildInsights: boolean,
    connect: boolean,
    speak: boolean,
    muteMembers: boolean,
    deafenMembers: boolean,
    moveMembers: boolean,
    useVad: boolean,
    changeNickname: boolean,
    manageNicknames: boolean,
    manageRoles: boolean,
    manageWebhooks: boolean,
    manageEmojis: boolean,
  }) {
    this.createInstantInvite = createInstantInvite;
    this.kickMembers = kickMembers;
    this.banMembers = banMembers;
    this.administrator = administrator;
    this.manageChannels = manageChannels;
    this.manageGuild = manageGuild;
    this.addReactions = addReactions;
    this.viewAuditLog = viewAuditLog;
    this.prioritySpeaker = prioritySpeaker;
    this.stream = stream;
    this.viewChannel = viewChannel;
    this.sendMessages = sendMessages;
    this.sendTtsMessages = sendTtsMessages;
    this.manageMessages = manageMessages;
    this.embedLinks = embedLinks;
    this.attachFiles = attachFiles;
    this.readMessageHistory = readMessageHistory;
    this.mentionEveryone = mentionEveryone;
    this.useExternalEmojis = useExternalEmojis;
    this.viewGuildInsights = viewGuildInsights;
    this.connect = connect;
    this.speak = speak;
    this.muteMembers = muteMembers;
    this.deafenMembers = deafenMembers;
    this.moveMembers = moveMembers;
    this.useVad = useVad;
    this.changeNickname = changeNickname;
    this.manageNicknames = manageNicknames;
    this.manageRoles = manageRoles;
    this.manageWebhooks = manageWebhooks;
    this.manageEmojis = manageEmojis;
  }

  toInteger(): number {
    let permissions = 0;

    if (this.createInstantInvite) permissions |= DiscordPermission.createInstantInvite;
    if (this.kickMembers) permissions |= DiscordPermission.kickMembers;
    if (this.banMembers) permissions |= DiscordPermission.banMembers;
    if (this.administrator) permissions |= DiscordPermission.administrator;
    if (this.manageChannels) permissions |= DiscordPermission.manageChannels;
    if (this.manageGuild) permissions |= DiscordPermission.manageGuild;
    if (this.addReactions) permissions |= DiscordPermission.addReactions;
    if (this.viewAuditLog) permissions |= DiscordPermission.viewAuditLog;
    if (this.prioritySpeaker) permissions |= DiscordPermission.prioritySpeaker;
    if (this.stream) permissions |= DiscordPermission.stream;
    if (this.viewChannel) permissions |= DiscordPermission.viewChannel;
    if (this.sendMessages) permissions |= DiscordPermission.sendMessages;
    if (this.sendTtsMessages) permissions |= DiscordPermission.sendTtsMessages;
    if (this.manageMessages) permissions |= DiscordPermission.manageMessages;
    if (this.embedLinks) permissions |= DiscordPermission.embedLinks;
    if (this.attachFiles) permissions |= DiscordPermission.attachFiles;
    if (this.readMessageHistory) permissions |= DiscordPermission.readMessageHistory;
    if (this.mentionEveryone) permissions |= DiscordPermission.mentionEveryone;
    if (this.useExternalEmojis) permissions |= DiscordPermission.useExternalEmojis;
    if (this.viewGuildInsights) permissions |= DiscordPermission.viewGuildInsights;
    if (this.connect) permissions |= DiscordPermission.connect;
    if (this.speak) permissions |= DiscordPermission.speak;
    if (this.muteMembers) permissions |= DiscordPermission.muteMembers;
    if (this.deafenMembers) permissions |= DiscordPermission.deafenMembers;
    if (this.moveMembers) permissions |= DiscordPermission.moveMembers;
    if (this.useVad) permissions |= DiscordPermission.useVad;
    if (this.changeNickname) permissions |= DiscordPermission.changeNickname;
    if (this.manageNicknames) permissions |= DiscordPermission.manageNicknames;
    if (this.manageRoles) permissions |= DiscordPermission.manageRoles;
    if (this.manageWebhooks) permissions |= DiscordPermission.manageWebhooks;
    if (this.manageEmojis) permissions |= DiscordPermission.manageEmojis;

    return permissions;
  }

  static fromInteger(integer: number): DiscordPermissions {
    return new DiscordPermissions({
      createInstantInvite: (integer & DiscordPermission.createInstantInvite) === DiscordPermission.createInstantInvite,
      kickMembers: (integer & DiscordPermission.kickMembers) === DiscordPermission.kickMembers,
      banMembers: (integer & DiscordPermission.banMembers) === DiscordPermission.banMembers,
      administrator: (integer & DiscordPermission.administrator) === DiscordPermission.administrator,
      manageChannels: (integer & DiscordPermission.manageChannels) === DiscordPermission.manageChannels,
      manageGuild: (integer & DiscordPermission.manageGuild) === DiscordPermission.manageGuild,
      addReactions: (integer & DiscordPermission.addReactions) === DiscordPermission.addReactions,
      viewAuditLog: (integer & DiscordPermission.viewAuditLog) === DiscordPermission.viewAuditLog,
      prioritySpeaker: (integer & DiscordPermission.prioritySpeaker) === DiscordPermission.prioritySpeaker,
      stream: (integer & DiscordPermission.stream) === DiscordPermission.stream,
      viewChannel: (integer & DiscordPermission.viewChannel) === DiscordPermission.viewChannel,
      sendMessages: (integer & DiscordPermission.sendMessages) === DiscordPermission.sendMessages,
      sendTtsMessages: (integer & DiscordPermission.sendTtsMessages) === DiscordPermission.sendTtsMessages,
      manageMessages: (integer & DiscordPermission.manageMessages) === DiscordPermission.manageMessages,
      embedLinks: (integer & DiscordPermission.embedLinks) === DiscordPermission.embedLinks,
      attachFiles: (integer & DiscordPermission.attachFiles) === DiscordPermission.attachFiles,
      readMessageHistory: (integer & DiscordPermission.readMessageHistory) === DiscordPermission.readMessageHistory,
      mentionEveryone: (integer & DiscordPermission.mentionEveryone) === DiscordPermission.mentionEveryone,
      useExternalEmojis: (integer & DiscordPermission.useExternalEmojis) === DiscordPermission.useExternalEmojis,
      viewGuildInsights: (integer & DiscordPermission.viewGuildInsights) === DiscordPermission.viewGuildInsights,
      connect: (integer & DiscordPermission.connect) === DiscordPermission.connect,
      speak: (integer & DiscordPermission.speak) === DiscordPermission.speak,
      muteMembers: (integer & DiscordPermission.muteMembers) === DiscordPermission.muteMembers,
      deafenMembers: (integer & DiscordPermission.deafenMembers) === DiscordPermission.deafenMembers,
      moveMembers: (integer & DiscordPermission.moveMembers) === DiscordPermission.moveMembers,
      useVad: (integer & DiscordPermission.useVad) === DiscordPermission.useVad,
      changeNickname: (integer & DiscordPermission.changeNickname) === DiscordPermission.changeNickname,
      manageNicknames: (integer & DiscordPermission.manageNicknames) === DiscordPermission.manageNicknames,
      manageRoles: (integer & DiscordPermission.manageRoles) === DiscordPermission.manageRoles,
      manageWebhooks: (integer & DiscordPermission.manageWebhooks) === DiscordPermission.manageWebhooks,
      manageEmojis: (integer & DiscordPermission.manageEmojis) === DiscordPermission.manageEmojis,
    })
  }
}

export {
  DiscordPermission,
  DiscordPermissions
}
