import fs from 'fs';
import path from 'path';

interface DiscordApplicationSecretObject {
  id: string
  clientSecret: string
  token: string
}

class DiscordApplicationSecret implements DiscordApplicationSecretObject {
  id: string
  clientSecret: string
  token: string

  constructor() {
    let location = path.join(__dirname, '..', '..', 'secrets', 'discord_application.json')
    if (process.env.DOCKER) location = '/run/secrets/discord_application'

    const data: DiscordApplicationSecretObject = JSON.parse(fs.readFileSync(location, { encoding: 'UTF-8' }))

    this.id = data.id;
    this.clientSecret = data.clientSecret;
    this.token = data.token;
  }
}

const discordApplicationSecret = new DiscordApplicationSecret();

console.log(discordApplicationSecret);

export {
  DiscordApplicationSecret,
  discordApplicationSecret
}
