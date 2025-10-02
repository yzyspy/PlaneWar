import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('StartUI')
export class StartUI extends Component {

    start() {

    }

    update(deltaTime: number) {
        
    }

    OnStartBtnClick() {
        console.log('StartUI clicked');
        director.loadScene("02-Game")
    }
}

