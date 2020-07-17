'use strict'

const Database = use('Database')

class ReportController {

    async index() {

        const data = await Database
                            .table('mdl_user')
                            

        return data
    }

}

module.exports = ReportController
