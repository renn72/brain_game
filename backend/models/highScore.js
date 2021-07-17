import db from '../db/db.js'

const User = {
  find(id) {
    const sql = `
      SELECT * FROM users
      WHERE id = $1
    `
    return db.query(sql, [id]).then(dbRes => dbRes.rows && dbRes.rows[0])
  },

  
}

export default User
