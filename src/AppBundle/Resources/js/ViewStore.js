import {action, computed, observable} from 'mobx';
import {fromPromise} from 'mobx-utils';

export default class ViewStore {
    @observable currentView = null;

    @action showRoute(name, parameters) {
        this.currentView = {
            name: name,
            parameters: parameters
        };
    }

    @computed get currentPath() {
        switch (this.currentView.name) {
            case 'posts': return '/posts';
            case 'todos': return '/todos';
        }
    }
}
