const { Pool } = require('pg')
const connectionString = process.env.DATABASE_URL

const pool = new Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false
    }
})


const dbInit = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS games (
                id  int   PRIMARY KEY,
                name    text,
                turn int
            );
        `)
    } catch (error) {
        console.log(error) // should do some more smarts here
    }
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS settings (
                id  int   PRIMARY KEY,
                name    text
            );
        `)
    } catch (error) {
        console.log(error) // should do some more smarts here
    }
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id int PRIMARY KEY,
                steamName text,
                discordName text
            )
        `)
    } catch (error) {
        
    }   
}

const getUsers = async (id) => {
    dbInit()
    const client = await pool.connect()
    try {
        if (id){
            const res = await client.query('SELECT * FROM users WHERE id = $1', [1])
            console.log(res.rows[0])
        } else {
            const res = await client.query('SELECT * FROM users')
            console.log(res.rows)
        }
    } finally {
      client.release()
    }
}

const getSettings = async (id) => {
    dbInit()
    const client = await pool.connect()
    try {
        if (id){
            const res = await client.query('SELECT * FROM settings WHERE id = $1', [1])
            console.log(res.rows[0])
        } else {
            const res = await client.query('SELECT * FROM settings')
            console.log(res.rows)
        }
    } finally {
      client.release()
    }
}

const getGames = async (id) => {
    dbInit()
    const client = await pool.connect()
    try {
        if (id){
            const res = await client.query('SELECT * FROM games WHERE id = $1', [1])
            console.log(res.rows[0])
        } else {
            const res = await client.query('SELECT * FROM games')
            console.log(res.rows)
        }
    } finally {
      client.release()
    }
}

module.exports = {
    query: (text, params) => pool.query(text, params),
    getUsers,
    getSettings,
    getGames
}