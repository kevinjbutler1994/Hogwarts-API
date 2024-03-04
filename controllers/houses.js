import House from "../models/House.js"

export const getHouses = async (req, res) => {
    try {
        const id = req.params
        const houses = await House.find();
        res.json(houses)
    } catch (error) {
            console.error(error)
            res.status(500).json({error: error.message})
        }};


export const getHouse = async (req, res) => {
    try {
        const house = new House(req, body)
        await house.save()
        res.json(house)
        }

    catch (error) {
            console.error(error)
            res.status(500).json({error: error.message})
        }};

export const updateHouse = async (rec, res) => {
    const {id} = req.params
    const updated = await House.findByIdAndUpdate(id)
    if (updated) {
        return res.status(200).send("House Updated")
    }}

    export const deleteHouse = async (rec, res) => {
        const {id} = req.params
        const deleted = await House.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("House Deleted")
        }};
