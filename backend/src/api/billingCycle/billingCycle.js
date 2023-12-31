const restful = require('node-restful')
const mongoose = restful.mongoose


const creditSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Informe o nome do crédito']},
    value: {type: Number, min: 0, required: [true, 'Informe o valor do crédito']}
})

const debtSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Informe o nome do débito']},
    value: {type: Number, min: 0, required: [true, 'Informe o valor do débito.']},
    status: {type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    month: {type: Number, min: 1, max: 12, required: [true, 'Informe o Mês']},
    year: {type: Number, min: 1970, max: 2100, required: [true, 'Informe o Ano']},
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('billingCycle', billingCycleSchema)