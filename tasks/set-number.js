task("set-number", "set current number")
    .addParam("contract", "the address of contract")
    .addParam("number", "the number of contract")
    .setAction(async taskArgs => {
        const contractAddr = taskArgs.contract
        const BonusContract = await ethers.getContractFactory("BonusContract")
        console.log("reading contract from ", contractAddr)

        const accounts = await ethers.getSigners()
        const signer = accounts[0]

        const bonusContract = await new ethers.Contract(contractAddr, BonusContract.interface, signer)
        await bonusContract.setNumber(taskArgs.number)
    })