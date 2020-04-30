const redirects = [
  {
    path: '/',
    exact: true,
    status: 301,
    to: () => '/en-GB'
  }
]

export {
  redirects
}
