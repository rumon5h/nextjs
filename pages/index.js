import Link from "next/link";

function Home(){
    return <div>
        <h1><Link href='/product'>Product page</Link></h1>
        <h1>This is home page.</h1>
        <Link href='/blog'>
        Blog
        </Link>
    </div>
}

export default Home;