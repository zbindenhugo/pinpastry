
import { Bars3Icon } from '@heroicons/react/24/outline/'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return(
        <>
            <nav className="w-full border-b mborder-slate-200 md:grid grid-flow-col col-auto hidden gap-3 bg-pink-50 p-4">
                <Link to='/' className='transition-all duration-150 hover:scale-110 text-center text-xl'>
                    Accueil
                </Link>
                <Link to='/about' className='transition-all duration-150 hover:scale-110 text-center text-xl'>
                    A Propos
                </Link>
                <Link to='/pastries' className='transition-all duration-150 hover:scale-110 text-center text-xl'>
                    Les pâtisseries
                </Link>
                <Link to='/contact' className='transition-all duration-150 hover:scale-110 text-center text-xl'>
                    Nous contacter
                </Link>
                
            </nav>

            <nav className="w-full p-4 border-b md:border-slate-200 grid md:grid-flow-col md:col-auto md:hidden">
                <div>
                    <button>
                        <Bars3Icon className='h-10 w-10' />
                    </button>
                </div>

                <div>

                </div>
            </nav>
        </>
    )
}