import { Textures } from "../assets";
import dialogBox from "../objects/dialogBox";

export default class TemplateDialogue extends Phaser.Scene {

	constructor() {
		super('TemplateDialogue');
	}

	preload() {
	}

	create() {
		this.cameras.main.fadeIn(2000, 0, 0, 0);

		// background
		let background = this.add.sprite(0, 0, 'bedroombg').setOrigin(0).setScale(2.13, 2.52);
		background.setPipeline('Light2D');

		// light effects
		this.lights.addLight(900, 280, 400, 0xffffff, 1);
		this.lights.enable().setAmbientColor(0x555555);

		// music (room theme, looped) and click sound
		let clickedSound = this.sound.add('click');
		let roomMusic = this.sound.add('room_theme');
		roomMusic.play('', { loop: true });

		// dialogbox
		let content:string = 'Puceau moi ? Sérieusement ^^ haha on me l avait pas sortie celle la depuis loooongtemps demande a mes potes si je suis puceau tu vas voir les réponses que tu vas te prendre XD rien que la semaine passee j ai niquer dont chuuuuut ferme la puceau de merde car toi tu m as tout tout l air d un bon puceau de merde car souvent vous etes frustrer de ne pas baiseR ses agreable de se faire un missionnaire ou un amazone avec une meuf hein ? tu peux pas répondre car tu ne sais pas ce que c ou alors tu le sais mais tu as du taper dans ta barre de recherche « missionnaire sexe » ou « amazone sexe » pour comprendre ce que c etait mdddrrr !! cest grave quoiquil en soit....pour revenir a moi, je pense que je suis le mec le moins puceau de ma bande de 11 meilleurs amis pas psk j ai eu le plus de rapport intime mais psk j ai eu les plus jolie femme que mes amis ses pas moi qui le dit, ses eux qui commente sous mes photos insta « trop belle la fille que tu as coucher avec hier en boite notamment! » donc après si tu veux :)';
		dialogBox(this, Textures.GeorgeRight, content);

		// pause button and trigger
		let pauseButton = this.add.sprite(0, 0, 'pauseButton').setOrigin(0).setInteractive();
		pauseButton.on('pointerover', () => { pauseButton.setTexture('pauseButtonHover') });
		pauseButton.on('pointerout', () => { pauseButton.setTexture('pauseButton') });
		pauseButton.on('pointerdown', () => {
			clickedSound.play(),
			pauseButton.setVisible(false),
			roomMusic.pause(),
			/*this.cameras.main.setPostPipeline(KawaseBlurPostFx, {
				blur: 4,
				quality: 3
			}),*/
			this.scene.launch('PauseMenu'),
			this.scene.pause()
		});
	}
}