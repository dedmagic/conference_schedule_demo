// const MenuItems = [
//     // path используется в App.js (роутинг)
//     { path: '/', title: 'О конференции' },
//     { path: '/shedule', title: 'Программа' },
//     { path: '/speakers', title: 'Спикеры' },
// ];

// export { MenuItems };

class TopMenuStore {
    menuItems = [
        // path используется в App.js (роутинг)
        { path: '/', title: 'О конференции' },
        { path: '/shedule', title: 'Программа' },
        { path: '/speakers', title: 'Спикеры' },
    ]
}

export default new TopMenuStore();