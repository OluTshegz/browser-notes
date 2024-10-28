import { useState } from "react"
import axios from "axios"

import Navbar from "../components/Navbar"
import NoteModal from "../components/NoteModal"

const Home = () => {

    const [isModalOpen, setModalOpen] = useState(false)
    const closeModal = () => {
        setModalOpen(false)
    }
    const addNote = async (title, description) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/note/add",
                { title, description }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            )
            console.log(response)
            if (response.data.success) {
                closeModal()
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                Home
                <Navbar />
                <button onClick={ () => setModalOpen(true) }
                    className="fixed right-4 bottom-4 text-2xl bg-teal-500 text-white font-bold p-2 rounded-full">
                    +
                </button>
                { (isModalOpen) && <NoteModal closeModal={ closeModal }  addNote={ addNote } /> }
            </div>
        </>
    )
}

export default Home