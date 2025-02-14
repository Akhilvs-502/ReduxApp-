import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='bg-slate-400'>
    <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className='font-bold'>Redux App</h1>
        <ul className='flex gap-4'>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/about">
             <li>About</li>
            </Link>
            <Link to="/signin">
            <li>Signin</li>
            </Link>
        </ul>
        </div>
    </div>
  )
}
