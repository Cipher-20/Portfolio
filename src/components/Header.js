function Header() {
    return (
        <header id="header">
            <div className="container">
                <nav className="main-nav">

                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a className="nav-link link-bold" href="#">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link link-bold" href="#about">About me</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link link-bold" href="#education">Education</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link link-bold" href="#contact">Contact</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="nav-link-name" href="#">K.A.N</a>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;