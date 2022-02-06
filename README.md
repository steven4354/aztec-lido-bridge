
Use node version 16

Create .env from .env.sample

```
npm install;
npx hardhat node
```

change the `signerAddress` in `src/contracts/lido_bridge.test.ts` to one of the wallets in from the console running
`npx hardhat node`

```
yarn test
```

## Troubleshooting

-     error:0308010C:digital envelope routines::unsupported
see: https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported

