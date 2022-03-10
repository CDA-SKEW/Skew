const connection = require("../../config/ConnectionDB");
const { user } = require("../../config/db");
const CandidatDocument = function (document) {
    this.id_document = Number(document.id),
        this.user_id = Number(document.user_id),
        this.title = String(document.title)

};


// Create Document
CandidatDocument.createDocumentProfil = function (newDocument, file, result) {
    const { user_id, title } = newDocument
    // console.log('mlodel create Document', newDocument, file)
    connection.getConnection(function (error, conn) {
        conn.query(`
        INSERT INTO document
         SET 
            user_id = :user_id,
            title = :title
            ;`,
            { user_id, title }
            , (error, data) => {
                if (error) throw error;
                conn.query(`SELECT u.id,d.*
                FROM user as u
                INNER JOIN document as d
                ON u.id = d.user_id
                WHERE u.id = :user_id;`, { user_id }, (error, data) => {
                    if (error) throw error;
                    result(null, data);
                    conn.release();
                });
            }
        );
    });
};



// Delete by ID (row)
CandidatDocument.deleteDocumentProfil = function (id, result, user_id, id_document) {
    connection.getConnection(function (error, conn) {
        conn.query(`DELETE FROM document WHERE id_document = ${id};`, (error, data) => {
            { user_id, id }
            if (error) throw error;
            conn.query(`SELECT u.id,d.*
            FROM user as u
            INNER JOIN document as d
            ON u.id = d.user_id
            WHERE u.id = :user_id;`, { user_id }, (error, data) => {
                if (error) throw error;
                result(null, data);
                conn.release();
            });
        });
    });
};
module.exports = CandidatDocument;