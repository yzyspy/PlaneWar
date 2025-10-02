import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bg')
export class Bg extends Component {
    @property(Node)
    bg01:Node = null;

    @property(Node)
    bg02:Node = null;

    @property
    speed:number = 100;

    start() {
       console.log('start...');
    }

    update(deltaTime: number) {
        let pos1 = this.bg01.position;
       // console.log("onUpdate" + pos1.x)
        let newPos1Y = pos1.y - this.speed*deltaTime;
        if (newPos1Y < -850) {
            newPos1Y = 850
        }
        this.bg01.setPosition(pos1.x, newPos1Y, pos1.z);

        let pos2 = this.bg02.position;
        let newPos2Y = pos2.y - this.speed*deltaTime;
        if (newPos2Y < -850) {
            newPos2Y = 850
        }
        this.bg02.setPosition(pos2.x, newPos2Y, pos2.z);
    }
}

