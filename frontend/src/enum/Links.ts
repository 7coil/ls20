enum Links {
  discordServer = 'https://discordapp.com/invite/wHgdmf4',
  githubRepository = 'https://github.com/7coil/ls20',
  developmentApiServer = 'http://127.0.0.1:8000',
  productionApiServer = 'https://api.discordapps.dev',
}

const getApiServer = () => {
  if (typeof process !== 'undefined') {
    if (process.env.NODE_ENV === 'production') return Links.productionApiServer;
    return Links.developmentApiServer
  }

  if (typeof window !== 'undefined') {
    if (window.location.host === '127.0.0.1') return Links.developmentApiServer;
    return Links.productionApiServer
  }

  return Links.developmentApiServer
}

export { Links, getApiServer };
