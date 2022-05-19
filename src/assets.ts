// allows us to specify images, audio, or other assets to load before starting the game
export function assetsLoader(game) {
	// font
	game.load.rexWebFont({
		custom: {
			families: ['monogramextended'],
			urls: ['assets/fonts/fonts.css']
		}
	});
	// story
	game.load.json('story', 'assets/dialogues/story.json');
	// main
	game.load.image('logo', 'assets/logo.png');
	game.load.image('title', 'assets/title.png');
	// buttons
	game.load.image('play', 'assets/buttons/play.png');
	game.load.image('play_hover', 'assets/buttons/play_hover.png');
	game.load.image('settings', 'assets/buttons/settings.png');
	game.load.image('settings_hover', 'assets/buttons/settings_hover.png');
	game.load.image('pause', 'assets/buttons/pause.png');
	game.load.image('pause_hover', 'assets/buttons/pause_hover.png');
	game.load.image('about', 'assets/buttons/about.png');
	game.load.image('about_hover', 'assets/buttons/about_hover.png');
	game.load.image('mute', 'assets/buttons/mute.png');
	game.load.image('mute_hover', 'assets/buttons/mute_hover.png');
	game.load.image('demute', 'assets/buttons/demute.png');
	game.load.image('demute_hover', 'assets/buttons/demute_hover.png');
	game.load.image('french', 'assets/buttons/french.png');
	game.load.image('french_hover', 'assets/buttons/french_hover.png');
	game.load.image('english', 'assets/buttons/english.png');
	game.load.image('english_hover', 'assets/buttons/english_hover.png');
	// scenes
	game.load.image('room', 'assets/scenes/room.png');
	game.load.image('village_0', 'assets/scenes/village_0.png');
	game.load.image('village_1', 'assets/scenes/village_1.png');
	game.load.image('village_2_gh', 'assets/scenes/village_2_gh.png');
	game.load.image('village_3_gh', 'assets/scenes/village_3_gh.png');
	game.load.image('village_2_cc', 'assets/scenes/village_2_cd.png');
	game.load.image('village_3_cc', 'assets/scenes/village_3_cd.png');
	game.load.image('control_room', 'assets/scenes/control_room.png');
	game.load.image('coffee', 'assets/scenes/coffee.png');
	//game.load.image('office_gh', 'assets/scenes/office_gh.png');
	game.load.image('office_craig', 'assets/scenes/office_craig.png');
	//game.load.image('office_cc', 'assets/scenes/office_cd.png');
	//game.load.image('office_amber', 'assets/scenes/office_amber.png');
	//game.load.image('coffee', 'assets/scenes/coffee.png');
	game.load.image('void', 'assets/scenes/void.png');
	// characters
	game.load.image('george', 'assets/characters/george.png');
	game.load.image('benoit', 'assets/characters/benoit.png');
	game.load.image('gerard', 'assets/characters/gerard.png');
	game.load.image('craig', 'assets/characters/craig.png');
	game.load.image('amber', 'assets/characters/amber.png');
	game.load.image('marion', 'assets/characters/fatima.png');
	game.load.image('marc', 'assets/characters/marc.png');
	game.load.image('unknown', 'assets/characters/unknown.png');
	// titlescreen anim
	game.load.image('titlescreen1', 'assets/scenes/title/titlescreen1.png');
	game.load.image('titlescreen2', 'assets/scenes/title/titlescreen2.png');
	game.load.image('titlescreen3', 'assets/scenes/title/titlescreen3.png');
	game.load.image('titlescreen4', 'assets/scenes/title/titlescreen4.png');
	game.load.image('titlescreen5', 'assets/scenes/title/titlescreen5.png');
	game.load.image('titlescreen6', 'assets/scenes/title/titlescreen6.png');
	// control_room anim - wind turbine
	game.load.image('Eol1', 'assets/scenes/control_room/wind_turbine/Control-RoomEol1.png');
	game.load.image('Eol2', 'assets/scenes/control_room/wind_turbine/Control-RoomEol2.png');
	game.load.image('Eol3', 'assets/scenes/control_room/wind_turbine/Control-RoomEol3.png');
	game.load.image('Eol4', 'assets/scenes/control_room/wind_turbine/Control-RoomEol4.png');
	game.load.image('Eol5', 'assets/scenes/control_room/wind_turbine/Control-RoomEol5.png');
	game.load.image('Eol6', 'assets/scenes/control_room/wind_turbine/Control-RoomEol6.png');
	game.load.image('Eol7', 'assets/scenes/control_room/wind_turbine/Control-RoomEol7.png');
	game.load.image('Eol8', 'assets/scenes/control_room/wind_turbine/Control-RoomEol8.png');
	// control_room anim -  hydroelectric dam
	game.load.image('barrage1', 'assets/scenes/control_room/hydroelectric_dam/Control-RoomBarrage1.png');
	game.load.image('barrage2', 'assets/scenes/control_room/hydroelectric_dam/Control-RoomBarrage2.png');
	game.load.image('barrage3', 'assets/scenes/control_room/hydroelectric_dam/Control-RoomBarrage3.png');
	game.load.image('barrage4', 'assets/scenes/control_room/hydroelectric_dam/Control-RoomBarrage4.png');
	game.load.image('barrage5', 'assets/scenes/control_room/hydroelectric_dam/Control-RoomBarrage5.png');
	game.load.image('barrage6', 'assets/scenes/control_room/hydroelectric_dam/Control-RoomBarrage6.png');
	game.load.image('barrage7', 'assets/scenes/control_room/hydroelectric_dam/Control-RoomBarrage7.png');
	game.load.image('barrage8', 'assets/scenes/control_room/hydroelectric_dam/Control-RoomBarrage8.png');
	// control_room anim - coal power plant screen
	game.load.image('charb1', 'assets/scenes/control_room/coal_power_plant/Control-RoomCharb1.png');
	game.load.image('charb2', 'assets/scenes/control_room/coal_power_plant/Control-RoomCharb2.png');
	game.load.image('charb3', 'assets/scenes/control_room/coal_power_plant/Control-RoomCharb3.png');
	game.load.image('charb4', 'assets/scenes/control_room/coal_power_plant/Control-RoomCharb4.png');
	game.load.image('charb5', 'assets/scenes/control_room/coal_power_plant/Control-RoomCharb5.png');
	game.load.image('charb6', 'assets/scenes/control_room/coal_power_plant/Control-RoomCharb6.png');
	game.load.image('charb7', 'assets/scenes/control_room/coal_power_plant/Control-RoomCharb7.png');
	game.load.image('charb8', 'assets/scenes/control_room/coal_power_plant/Control-RoomCharb8.png');
	// mini game assets
	game.load.image('red_button', 'assets/minigame/red_button.png');
	game.load.image('red_button_pressed', 'assets/minigame/red_button_pressed.png');
	game.load.image('green_button_down', 'assets/minigame/green_button_down.png');
	game.load.image('green_button_down_pressed', 'assets/minigame/green_button_down_pressed.png');
	game.load.image('green_button_left', 'assets/minigame/green_button_left.png');
	game.load.image('green_button_left_pressed', 'assets/minigame/green_button_left_pressed.png');
	game.load.image('green_button_up', 'assets/minigame/green_button_up.png');
	game.load.image('green_button_up_pressed', 'assets/minigame/green_button_up_pressed.png');
	game.load.image('green_button_right', 'assets/minigame/green_button_right.png');
	game.load.image('green_button_right_pressed', 'assets/minigame/green_button_right_pressed.png');
	game.load.image('stick0', 'assets/minigame/stick_0.png');
	game.load.image('stick1', 'assets/minigame/stick_1.png');
	game.load.image('stick2', 'assets/minigame/stick_2.png');
	game.load.image('stick3', 'assets/minigame/stick_3.png');
	game.load.image('small_screen_error', 'assets/minigame/small-screen-error.png');
	game.load.image('small_screen', 'assets/minigame/small-screen.png');
	// utils
	game.load.image('dialogBox', 'assets/dialogbox.png');
	game.load.image('lineBreak', 'assets/buttons/line_break.png');
	// sounds
	game.load.audio('start', 'assets/sounds/start.ogg');
	game.load.audio('click', 'assets/sounds/click.ogg');
	game.load.audio('alarm', 'assets/sounds/alarm.ogg');
	game.load.audio('pause_in', 'assets/sounds/pause_in.ogg');
	game.load.audio('pause_out', 'assets/sounds/pause_out.ogg');
	game.load.audio('clock_beep', 'assets/sounds/clockbeep.ogg');
	game.load.audio('arrows_button', 'assets/sounds/arrow_button.ogg');
	game.load.audio('red_button', 'assets/sounds/redbutton.ogg');
	game.load.audio('stick', 'assets/sounds/stick.ogg');
	game.load.audio('failure', 'assets/sounds/failure.ogg');
	// songs
	game.load.audio('theme', 'assets/sounds/music/theme.ogg');
	game.load.audio('menu', 'assets/sounds/music/menu.ogg');
	game.load.audio('room', 'assets/sounds/music/room.ogg');
	game.load.audio('village', 'assets/sounds/music/village.ogg');
	//game.load.audio('coffee', 'assets/sounds/music/coffee.ogg');
	game.load.audio('corpo', 'assets/sounds/music/corpo.ogg');
	game.load.audio('power_plant', 'assets/sounds/music/power_plant.ogg');
}

