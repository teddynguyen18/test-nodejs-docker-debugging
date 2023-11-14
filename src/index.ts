import ganache from 'ganache';

const server = ganache.server();
const PORT = +(process.env.PORT || 8545);
server.listen(PORT, async err => {
  if (err) throw err;

  console.log(`Ganache listening on port ${server.address().port}...`);
  const provider = server.provider;
  const accounts = await provider.request({
    method: 'eth_accounts',
    params: [],
  });
  console.log('accounts:', accounts);
});
