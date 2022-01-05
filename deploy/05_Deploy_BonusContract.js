module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
   const { deploy, log } = deployments;
   const { deployer } = await getNamedAccounts();
   const chainId = await getChainId() 

   const BonusContract = await deploy("BonusContract", {
       from: deployer,
       log: true
   })
   log("Contract deployed at " + BonusContract.address)
   log("--------------------------------------------------")
}

module.exports.tags = ['bonusContract']