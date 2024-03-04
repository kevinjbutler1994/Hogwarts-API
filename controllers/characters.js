import Character from "../models/Character.js"


export const getCharacters = async (req, res) => {
    try {
        const id = req.params
        const characters = await Character.find();
        res.json(characters)
    } catch (error) {
            console.error(error)
            res.status(500).json({error: error.message})
        }};


export const getCharacter = async (req, res) => {
    try {
        const character = new Character(req, body)
        await character.save()
        res.json(character)
        }

    catch (error) {
            console.error(error)
            res.status(500).json({error: error.message})
        }};

export const updateCharacter = async (rec, res) => {
    const {id} = req.params
    const updated = await Character.findByIdAndUpdate(id)
    if (updated) {
        return res.status(200).send("Character Updated")
    }}

    export const deleteCharacter = async (rec, res) => {
        const {id} = req.params
        const deleted = await Character.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Character Deleted")
        }};
