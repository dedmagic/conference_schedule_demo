import React from 'react';
// import MenuItems from '../store/TopMenuStore';

const MenuItems = [
    // path используется в App.js (роутинг)
    { path: '/', title: 'О конференции' },
    { path: '/shedule', title: 'Программа' },
    { path: '/speakers', title: 'Спикеры' },
];

export class TopMenu extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Расписание конференции (демо)</a>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            {MenuItems.map(item => (
                                <li class="nav-item">
                                    <a class="nav-link" href={item.path}>{item.title}</a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}

export default TopMenu;