export enum Assets {
	// story
	Story = 'story',
	// main
	Logo = 'logo',
	Title = 'title',
	Click = 'click',
	// buttons
	PlayButton = 'play',
	PlayButtonHover = 'play_hover',
	SettingsButton = 'settings',
	SettingsButtonHover = 'settings_hover',
	PauseButton = 'pause',
	PauseButtonHover = 'pause_hover',
	AboutButton = 'about',
	AboutButtonHover = 'about_hover',
	MuteButton = 'mute',
	MuteButtonHover = 'mute_hover',
	DeMuteButton = 'demute',
	DeMuteButtonHover = 'demute_hover',
	FrenchButton = 'french',
	FrenchButtonHover = 'french_hover',
	EnglishButton = 'english',
	EnglishButtonHover = 'english_hover',
	// scenes
	RoomScene = 'room',
	village0Scene = 'village_0',
	village1Scene = 'village_1',
	village2_GreenHorizonScene = 'village_2_gh',
	village2_CosmicDriveScene = 'village_2_cd',
	village3_GreenHorizonScene = 'village_3_gh',
	village3_CosmicDriveScene = 'village_3_cd',
	ControlRoomScene = 'control_room',
	CoffeeScene = 'coffee',
	VoidScene = 'void',
	// characters
	George = 'george',
	Benoit = 'benoit',
	Gerard = 'gerard',
	Craig = 'craig',
	Amber = 'amber',
	Marc = 'marc',
	Marion = 'marion',
	Unknown = 'unknown',
	// titlescreen animation
	TitleScreen1 = 'titlescreen1',
	TitleScreen2 = 'titlescreen2',
	TitleScreen3 = 'titlescreen3',
	TitleScreen4 = 'titlescreen4',
	TitleScreen5 = 'titlescreen5',
	TitleScreen6 = 'titlescreen6',
	// control room Eol
	ControlRoomEol1 = 'Eol1',
	ControlRoomEol2 = 'Eol2',
	ControlRoomEol3 = 'Eol3',
	ControlRoomEol4 = 'Eol4',
	ControlRoomEol5 = 'Eol5',
	ControlRoomEol6 = 'Eol6',
	ControlRoomEol7 = 'Eol7',
	ControlRoomEol8 = 'Eol8',
	// control room barrage
	ControlRoomHydroelectricDam1 = 'barrage1',
	ControlRoomHydroelectricDam2 = 'barrage2',
	ControlRoomHydroelectricDam3 = 'barrage3',
	ControlRoomHydroelectricDam4 = 'barrage4',
	ControlRoomHydroelectricDam5 = 'barrage5',
	ControlRoomHydroelectricDam6 = 'barrage6',
	ControlRoomHydroelectricDam7 = 'barrage7',
	ControlRoomHydroelectricDam8 = 'barrage8',
	// control rool coal
	ControlRoomCoal1 = 'charb1',
	ControlRoomCoal2 = 'charb2',
	ControlRoomCoal3 = 'charb3',
	ControlRoomCoal4 = 'charb4',
	ControlRoomCoal5 = 'charb5',
	ControlRoomCoal6 = 'charb4',
	ControlRoomCoal7 = 'charb7',
	ControlRoomCoal8 = 'charb8',
	// mini game
	SmallScreen = 'small_screen',
	SmallScreenError = 'small_screen_error',
	RedButton = 'red_button',
	RedButtonPressed = 'red_button_pressed',
	GreenButtonDown = 'green_button_down',
	GreenButtonDownPressed = 'green_button_down_pressed',
	GreenButtonLeft = 'green_button_left',
	GreenButtonLeftPressed = 'green_button_left_pressed',
	GreenButtonUp = 'green_button_up',
	GreenButtonUpPressed = 'green_button_up_pressed',
	GreenButtonRight = 'green_button_right',
	GreenButtonRightPressed = 'green_button_right_pressed',
	Stick0 = 'stick0',
	Stick1 = 'stick1',
	Stick2 = 'stick2',
	Stick3 = 'stick3',
	// utils
	DialogBox = 'dialogBox',
	LineBreak = 'lineBreak',
	// sounds
	StartSound = 'start',
	ClickSound = 'click',
	PauseInSound = 'pause_in',
	PauseOutSound = 'pause_out',
	AlarmSound = 'click',
	ClockSound = 'clock_beep',
	StickSound = 'stick',
	ArrowsSound = 'arrows_button',
	RedButtonSound = 'red_button',
	FailureSound = 'failure',
	// musics
	MainTheme = 'theme',
	MenuTheme = 'menu',
	RoomTheme = 'room',
	VillageTheme = 'village',
	CoffeeTheme = 'coffee',
	CorpoTheme = 'corpo',
	PowerPlantTheme = 'power_plant'
}