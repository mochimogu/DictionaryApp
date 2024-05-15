


export default function Nav() {


    return (
        <div className="p-3">
            <ul className="nav flex-column">
                <li className="nav-item p-2 fs-3">
                    <h1 className="navbar-brand">DICTIONARY</h1>
                </li>
                <li className="nav-item p-2 fs-5">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item p-2 fs-5">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item p-2 fs-5">
                    <a className="nav-link" href="/logIn">Log In</a>
                </li>
                <li className="nav-item p-2 fs-5">
                    <a className="nav-link" href="/favorite">Favorite</a>
                </li>
            </ul>
        </div>
    )

}


