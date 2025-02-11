import express from 'express';

export async function testController(req,res){
    res.status(200).json({message:'Test controller working!'});
}