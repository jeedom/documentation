var DOC_CONFIG={}
var THIRD_CONFIG={}

var PAGE_NAME = {
	'cron' : 'Moteur de tâche',
	'eqAnalyse' : 'Equipements',
	'interact' : 'Intéractions',
	'update' : 'Mise à jour',
	'api_http' : 'API Http',
	'custom' : 'Personalisation',
	'jsonrpc_api' : 'API Jsonrpc',
	'noteversion' : 'Note de version',
	'user' : 'Utilisateur',
	'backup' : 'Sauvegarde',
	'health' : 'Santé',
	'object' : 'Objet',
	'view' : 'Vues',
	'display' : 'Résumé domotique',
	'history' : 'Historique',
	'compatibility' : 'Compatibilité',
}


$(function(){
	$('.button-collapse').sideNav();
	$('.parallax').parallax();
	$('select').material_select();
	$('ul.tabs').tabs();

	$('a[href=#plugin]').on('click',function(){
		$('#plugin a.active').click();
		setTimeout(function(){ $('#plugin a.active').click(); }, 500);
	});

	use='online';
	if (use=='online'){
		$.getJSON("site.json",function(data){
			DOC_CONFIG = data;
			displayDoc();
		});
		$.getJSON("site_third.json",function(data){
			THIRD_CONFIG = data;
			generateThirdSite(THIRD_CONFIG);
		});
	}else{
		DOC_CONFIG = jQuery.parseJSON('{"core": {"docs": [{"url": "http://jeedom.github.io/core/#language#/user", "name": "user"}, {"url": "http://jeedom.github.io/core/#language#/object", "name": "object"}, {"url": "http://jeedom.github.io/core/#language#/health", "name": "health"}, {"url": "http://jeedom.github.io/core/#language#/dashboard", "name": "dashboard"}, {"url": "http://jeedom.github.io/core/#language#/troubleshooting", "name": "troubleshooting"}, {"url": "http://jeedom.github.io/core/#language#/noteVersion", "name": "noteVersion"}, {"url": "http://jeedom.github.io/core/#language#/message", "name": "message"}, {"url": "http://jeedom.github.io/core/#language#/log", "name": "log"}, {"url": "http://jeedom.github.io/core/#language#/api_http", "name": "api_http"}, {"url": "http://jeedom.github.io/core/#language#/plugin", "name": "plugin"}, {"url": "http://jeedom.github.io/core/#language#/cron", "name": "cron"}, {"url": "http://jeedom.github.io/core/#language#/backup", "name": "backup"}, {"url": "http://jeedom.github.io/core/#language#/changelog", "name": "changelog"}, {"url": "http://jeedom.github.io/core/#language#/jsonrpc_api", "name": "jsonrpc_api"}, {"url": "http://jeedom.github.io/core/#language#/display", "name": "display"}, {"url": "http://jeedom.github.io/core/#language#/scenario", "name": "scenario"}, {"url": "http://jeedom.github.io/core/#language#/update", "name": "update"}, {"url": "http://jeedom.github.io/core/#language#/administration", "name": "administration"}, {"url": "http://jeedom.github.io/core/#language#/eqAnalyse", "name": "eqAnalyse"}, {"url": "http://jeedom.github.io/core/#language#/interact", "name": "interact"}, {"url": "http://jeedom.github.io/core/#language#/plan", "name": "plan"}, {"url": "http://jeedom.github.io/core/#language#/view", "name": "view"}, {"url": "http://jeedom.github.io/core/#language#/profils", "name": "profils"}, {"url": "http://jeedom.github.io/core/#language#/faq", "name": "faq"}, {"url": "http://jeedom.github.io/core/#language#/market", "name": "market"}, {"url": "http://jeedom.github.io/core/#language#/custom", "name": "custom"}, {"url": "http://jeedom.github.io/core/#language#/history", "name": "history"}], "name": {"en_US": "Core", "fr_FR": "Core"}}, "rfxcom": {"docs": [{"url": "rfxcom/#language#/ematronics.volets", "name": "ematronics volets"}, {"url": "rfxcom/#language#/equipement.compatible", "name": "equipement compatible"}], "name": {"en_US": "rfxcom", "fr_FR": "rfxcom"}}, "kb": {"docs": [{"url": "kb/#language#/template", "name": "template"}, {"url": "kb/#language#/00003", "name": "00003"}, {"url": "kb/#language#/00002", "name": "00002"}, {"url": "kb/#language#/01001", "name": "01001"}, {"url": "kb/#language#/00001", "name": "00001"}], "name": {"en_US": "kb", "fr_FR": "kb"}}, "installation": {"docs": [{"url": "installation/#language#/index", "name": "installation"}], "name": {"en_US": "installation", "fr_FR": "installation"}}, "plugin": {"docs": [{"url": "https://jeedom.github.io/plugin-mobile/#language#/", "name": "mobile"}, {"url": "https://jeedom.github.io/plugin-blink1/#language#/", "name": "blink1"}, {"url": "https://github.com/jeedom/plugin-synologychat/blob/stable/doc/#language#/index.asciidoc", "name": "synologychat"}, {"url": "https://jeedom.github.io/plugin-dialogflow/index.html", "name": "dialogflow"}, {"url": "https://jeedom.github.io/plugin-mail/#language#/", "name": "mail"}, {"url": "https://github.com/jeedom/plugin-gcast/blob/stable/doc/#language#/index.asciidoc", "name": "gcast"}, {"url": "https://jeedom.github.io/plugin-ifttt/#language#/", "name": "ifttt"}, {"url": "https://jeedom.github.io/plugin-jarvis/#language#/", "name": "jarvis"}, {"url": "https://jeedom.github.io/plugin-jeelink/#language#/", "name": "jeelink"}, {"url": "https://github.com/jeedom/plugin-lametric/blob/stable/doc/#language#/index.asciidoc", "name": "lametric"}, {"url": "https://jeedom.github.io/plugin-networks/#language#/", "name": "networks"}, {"url": "https://jeedom.github.io/plugin-openvpn/#language#/", "name": "openvpn"}, {"url": "https://jeedom.github.io/plugin-phonemarket/#language#/", "name": "phonemarket"}, {"url": "https://jeedom.github.io/plugin-sarah/#language#/", "name": "sarah"}, {"url": "https://jeedom.github.io/plugin-slack/#language#/", "name": "slack"}, {"url": "https://jeedom.github.io/plugin-sms/#language#/", "name": "sms"}, {"url": "https://github.com/jeedom/plugin-wifip/blob/stable/doc/#language#/index.asciidoc", "name": "wifip"}, {"url": "https://jeedom.github.io/plugin-greenmomit/#language#/", "name": "greenmomit"}, {"url": "https://jeedom.github.io/plugin-neato/#language#/", "name": "neato"}, {"url": "https://jeedom.github.io/plugin-nest/#language#/", "name": "nest"}, {"url": "https://jeedom.github.io/plugin-netatmoThermostat/#language#/", "name": "netatmoThermostat"}, {"url": "plugins/smartercoffee/#language#/index.html", "name": "Smarter Coffee"}, {"url": "https://jeedom.github.io/plugin-thermostat/#language#/", "name": "thermostat"}, {"url": "plugins/thinkingCleaner/#language#/index.html", "name": "Thinking Cleaner"}, {"url": "plugins/delestage/#language#/index.html", "name": "Délestage"}, {"url": "https://jeedom.github.io/plugin-energy/#language#/", "name": "energy"}, {"url": "https://jeedom.github.io/plugin-ewattch/#language#/", "name": "ewattch"}, {"url": "https://github.com/jeedom/plugin-extel/blob/stable/doc/#language#/index.asciidoc", "name": "extel"}, {"url": "https://jeedom.github.io/plugin-mpower/#language#/", "name": "mpower"}, {"url": "https://github.com/jeedom/plugin-wiserlink/blob/stable/doc/#language#/index.asciidoc", "name": "wiserlink"}, {"url": "https://jeedom.github.io/plugin-netatmoWeather/#language#/", "name": "netatmoWeather"}, {"url": "https://jeedom.github.io/plugin-weather/#language#/", "name": "weather"}, {"url": "https://jeedom.github.io/plugin-nut/#language#/", "name": "nut"}, {"url": "https://jeedom.github.io/plugin-hyperion/#language#/", "name": "hyperion2"}, {"url": "https://jeedom.github.io/plugin-denonavr/#language#/", "name": "denonavr"}, {"url": "plugins/harmonyhub/#language#/index.html", "name": "Harmony Hub"}, {"url": "https://jeedom.github.io/plugin-kodi/#language#/", "name": "kodi"}, {"url": "https://github.com/jeedom/plugin-roku/blob/stable/doc/#language#/index.asciidoc", "name": "roku"}, {"url": "https://jeedom.github.io/plugin-sonos/#language#/", "name": "sonos3"}, {"url": "plugins/squeezeboxcontrol/#language#/index.html", "name": "SqueezeBox Control"}, {"url": "plugins/greeniq/#language#/index.html", "name": "GreenIQ"}, {"url": "https://jeedom.github.io/plugin-koubachi/#language#/", "name": "koubachi"}, {"url": "https://github.com/jeedom/plugin-broadlink/blob/stable/doc/#language#/index.asciidoc", "name": "broadlink"}, {"url": "https://jeedom.github.io/plugin-karotz/#language#/", "name": "karotz"}, {"url": "https://jeedom.github.io/plugin-lifx/#language#/", "name": "lifx"}, {"url": "https://jeedom.github.io/plugin-nabaztag/#language#/", "name": "nabaztag"}, {"url": "https://github.com/jeedom/plugin-nimbus/blob/stable/doc/#language#/index.asciidoc", "name": "nimbus"}, {"url": "https://jeedom.github.io/plugin-philipsHue/#language#/", "name": "philipsHue"}, {"url": "https://github.com/jeedom/plugin-porkfolio/blob/stable/doc/#language#/index.asciidoc", "name": "porkfolio"}, {"url": "https://jeedom.github.io/plugin-calendar/#language#/", "name": "calendar"}, {"url": "plugins/domogeek/#language#/index.html", "name": "DomoGeek"}, {"url": "https://jeedom.github.io/plugin-geoloc/#language#/", "name": "geoloc"}, {"url": "https://jeedom.github.io/plugin-mode/#language#/", "name": "mode"}, {"url": "https://github.com/jeedom/plugin-wazeintime/blob/stable/doc/#language#/index.asciidoc", "name": "wazeintime"}, {"url": "https://jeedom.github.io/plugin-ipx800v4/#language#/", "name": "ipx800v4"}, {"url": "https://github.com/jeedom/plugin-wattlet/blob/stable/doc/#language#/index.asciidoc", "name": "wattlet"}, {"url": "https://jeedom.github.io/plugin-clink/#language#/", "name": "clink"}, {"url": "https://github.com/jeedom/plugin-dyndns/blob/stable/doc/#language#/index.asciidoc", "name": "dyndns"}, {"url": "https://jeedom.github.io/plugin-script/#language#/", "name": "script"}, {"url": "https://jeedom.github.io/plugin-virtual/#language#/", "name": "virtual"}, {"url": "https://jeedom.github.io/plugin-widget/#language#/", "name": "widget"}, {"url": "https://github.com/jeedom/plugin-blea/blob/stable/doc/#language#/index.asciidoc", "name": "blea"}, {"url": "plugins/edimaxplug/#language#/index.html", "name": "Edimax Plug"}, {"url": "https://jeedom.github.io/plugin-edisio/#language#/", "name": "edisio"}, {"url": "https://jeedom.github.io/plugin-openenocean/#language#/", "name": "openenocean"}, {"url": "https://jeedom.github.io/plugin-myhomescs/#language#/", "name": "myhomescs"}, {"url": "https://jeedom.github.io/plugin-rfxcom/#language#/", "name": "rfxcom"}, {"url": "https://jeedom.github.io/plugin-wifipower/#language#/", "name": "wifipower"}, {"url": "https://jeedom.github.io/plugin-openzwave/#language#/", "name": "openzwave"}, {"url": "plugins/rfplayer/#language#/index.html", "name": "RfPlayer"}, {"url": "https://jeedom.github.io/plugin-fitbit/#language#/", "name": "fitbit"}, {"url": "https://jeedom.github.io/plugin-alarm/#language#/", "name": "alarm"}, {"url": "https://jeedom.github.io/plugin-camera/#language#/", "name": "camera"}, {"url": "https://jeedom.github.io/plugin-netatmoWelcome/#language#/", "name": "netatmoWelcome"}, {"url": "plugins/nuki/#language#/index.html", "name": "Nuki"}], "name": {"en_US": "Plugins", "fr_FR": "Plugins"}}, "howto": {"docs": [{"url": "howto/#language#/utilisation.emoncms", "name": "utilisation emoncms"}, {"url": "howto/#language#/utilisation.opengarage", "name": "utilisation opengarage"}, {"url": "howto/#language#/letsencrypt.mise_en_place", "name": "letsencrypt mise en place"}, {"url": "howto/#language#/reset.password", "name": "reset password"}, {"url": "howto/#language#/jeelink.migration", "name": "jeelink migration"}, {"url": "howto/#language#/installation.shellinabox", "name": "installation shellinabox"}, {"url": "howto/#language#/installation.openjabnab", "name": "installation openjabnab"}, {"url": "howto/#language#/passer_en_beta", "name": "passer en beta"}, {"url": "howto/#language#/vmware.installation_sur_nuc", "name": "vmware installation sur nuc"}, {"url": "howto/#language#/karotz.utiliser_un_autre_moteur_de_voix", "name": "karotz utiliser un autre moteur de voix"}, {"url": "howto/#language#/vmware.trucs_et_astuces", "name": "vmware trucs et astuces"}, {"url": "howto/#language#/installation.monit", "name": "installation monit"}, {"url": "howto/#language#/tuto.github", "name": "tuto github"}, {"url": "howto/#language#/sauvegarde.comment_faire", "name": "sauvegarde comment faire"}, {"url": "howto/#language#/mysql.trucs_et_astuces", "name": "mysql trucs et astuces"}, {"url": "howto/#language#/synology.utilisation_vpn", "name": "synology utilisation vpn"}, {"url": "howto/#language#/gsm.huawei_mode_modem", "name": "gsm huawei mode modem"}, {"url": "howto/#language#/debian.trucs_et_astuces", "name": "debian trucs et astuces"}, {"url": "howto/#language#/debian.installation", "name": "debian installation"}, {"url": "howto/#language#/vmware.mise_en_place_des_backups", "name": "vmware mise en place des backups"}, {"url": "howto/#language#/mini.demarrage", "name": "mini demarrage"}, {"url": "howto/#language#/raspberrypi3", "name": "raspberrypi3"}, {"url": "howto/#language#/sauvegarde.comment_recuperer", "name": "sauvegarde comment recuperer"}, {"url": "howto/#language#/jeedom.mise_a_jour_manuel", "name": "jeedom mise a jour manuel"}, {"url": "howto/#language#/migration.apache", "name": "migration apache"}, {"url": "howto/#language#/doc.plugin", "name": "doc plugin"}, {"url": "howto/#language#/vmware.creer_une_vm", "name": "vmware creer une vm"}, {"url": "howto/#language#/mini.clef_wifi", "name": "mini clef wifi"}, {"url": "howto/#language#/android.autovoice", "name": "android autovoice"}, {"url": "howto/#language#/installation.nodered", "name": "installation nodered"}], "name": {"en_US": "howto", "fr_FR": "howto"}}, "edisio": {"docs": [{"url": "edisio/#language#/edisio.ETS-200_-_Capteur_de_température", "name": "edisio ETS-200 - Capteur de température"}, {"url": "edisio/#language#/edisio.ETC4_-_Télécommande", "name": "edisio ETC4 - Télécommande"}, {"url": "edisio/#language#/equipement.compatible", "name": "equipement compatible"}, {"url": "edisio/#language#/edisio.EOS-200_-_Capteur_douverture", "name": "edisio EOS-200 - Capteur douverture"}, {"url": "edisio/#language#/edisio.EMS-200_-_Capteur_de_mouvement", "name": "edisio EMS-200 - Capteur de mouvement"}, {"url": "edisio/#language#/edisio.ETC1_-_Télécommande_Smile", "name": "edisio ETC1 - Télécommande Smile"}, {"url": "edisio/#language#/edisio.EMV-400_-_Eclairage", "name": "edisio EMV-400 - Eclairage"}, {"url": "edisio/#language#/edisio.EMV-400_-_Volet", "name": "edisio EMV-400 - Volet"}], "name": {"en_US": "edisio", "fr_FR": "edisio"}}, "camera": {"docs": [{"url": "camera/#language#/equipement.compatible", "name": "equipement compatible"}], "name": {"en_US": "camera", "fr_FR": "camera"}}, "blea": {"docs": [{"url": "blea/#language#/equipement.compatible", "name": "equipement compatible"}], "name": {"en_US": "blea", "fr_FR": "blea"}}, "zwave": {"docs": [{"url": "zwave/#language#/philio.psp01_-_Multicapteurs", "name": "philio psp01 - Multicapteurs"}, {"url": "zwave/#language#/polycontrol.danalock-v2_-_Serrure", "name": "polycontrol danalock-v2 - Serrure"}, {"url": "zwave/#language#/polycontrol.polylock_-_Serrure", "name": "polycontrol polylock - Serrure"}, {"url": "zwave/#language#/fibaro.fgr222_-_Volets", "name": "fibaro fgr222 - Volets"}, {"url": "zwave/#language#/fibaro.fgrgb101_-_RGVBControler", "name": "fibaro fgrgb101 - RGVBControler"}, {"url": "zwave/#language#/secure.ses303_-_Temperature_Humidite", "name": "secure ses303 - Temperature Humidite"}, {"url": "zwave/#language#/aeotec.zw062_garage_door_controller", "name": "aeotec zw062 garage door controller"}, {"url": "zwave/#language#/everspring.AD147-6_-_Miniplug_Dimmer", "name": "everspring AD147-6 - Miniplug Dimmer"}, {"url": "zwave/#language#/duwi.05436_-_Volets", "name": "duwi 05436 - Volets"}, {"url": "zwave/#language#/fibaro.fgsd102_-_Fumees", "name": "fibaro fgsd102 - Fumees"}, {"url": "zwave/#language#/template_installationzwave", "name": "template installationzwave"}, {"url": "zwave/#language#/fibaro.fgms001ZW5_-_Motion", "name": "fibaro fgms001ZW5 - Motion"}, {"url": "zwave/#language#/nodon.Soft_-_Remote_-_Telecommande", "name": "nodon Soft - Remote - Telecommande"}, {"url": "zwave/#language#/nodon.octan_-_Remote_-_Telecommande", "name": "nodon octan - Remote - Telecommande"}, {"url": "zwave/#language#/greenwave.Powernode1_-_Prise", "name": "greenwave Powernode1 - Prise"}, {"url": "zwave/#language#/greenwave.powernode_-_Multiprise", "name": "greenwave powernode - Multiprise"}, {"url": "zwave/#language#/fibaro.fgrm222_-_Volets", "name": "fibaro fgrm222 - Volets"}, {"url": "zwave/#language#/equipement.compatible", "name": "equipement compatible"}, {"url": "zwave/#language#/smart_Home_by_Everspring.AD146-0_-_In_Wall_Dimmer", "name": "smart Home by Everspring AD146-0 - In Wall Dimmer"}, {"url": "zwave/#language#/nodon.wall_-_Switch_-_Interrupteur", "name": "nodon wall - Switch - Interrupteur"}, {"url": "zwave/#language#/fibaro.fgwpe101_-_Wall_Plug", "name": "fibaro fgwpe101 - Wall Plug"}, {"url": "zwave/#language#/template_widget", "name": "template widget"}, {"url": "zwave/#language#/philio.pst02a_-_4_en_1", "name": "philio pst02a - 4 en 1"}, {"url": "zwave/#language#/fibaro.fgd211_-_Dimmer", "name": "fibaro fgd211 - Dimmer"}, {"url": "zwave/#language#/zipato.minikeypad_-_Clavier_Rfid", "name": "zipato minikeypad - Clavier Rfid"}, {"url": "zwave/#language#/secure.sir321_-_Timer", "name": "secure sir321 - Timer"}, {"url": "zwave/#language#/secure.ses302_-_Temperature", "name": "secure ses302 - Temperature"}, {"url": "zwave/#language#/nodon.smartplug_-_Prise", "name": "nodon smartplug - Prise"}, {"url": "zwave/#language#/fibaro.fgms001_-_Motion", "name": "fibaro fgms001 - Motion"}, {"url": "zwave/#language#/everspring.AN180-6_-_Miniplug_On-Off", "name": "everspring AN180-6 - Miniplug On-Off"}, {"url": "zwave/#language#/fibaro.fgfs101_-_FloodSensors", "name": "fibaro fgfs101 - FloodSensors"}, {"url": "zwave/#language#/secure.srt323_-_Thermostat", "name": "secure srt323 - Thermostat"}, {"url": "zwave/#language#/dlink.dchz110_-_3en1_Ouverture", "name": "dlink dchz110 - 3en1 Ouverture"}, {"url": "zwave/#language#/mco.MH-S412_Double_-_Interrupteur", "name": "mco MH-S412 Double - Interrupteur"}, {"url": "zwave/#language#/philio.psr04_-_Smart_Color_Button", "name": "philio psr04 - Smart Color Button"}, {"url": "zwave/#language#/template_inclusion", "name": "template inclusion"}, {"url": "zwave/#language#/smart_Home_by_Everspring.AN179-0_-_In_Wall_On-Off", "name": "smart Home by Everspring AN179-0 - In Wall On-Off"}, {"url": "zwave/#language#/fibaro.fgk101_-_Ouverture", "name": "fibaro fgk101 - Ouverture"}, {"url": "zwave/#language#/aeotec.panic_button_-_Telecommande", "name": "aeotec panic button - Telecommande"}, {"url": "zwave/#language#/aeotec.keyfob_Gen5_-_Telecommande", "name": "aeotec keyfob Gen5 - Telecommande"}, {"url": "zwave/#language#/philio.pst02c_-_3_en_1_Ouverture", "name": "philio pst02c - 3 en 1 Ouverture"}, {"url": "zwave/#language#/aeotec.minimote_-_Telecommande", "name": "aeotec minimote - Telecommande"}, {"url": "zwave/#language#/fibaro.fgd212_-_Dimmer2", "name": "fibaro fgd212 - Dimmer2"}, {"url": "zwave/#language#/aeotec.keyfob_-_Telecommande", "name": "aeotec keyfob - Telecommande"}, {"url": "zwave/#language#/swiid.inter_-_Interrupteur_Cordon", "name": "swiid inter - Interrupteur Cordon"}], "name": {"en_US": "zwave", "fr_FR": "zwave"}}, "premiers-pas": {"docs": [{"url": "premiers-pas/#language#/index", "name": "premiers-pas"}], "name": {"en_US": "premiers-pas", "fr_FR": "premiers-pas"}}, "enocean": {"docs": [{"url": "enocean/#language#/equipement.compatible", "name": "equipement compatible"}], "name": {"en_US": "enocean", "fr_FR": "enocean"}}, "presentation": {"docs": [{"url": "presentation/#language#/index", "name": "presentation"}], "name": {"en_US": "presentation", "fr_FR": "presentation"}}, "compatibility": {"docs": [{"url": "compatibility/#language#/index", "name": "compatibility"}], "name": {"en_US": "compatibility", "fr_FR": "compatibility"}}}')
		THIRD_CONFIG = jQuery.parseJSON('{"third_plugin":{"docs":[{"url":"third_plugin/ecowatt/#language#/index.html","name":"Eco-2-watt"},{"url":"third_plugin/ecowatt/#language#/index.html","name":"Test1"},{"url":"third_plugin/ecowatt/#language#/index.html","name":"Test2"},{"url":"third_plugin/ecowatt/#language#/index.html","name":"Test3"}],"name":{"en_US":"Thierd plugins","fr_FR":"Plugins tierces"}}}')
		generateThirdSite(THIRD_CONFIG);
		displayDoc();
	}
	$('#sel_language').on('change',function(){
		displayDoc();
		generateThirdSite(THIRD_CONFIG);
	})
});

