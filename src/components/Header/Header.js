import './Header.css'
function Header(){
    const navbar = ["Home","Resourses", "FAQs","Blog"]; 
    return(
        <div className='header'>
          <h2>💸Scale</h2>
          <ul>
        {navbar.map((val,i)=> <li key={i}>{val}</li>)}
      </ul>
      <div className='user'>
        <p>Log in</p>
        <button>Join now</button>
      </div>
        </div>
    )
}
export default Header