import connector from "./connector.js";


export async function getAll(table) {
    const queryString = `SELECT * FROM ${table};`;
    let res = await connector
        .getConnection()
        .then(async(conn) => {
            let response = await conn.query(queryString);
            if (response.length != 0) {
                return response;
            } else {
                return { error: response };
            }
        })
        .catch((err) => {
            return { error: err.message };
        });
    return res;
}