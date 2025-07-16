const Profile = ({person: {name, age}, size}) => {
    return (
        <>
            <img src="https://i.imgur.com/QIrZWGIs.jpg" 
            width={size}
            heitht={size} />
            <h3>{`${name}(${age})`}</h3>
        </>
    )
}

export default Profile;