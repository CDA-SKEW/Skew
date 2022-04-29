const connection = require("../../config/ConnectionDB");

// Model
const CandidatCandidatures = function (candidature) {
    this.id = candidat.id,
        this.user_id = candidature.user_id,
        this.title = candidature.title,
        this.type = candidature.type,
        this.period = candidature.period,
        this.description = candidature.description,
        this.name = candidature.name,
        this.statut = candidature.statut,
        this.mail = candidature.mail,
        this.document = candidature.document
};

const CandidatPostuled = function (postuled) {
    this.document_id = Number(postuled.id),
        this.user_id = Number(postuled.user_id),
        this.offre_id = Number(postuled.offre_id)
};



// Get All
CandidatCandidatures.getCandidatures = function (id, result) {

    connection.getConnection(function (error, conn) {
        if (error) throw error;

        conn.query(
            `
           select p.statut,p.offre_id, p.id, o.title, o.type, o.period, o.description , c.name, c.avatar, u.mail from postuled as p
           inner join offre as o
           ON p.offre_id= o.offer_id
           inner join contactProfil as c
           ON o.user_id = c.user_id
           INNER JOIN user as u 
           ON o.user_id = u.id
           where p.user_id = :id;
        `
            , { id }, (error, data) => {
                if (error) throw error;
                result(null, data);
                conn.release();

            })

    }
    )
}

CandidatPostuled.postCandidatures = function (body, result) {
    const { offre_id, document_id, user_id } = body;
    connection.getConnection(function (error, conn) {
        conn.query(`
        INSERT INTO postuled
         SET 
            user_id = :user_id,
            document_id = :document_id,
            offre_id = :offre_id
            ;`,
            { offre_id, document_id, user_id }
            , (error, data) => {
                if (error) throw error;
                result(null, data);
                conn.release();
            }
        );
    });
}

// Delete by ID (row)
CandidatCandidatures.deleteCandidatures = function (id, result) {
    connection.getConnection(function (error, conn) {
        if (error) throw error
        conn.query(`DELETE FROM postuled WHERE id = ${id}`, (error, data) => {
            if (error) throw error;
            result(null, data);
            conn.release();
        });
    });
};
module.exports = { CandidatCandidatures, CandidatPostuled };