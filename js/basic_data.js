var lang = 'sc' //I18N
var data_lst_keys = 
[
	'TrunkSkillData',
	'EquipPilotData',
	'EquipLegData',
	'GirlData',
	'GirlSkinData',
	'GirlStarData',
	'GirllevelData',
	'ItemData',
	'MachineArmorData',
	'MCVGirlSkillData',
	'MCVNatureData',
	'MCVNatureIdData',
	'MCVNatureUnlockSkillData',
	'SkillArrayData',
	'SuitData',
	'TalentSpecialData',
	'LanguageData',
	'PropertyData',
	'WidgetData'
]
var fg_data = {}
async function load_basic_data(file_name)
{
	await axios.get('fg_data/' + lang + '/' + file_name + '.json').then((resp) =>
	{
		fg_data[file_name] = resp.data
	})
}
async function init_data()
{
	if (localStorage.hasOwnProperty('lang'))
		lang = localStorage.getItem('lang')
	else
		localStorage.setItem('lang', 'sc')
	await axios.all(data_lst_keys.map(load_basic_data)).then(axios.spread((...a) =>
	{
		Vue.set(app.$data, 'loaded', true)
	}))
}
function handle_select_url(key, key_path)
{
	if (key == app.$data.now_index)
		return
	switch (key)
	{
		case 'mainpage':
			window.location = './index.html'
			break
		case 'pilot':
			window.location = './pilot.html'
			break
	}
}

var equip_sub_type = 
[
	"Heavy Shield",
	"One-Handed Melee",
	"Light Melee",
	"Heavy Melee",
	"Heavy Machine Gun",
	"Light Gunner",
	"Heavy Sniper",
	"Artillery Weapon",
	"Ranged Weapon",
	"Light Output Cockpit",
	"Medium Output Cockpit",
	"Heavy Output Cockpit",
	"Medium Survival Cockpit",
	"Heavy Survival Cockpit",
	"Light Output Frame",
	"Medium Output Frame",
	"Heavy Output Frame",
	"Medium Survival Frame",
	"Heavy Survival Frame",
	"Light Output Mount",
	"Medium Output Mount",
	"Heavy Output Mount",
	"Medium Survival Mount",
	"Heavy Survival Mount",
	"Survival Accessory",
	"Output Accessory",
	"None",
	"Special Accessory"
]

var profession_type =
[
	"Defender",
	"Striker",
	"Gunner",
	"Blaster",
	"Sniper",
	"Bomber"
]

var camp =
[
	"Blacark",
	"Paranoid",
	"HHED",
	"Haxel",
	"Arita",
	"Kegha",
	"NoGenera",
	"NERV"
]

var kindness_gift = 
[
	"None",
	"Gems",
	"Books",
	"Weapons",
	"Clothing",
	"Food",
	"Plushies",
	"Universal"
]

var hit_grade = 
[
	0,
	140,
	190,
	240,
	290,
	340
]