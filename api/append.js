module.exports = async (req, res) => {
    console.log(req.body)
    console.log(req.headers)

    const data = JSON.parse(Object.keys(req.body)[0])

    const { MongoClient } = require('mongodb')
    require('dotenv').config()
    const client = new MongoClient(process.env.MONGO)
    const dbName = 'personal'
    const collectionName = 'wardrobe'

    try {
        await client.connect()
        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const { id, type, material, context, condition, color, size, brand } = data

        await collection.replaceOne({ _id: id }, { _id: id, type, material, context, condition, color, size, brand }, { upsert: true })

        res.send('Ok!')
    } catch (error) {
        return res.status(400).send(error.message)
    }
}