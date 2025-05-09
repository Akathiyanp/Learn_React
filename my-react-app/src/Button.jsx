export default function Button() {
    const handleClick = (e) => e.target.textContent = "clicked";
       
    
    
    return (  
        
        <button onDoubleClick={(e) =>handleClick(e)}>click me 😂</button>
        
      
    );

}
