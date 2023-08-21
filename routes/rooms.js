import  express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/room.js";

const router=express.Router();

//CREATE
router.post("/:hotelid",createRoom);


//update
router.put("/:id", verifyAdmin,updateRoom);
router.put("/availability/:id", updateRoomAvailability);


//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);


//get 
router.get("/:id",getRoom);



//get all
router.get("/", getRooms);



export default router;