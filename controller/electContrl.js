const model = require("../models");
const electModel = model.electModel;

const createPayment = async(req,res)=>{
    const month = req.body.meterCount * req.body.vat;
    const bal = month - req.body.amountPaid;
    try {
        
        
        const receipt = {
            District: req.body.District,
            meterNum: req.body.meterNum,
            meterCount: req.body.meterCount,
            vat: req.body.vat,
            monthlyDue: month,
            amountPaid: req.body.amountPaid,
            balance: bal
        };
        if(receipt.District.length < 4){
            res.status(400).json({
                message: "please fill in your District correctly"
            })
        }else if(receipt.amountPaid < 1000){
            res.status(400).json({
                message: "please increase the amount you paid "
            })
        }else if(receipt.vat <50 || receipt.vat >50){
            res.status(400).json({
                message: "Vat most be 500 please"
            })
        }
        else{
            const pay = await electModel.create(receipt);
            res.status(201).json({
                message: "Successfully paid and this is your receipt",
                data: pay
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        // console.log(typeof bal)
    }
};

const deleteRec = async(req,res)=>{
    try {
        let id = req.params.id
        const remove = await electModel.destroy({where: {id:id}});
        if(remove === 0){
            res.status(400).json({
                message: "User not found"
            })
        }else{
            res.status(200).json({
                message: "Successfully deleted"
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};

const allReceipts = async(req,res)=>{
    try {
        const all = await electModel.findAll();
        res.status(200).json({
            message: "All paid users " + all.length,
            data: all
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

// get oneRec
const getOneReceipt = async(req, res)=>{
    try {
        let id = req.params.id
        const oneReceipt = await electModel.findAll({where:{id}})
        if(oneReceipt.length === 0){
            res.status(404).json({
                message: `No such id:${id}`
            })
        }else{
            res.status(201).json({
                data: oneReceipt
            })
        }

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

module.exports = {
    createPayment,
    deleteRec,
    allReceipts,
    getOneReceipt
}