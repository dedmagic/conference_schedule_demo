import { makeAutoObservable } from 'mobx';

class TopMenuStore {
    currentItemId = 1;

    constructor() {
        makeAutoObservable(this);
    }

    menuItems = [
        // path используется в App.js (роутинг)
        { id: 1, path: '/', title: 'О конференции' },
        { id: 2, path: '/shedule', title: 'Программа' },
        { id: 3, path: '/speakers', title: 'Спикеры' },
    ]
}

export default new TopMenuStore();
