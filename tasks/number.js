task("number", "print current number")
    .addParam("contract", "the address of contract")
    .setAction(async taskArgs => {
        const contractAddr = taskArgs.contract
        const BonusContract = await ethers.getContractFactory("BonusContract")
        console.log("reading contract from ", contractAddr)

        const accounts = await ethers.getSigners()
        const signer = accounts[0]

        const bonusContract = await new ethers.Contract(contractAddr, BonusContract.interface, signer)
        let result = BigInt(await bonusContract.number()).toString()
        console.log("number is", result)
    })