import { FaEdit, FaTrash } from "react-icons/fa"
import PropTypes from 'prop-types';

const NoteCard = ({ note, onEdit, deleteNote }) => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">{ note.title }</h2>
            <p>{ note.description }</p>
            <div className="flex justify-end mt-2">
                <button className="text-blue-500 mr-2" onClick={ () => onEdit(note) }>
                    <FaEdit />
                </button>
                <button className="text-red-500" onClick={ () => deleteNote(note._id) }>
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}

NoteCard.propTypes = {
    note: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default NoteCard