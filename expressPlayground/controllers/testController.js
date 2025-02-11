import express from 'express';

export async function testController(req,res){
    res.status(200).json({message:'Hello world from Express.js!'});
}