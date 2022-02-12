import { ethers } from 'hardhat';
import hre from 'hardhat';
import abi from '../artifacts/contracts/LidoBridge.sol/LidoBridge.json';
import notionalBridgeAbi from '../artifacts/contracts/NotionalBridge.sol/NotionalBridge.json';
import { Contract, Signer } from 'ethers';
import { DefiBridgeProxy, AztecAssetType } from './defi_bridge_proxy';
import { formatEther, parseEther } from '@ethersproject/units';
import { WSTETH_ABI } from '../abi/wsteth';

describe('lido defi bridge', function () {
  let bridgeProxy: DefiBridgeProxy;
  // let lidoBridgeAddress: string;
  let lidoStakingAddress: string;
  let wstETHAddress: string;
  let wstETH: Contract;
  let signer: Signer;
  let signerAddress: string;
  let notionalLendAddress: string;
  let notionalBridgeAddress: string;

  beforeEach(async () => {
    // reset balance and impersonation each time since amount can change

    await hre.network.provider.request({
      method: 'hardhat_reset',
      params: [
        {
          forking: {
            jsonRpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`
          }
        }
      ]
    });

    wstETHAddress = '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0';
    lidoStakingAddress = '0xae7ab96520de3a18e5e111b5eaab095312d7fe84';
    signerAddress = '0x23618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f';

    // TODO:
    notionalLendAddress = '0x1344A36A1B56144C3Bc62E7757377D288fDE0369';

    await hre.network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [signerAddress]
    });

    signer = await ethers.getSigner(signerAddress);

    wstETH = new Contract(wstETHAddress, WSTETH_ABI, signer);

    bridgeProxy = await DefiBridgeProxy.deploy(signer);

    // TODO:
    // lidoBridgeAddress = await bridgeProxy.deployBridge(signer, abi, []);
    notionalBridgeAddress = await bridgeProxy.deployBridge(signer, notionalBridgeAbi, []);

    // Send some eth to the aztec bridge for usage
    await signer.sendTransaction({
      to: bridgeProxy.address,
      value: parseEther('350')
    });
  });

  it('it should x', async () => {
    console.log(`x log`);

   expect(true).toBe(true)
  });
});
