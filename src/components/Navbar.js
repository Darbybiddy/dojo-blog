const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="./">Home</a>
                <a href="./create" style={{
                    color:"#7393B3",
                    backgroundColor:'#D3D3D3',
                    borderRadius:'5px'}}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;