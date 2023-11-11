import './Layout.css';
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

export default function Layout() {
    
    return (
        <>
            <Header/>
            <main className='content'>                
                <section className='sidebar'>
                    <Sidebar/>                                     
                </section>

                <aside className='data'>
                    <Outlet/>
                </aside>
            </main>
        </>
    )
}
