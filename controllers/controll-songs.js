const Song = require('../models/Song')

const Author = require('../models/Author')

module.exports = {
    index :  async (req,res)=>{
        try {
            const data = await Song.find({})

            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    },
    findById : async (req, res)=>{
        const {id} = req.params

        try {
           const data = await Song.findById(id) 

           return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }

    },
    save : async (req,res)=>{
        const {id} = req.params

        try {
            const author = await Author.findById(id)

            const song = new Song(req.body)

            song.author = id

            author.songs.push(song)
        
            await author.save()

            const data = await song.save()

            return res.status(200).json({"state":true,"data":data})
            
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})            
        }

    }
}