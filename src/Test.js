
function Avatar(props) {
    // recebe user no formato JSON.
    return (
        <img src={props.user.avatarUrl} alt={props.user.name} />
    );
}

function UserInfo(props) {
    return (
        <div>
            <hr/><Avatar user={props.user} />
                <div>{props.user.name}</div>
            <hr/>
        </div>
    );
}

function Comment(props) {
    // recebe author no formato JSON.
    return (
        <div>
            <UserInfo user={props.author} />
            <br />
            <div>{props.text}</div>
        </div>
    );
}

function Test(props) {
    return (
        <div>
            <Comment author={ {avatarUrl: 'logo192.png', name: 'Sam'} } text="Lorem ipsum..." />
            <h1>{props.titulo}</h1>
        </div>
    );
}

export default Test; 