function displayDoc(){
	generateDocSite(DOC_CONFIG.core,'#ul_listCore',4);
	generateDocSite(DOC_CONFIG.plugin,'#ul_listPlugin',4);
	generateDocSite(DOC_CONFIG.howto,'#ul_listHowTo',4);
	generateDocSite(DOC_CONFIG.howtoadvance,'#ul_listHowToAdvance',4);
	generateDocSite(DOC_CONFIG.presentation,'#ul_listFirstStep0');
	generateDocSite(DOC_CONFIG.installation,'#ul_listFirstStep1');
	generateDocSite(DOC_CONFIG['premiers-pas'],'#ul_listFirstStep2');
	generateDocSite(DOC_CONFIG.compatibility,'#ul_listFirstStep3');
	generateDocSite(DOC_CONFIG.rfxcom,'#ul_listRfxcom',4);
	generateDocSite(DOC_CONFIG.edisio,'#ul_listEdisio',4);
	generateDocSite(DOC_CONFIG.camera,'#ul_listCamera',4);
	generateDocSite(DOC_CONFIG.blea,'#ul_listBlea',4);
	generateDocSite(DOC_CONFIG.zwave,'#ul_listZwave',4);
	generateDocSite(DOC_CONFIG.enocean,'#ul_listEnOcean',4);
	generateDocSite(DOC_CONFIG.dev,'#ul_listDev',4);
	$('#bt_eqCompZwave').attr('href','zwave/fr_FR/equipement.compatible'.replace('#language#',$('#sel_language').val()));
	$('#bt_eqCompEnOcean').attr('href','enocean/fr_FR/equipement.compatible'.replace('#language#',$('#sel_language').val()));
	$('#bt_eqCompRfxcom').attr('href','rfxcom/fr_FR/equipement.compatible'.replace('#language#',$('#sel_language').val()));
	$('#bt_eqCompEdisio').attr('href','edisio/fr_FR/equipement.compatible'.replace('#language#',$('#sel_language').val()));
	$('#bt_eqCompBlea').attr('href','blea/fr_FR/equipement.compatible'.replace('#language#',$('#sel_language').val()));
	$('#bt_eqCompCamera').attr('href','camera/fr_FR/equipement.compatible'.replace('#language#',$('#sel_language').val()));
}


