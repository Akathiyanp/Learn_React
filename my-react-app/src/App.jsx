// import Header from "./Header.jsx";
// import Footer from "./Footer.jsx";
// import Food from "./Food.jsx";
// import Card from "./Card.jsx";
// import Student from "./Student.jsx";
// import List from "./List.jsx";
// import UserGreeting from "./UserGreeting.jsx";
import MyComponent from "./MyComponent.jsx";
import Button from "./Button.jsx";
import ProfilePic from "./ProfilePic.jsx";
import MyComponent2 from "./MyComponent2.jsx";
function App() {
  //   const fruits = [
  //     { id: 1, name: "Apple", price: 100 },
  //     { id: 2, name: "Banana", price: 10 },
  //     { id: 3, name: "Date", price: 200 },
  //     { id: 4, name: "Cherry", price: 200 },
  //     { id: 5, name: "Elderberry" },
  //   ];
  //   const vegetables = [
  //     { id: 6, name: "Potato", price: 10 },
  //     { id: 7, name: "Mango", price: 80 },
  //     { id: 8, name: "Carrot", price: 120 },
  //     { id: 9, name: "Tomato", price: 250 },
  //     { id: 10, name: "Chilli", price: 10 },
  //   ];

  return (
    <>
      {/* <ProfilePic />
       <Button /> */}
      <MyComponent />
      <br />
      <MyComponent2/>
      {/* <Header /> */}
   

      {/* <Food /> */}
      {/* <Card/>
     <Card/>
     <Card/>
     <Card/> */}

      {/* <Student name="akathiyan" age="20" isStudent="true" />

      <Student name="bahubali" age={30} isStudent={false} />

      <UserGreeting isLoggedIn={true} name="ak_The_Dragon" />

      {fruits.length > 3 && <List items={fruits} category="Fruits" />}

      {fruits.length > 4 ? (
        <List items={vegetables} category="Vegetables" />
      ) : null} */}

      {/* <Footer /> */}
    </>
  );
}

export default App;
