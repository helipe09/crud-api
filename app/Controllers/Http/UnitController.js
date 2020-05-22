'use strict'

const Unit = use('App/Models/Unit')
const Logger = use('Logger')

class UnitController {

    // RETURN ALL UNITS - ROUTE '/units' :GET
    async index({ response }) {

        Logger.info("Return all Units");
        const units = Unit.all()
        return units

    }

    async get({ response, request, params }) {

        Logger.info("Return specific unit");
        console.log(params);
        const unit = await Unit.find(params.id);
        console.log(JSON.stringify(unit));
        return unit

    }

    async delete({ response, params }) {
        Logger.info("Remove specific unit");
        console.log(params);
        const unit = await Unit.find(params.id);
        await unit.delete()

        response.send({ 'message': 'Unit has been removed' })
    }


    // SAVE NEW UNIT - ROUTE: '/units' :POST
    async create({ response, request, params }) {

        Logger.info('Create new Unit');

        try {

            const data = request.all();
            console.log(data);
            const unit = await Unit.create(data)
            response.send({ 'message': 'Unit has been saved' })

        } catch (error) {
            Logger.error(error)
            response.send({ 'error': error })
        }
    }

}

module.exports = UnitController
