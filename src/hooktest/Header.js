export default function Header({isDark}){
  console.log("[Header]  isDark : ", isDark);
  return (
    <header
      className='header'
      style={{
        backgroundColor : isDark? "black":"lightgray",
        color: isDark? 'white':'black'
      }}
    >
      <h1>Welcome 홍길동</h1>
    </header>
  );
}