function convertCase(_string){
	return _string.charAt(0).toUpperCase()+_string.substr(1).toLowerCase();
}

function generateDocSite(_data,_el,_col){
	if(_col){
		for (var i = 0; i < _col; i++) {
			$(_el+i).empty();
		}
	}else{
		$(_el).empty();
	}
	_data.docs.sort(function (a, b) {
		if (a.name.toLowerCase() > b.name.toLowerCase())
			return 1;
		if (a.name.toLowerCase() < b.name.toLowerCase())
			return -1;
		return 0;
	});
	for(var i in _data.docs){
		if(_data.docs[i].name == 'equipement compatible'){
			continue;
		}
		var page_name = convertCase(_data.docs[i].name);
		if(PAGE_NAME[page_name.toLowerCase()]){
			var page_name = convertCase(PAGE_NAME[page_name.toLowerCase()])
		}
		if(_col){
			colNb=i % _col;
			$(_el+colNb).append('<a class="collection-item waves-effect waves-jeedom" target="_blank" href="'+_data.docs[i].url.replace('#language#',$('#sel_language').val())+'">'+page_name+'</a>');
		}else{
			$(_el).append('<a class="collection-item waves-effect waves-jeedom" target="_blank" href="'+_data.docs[i].url.replace('#language#',$('#sel_language').val())+'">'+page_name+'</a>');
		}
	}
}

function generateThirdSite(_data){
	$('#ul_listPluginThird0').empty();
	$('#ul_listPluginThird1').empty();
	$('#ul_listPluginThird2').empty();
	$('#ul_listPluginThird3').empty();
	_data.third_plugin.docs.sort(function (a, b) {
		if (a.name.toLowerCase() > b.name.toLowerCase())
			return 1;
		if (a.name.toLowerCase() < b.name.toLowerCase())
			return -1;
		return 0;
	});
	for(var i in _data.third_plugin.docs){
		colNb=i % 4;
		$('#ul_listPluginThird'+colNb).append('<a class="collection-item waves-effect waves-jeedom" target="_blank" href="'+_data.third_plugin.docs[i].url.replace('#language#',$('#sel_language').val())+'">'+convertCase(_data.third_plugin.docs[i].name)+'</a>');
	}
}
