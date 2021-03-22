import postMessage from '../models/postMessage.js';
import PostMessage from '../models/postMessage.js';
export const getPost=(req,res)=>{
    try{
        const postMessages=await PostMessage.find();
        res.status(200).json(postMessage);
        console.log(postMessage);
 
    }catch(error){

    res.status(404).json({message:error.message});
}
}
export const createPost=async(req,res)=>{
    const post=req.body;
    const newpost=new postMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json({message:error.message});

    }

}