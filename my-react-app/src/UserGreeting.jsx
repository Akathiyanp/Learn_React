export default function UserGreeting(props) {

  const LoggedIn = <p>Welcome {props.name}</p>;

  const NotLoggedIn = <p>Please log in</p>;
  
  
  return props.isLoggedIn ?  LoggedIn  :  NotLoggedIn ;

}
