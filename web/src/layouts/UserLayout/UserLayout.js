import { Link, routes } from '@redwoodjs/router'

const UserLayout = ({ children }) => {
  return (
    <>
      <header className="header-wrap">
        <h1>
          <Link to={routes.home()}>Expedition</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.members()} className="rw-button">
                Manage Members
              </Link>
            </li>
            <li>
              <Link to={routes.posts()} className="rw-button">
                Manage Posts
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default UserLayout
