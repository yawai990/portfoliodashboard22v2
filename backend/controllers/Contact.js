const Contact=  require('../model/Contact');

const getContact =async(req,res)=>{
    try {
        const data = await Contact.find()

        res.status(200).json({
            contact:data
        })
    } catch (error) {
            res.status(400).json({
                message:error.message
            })
    }
};

const updateContact = async(req,res)=>{
    const id = req.params.id;
    const contactlist = req.body;

    try {
            const data =await Contact.find();

            if(data.length <= 0 ){
                const newList= new Contact(contactlist);

                await newList.save();

                res.status(200).json({
                    contact:newList
                })
            }else{
           await Contact.findByIdAndUpdate(id,{...contactlist,id},{new:true})};

            res.status(204).json({
                contact:contactlist
            })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

module.exports = {getContact,updateContact}