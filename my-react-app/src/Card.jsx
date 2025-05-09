import profilePic from './assets/profile.jpeg'; // Assuming the image is in the same directory

export default function Card() {
    return (       
       <>
        <div className="card">
            <br />
            <img className='profilePic' src={profilePic} alt="profile pic" />
            <h2>Card Title</h2>
            <p>This is a card component.</p>
            <br />
            <button>Click Me</button>
        </div>
        {/* <hr />    */}
       </>
     )
}

