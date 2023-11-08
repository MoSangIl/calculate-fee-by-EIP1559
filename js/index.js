"use strict";

const MaxGasPerBlock = 30000000

const baseFeeH1 = document.getElementById("base-fee");
const valueStrong = baseFeeH1.getElementsByTagName("strong")[0]

const totalFeeH1 = document.getElementById("total-fee");
const totalFeeValueStrong = totalFeeH1.getElementsByTagName("strong")[0]

const Web3HTTPController = new Web3(IPCHTTPURL);

const GetNextBlockBaseFee = async () => {

    let block = await Web3HTTPController.eth.getBlock("latest", false)

    const gasUsed = parseInt(block.gasUsed)
    const baseFee = parseInt(block.baseFeePerGas, 16)
    console.log(`${block.number}th block | gasUsed: ${gasUsed} Wei baseFee: ${baseFee} Wei`)

    const gasUsedPercentage = (gasUsed / MaxGasPerBlock) * 100
    console.log(`percentage for gas used (max:30M): ${gasUsedPercentage}`)

    const nextBaseFee = BigInt(Math.floor(baseFee + baseFee * (gasUsedPercentage - 50) * ((12.5/50)/100)));
    console.log(`${block.number+BigInt(1)}th base Fee: ${nextBaseFee} Wei`)

    valueStrong.innerText = `${nextBaseFee} Wei`

    const totalFee = BigInt(21000)*(nextBaseFee + BigInt(2000000000))
    totalFeeValueStrong.innerText = `${totalFee} Wei`
    return nextBaseFee
}

GetNextBlockBaseFee()
let process = setInterval(GetNextBlockBaseFee, 12000)

