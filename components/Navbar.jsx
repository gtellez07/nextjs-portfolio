// import Link from next
import Link from 'next/link'

export default function Navbar() {
    return(
        <nav>
            <Link href='/'>
            {/* links take any child components */}
                Home
            </Link>

            <Link href='/about'>
                About Meeeee!
            </Link>

            {/* outside sources use regular a tags */}
            <a href="https://www.google.com">Google</a>
        </nav>
    )
}