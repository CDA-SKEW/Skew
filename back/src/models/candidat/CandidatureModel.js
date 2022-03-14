const connection = require("../../config/ConnectionDB");

// Model
const CandidatCandidatures = function (candidature) {
    this.id = candidat.id,
        this.user_id = candidature.user_id,
        this.title = candidature.title,
        this.ets = candidature.ets,
        this.city = candidat.city
};



// Get All
CandidatCandidatures.getCandidatures = function (result) {
    // console.log('getProfil', user_id)

    let Obj = {
        candidature: []
    };

    connection.getConnection(function (error, conn) {
        if (error) throw error;

        conn.query(`
            SELECT *
                FROM offre 
            `, (error, data) => {
            if (error) throw error;
            Obj.candidature = data
            result(null, Obj);
            conn.release();

        })

    }
    )
}
module.exports = CandidatCandidatures;