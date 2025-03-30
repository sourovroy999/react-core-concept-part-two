export default function Friend({allFriend}){

    // desturcture allFriend namok object
    const{name,email}=allFriend;

    return(
        <div className="box">
            <h4>Name: {name} </h4>
            <p>email: {email} </p>
        </div>
    )
}