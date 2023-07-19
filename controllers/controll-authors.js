const Author = require('./../models/Author')


module.exports = {
    index : async (req,res)=>{
        try{
            const data = await Author.find({})

            return res.status(200).json({"state":true,"data":data})            
        }catch(err){
            return res.status(503).json({"state":false, "error":err.err})
        }
    },

    findById : async( req,res)=>{
        const {id} = req.params   
        try {
            const author = await Author.findById(id).populate('songs')
            
            return res.status(200).json({"state":true,"data":author})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }     
    },

    save : async(req,res)=>{
        const author = new Author(req.body)

        try {
            const data = await author.save()

            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
        
        return res.status(200).json({"state":true,"data":author})
    },

    update : async(req,res)=>{
        const {id} = req.params

        const author = req.body

        try {
         const data = await Author.findByIdAndUpdate(id,author)   

         return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"status":500,"error":error})
        }
    },
    erase : async (req,res)=>{
        const {id} = req.params       

        try {
            const data = await Author.findByIdAndDelete(id)
            
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    }
}