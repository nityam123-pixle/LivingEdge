import Link from "next/link"
import logo from "../public/logo2.png";
import logoDark from "../public/logo3.png";
import Image from "next/image";''


const Logo = () => {
    return (
        <Link href="/" className="py-3">
            <Image
                src={logo}
                className="w-20 h-15 dark:hidden"
                alt=""
                priority={true}
            />
            <Image
                src={logoDark}
                className="w-20 h-15 hidden dark:block"
                alt=""
                priority={true}
            />
        </Link>
    )
}

export default Logo;
