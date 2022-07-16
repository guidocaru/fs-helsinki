const PersonForm = ({ onSubmit, newName, onChangeName, newPhone, onChangePhone }) => {
    return (
        <div>
            <form
                onSubmit={onSubmit}>
                <div>Name:
                    <input value={newName}
                        onChange={onChangeName} />
                </div>
                <div>Phone:
                    <input value={newPhone}
                        onChange={onChangePhone} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm