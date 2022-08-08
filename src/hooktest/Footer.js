export default function Footer({isDark, setIsDark}){
  const toggleTheme = ()=>{
    setIsDark(!isDark);
    console.log("Theme changed....", isDark)
  }
  return (
    <footer
      className='footer'
      style={{
        backgroundColor : isDark? "black":"lightgray",
      }}
    >
      <button onClick={toggleTheme}>색상변경</button>
    </footer>
  );
}