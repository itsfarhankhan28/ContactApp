const ContactSchema = require('../model/contactschema')

const CreateContact = async(req,res)=>{
    try{
        const contactdata = new ContactSchema(req.body)
        const contact = await contactdata.save()
        res.json(contact)
    }catch(err){
        console.log(err)
        res.status(400).json({message:"Error in entering data"})
    }
}

const GetContact = async(req,res)=>{
    try{
        const contactdetails = await ContactSchema.find()
        console.log(contactdetails)
        res.json(contactdetails)
    }catch(err){
        console.log(err)
    }
}

const UpdateContact = async(req,res)=>{
    const id = req.params.id
    const updateddata = ({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        state:req.body.state
    })
    try{
        const updateval = await ContactSchema.findByIdAndUpdate(
            id,
            updateddata,
            {new:true},
            {function(err,success){
                if(err) throw(err)
                else{
                    res.send({msg:success})
            }
            }}
        ) 
        console.log(updateval)
        res.json(updateval)
    }catch(err){
        console.log(err)
    };
}

const DeleteContact = async(req,res)=>{
    const id = req.params.id
    try{
        const DeletedContact = await ContactSchema.findByIdAndDelete(id)
        res.json(DeletedContact)
    }catch(err){
        console.log(err)
    }
}

module.exports = {CreateContact , GetContact , UpdateContact , DeleteContact}