import {Howl} from "howler";
import soundSrc from "../../static/sound/sound.mp3";

const sound = new Howl({
	src: [soundSrc]
});

export default function soundPlay() {
	sound.play();
}

