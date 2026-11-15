/*************************** 
 * Cognate_Experiment *
 ***************************/


// store info about the experiment session:
let expName = 'cognate_experiment';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color((1.0000, 1.0000, 1.0000)),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(consentRoutineBegin());
flowScheduler.add(consentRoutineEachFrame());
flowScheduler.add(consentRoutineEnd());
flowScheduler.add(demographicsRoutineBegin());
flowScheduler.add(demographicsRoutineEachFrame());
flowScheduler.add(demographicsRoutineEnd());
const audio_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(audio_loopLoopBegin(audio_loopLoopScheduler));
flowScheduler.add(audio_loopLoopScheduler);
flowScheduler.add(audio_loopLoopEnd);


flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const practice_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_loopLoopBegin(practice_loopLoopScheduler));
flowScheduler.add(practice_loopLoopScheduler);
flowScheduler.add(practice_loopLoopEnd);


flowScheduler.add(practice_endRoutineBegin());
flowScheduler.add(practice_endRoutineEachFrame());
flowScheduler.add(practice_endRoutineEnd());
const main_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(main_loopLoopBegin(main_loopLoopScheduler));
flowScheduler.add(main_loopLoopScheduler);
flowScheduler.add(main_loopLoopEnd);


flowScheduler.add(main_endRoutineBegin());
flowScheduler.add(main_endRoutineEachFrame());
flowScheduler.add(main_endRoutineEnd());
flowScheduler.add(lex_instrRoutineBegin());
flowScheduler.add(lex_instrRoutineEachFrame());
flowScheduler.add(lex_instrRoutineEnd());
const lex_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(lex_loopLoopBegin(lex_loopLoopScheduler));
flowScheduler.add(lex_loopLoopScheduler);
flowScheduler.add(lex_loopLoopEnd);


flowScheduler.add(tr_instrRoutineBegin());
flowScheduler.add(tr_instrRoutineEachFrame());
flowScheduler.add(tr_instrRoutineEnd());
const tr_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(tr_loopLoopBegin(tr_loopLoopScheduler));
flowScheduler.add(tr_loopLoopScheduler);
flowScheduler.add(tr_loopLoopEnd);


flowScheduler.add(leapq_genRoutineBegin());
flowScheduler.add(leapq_genRoutineEachFrame());
flowScheduler.add(leapq_genRoutineEnd());
flowScheduler.add(leapq_enRoutineBegin());
flowScheduler.add(leapq_enRoutineEachFrame());
flowScheduler.add(leapq_enRoutineEnd());
flowScheduler.add(debriefRoutineBegin());
flowScheduler.add(debriefRoutineEachFrame());
flowScheduler.add(debriefRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'practice.csv', 'path': 'practice.csv'},
    {'name': 'audio/prac_cheese.wav', 'path': 'audio/prac_cheese.wav'},
    {'name': 'images/knife.png', 'path': 'images/knife.png'},
    {'name': 'images/kite.png', 'path': 'images/kite.png'},
    {'name': 'images/drum.png', 'path': 'images/drum.png'},
    {'name': 'images/wallet.png', 'path': 'images/wallet.png'},
    {'name': 'audio/prac_door.wav', 'path': 'audio/prac_door.wav'},
    {'name': 'images/key.png', 'path': 'images/key.png'},
    {'name': 'images/tiger.png', 'path': 'images/tiger.png'},
    {'name': 'images/lemon.png', 'path': 'images/lemon.png'},
    {'name': 'images/rainbow.png', 'path': 'images/rainbow.png'},
    {'name': 'audio/prac_letter.wav', 'path': 'audio/prac_letter.wav'},
    {'name': 'images/pen.png', 'path': 'images/pen.png'},
    {'name': 'images/giraffe.png', 'path': 'images/giraffe.png'},
    {'name': 'images/pumpkin.png', 'path': 'images/pumpkin.png'},
    {'name': 'images/mushroom.png', 'path': 'images/mushroom.png'},
    {'name': 'audio/prac_paper.wav', 'path': 'audio/prac_paper.wav'},
    {'name': 'images/scissors.png', 'path': 'images/scissors.png'},
    {'name': 'images/snake.png', 'path': 'images/snake.png'},
    {'name': 'images/zebra.png', 'path': 'images/zebra.png'},
    {'name': 'images/trumpet.png', 'path': 'images/trumpet.png'},
    {'name': 'main.csv', 'path': 'main.csv'},
    {'name': 'audio/tc_taxi.wav', 'path': 'audio/tc_taxi.wav'},
    {'name': 'images/driver.png', 'path': 'images/driver.png'},
    {'name': 'images/sewing_machine.png', 'path': 'images/sewing_machine.png'},
    {'name': 'images/cement_mixer.png', 'path': 'images/cement_mixer.png'},
    {'name': 'images/puzzle.png', 'path': 'images/puzzle.png'},
    {'name': 'audio/tc_train.wav', 'path': 'audio/tc_train.wav'},
    {'name': 'images/train_station.png', 'path': 'images/train_station.png'},
    {'name': 'images/necklace.png', 'path': 'images/necklace.png'},
    {'name': 'images/squirrel.png', 'path': 'images/squirrel.png'},
    {'name': 'images/tea.png', 'path': 'images/tea.png'},
    {'name': 'audio/tc_hotel.wav', 'path': 'audio/tc_hotel.wav'},
    {'name': 'images/reception.png', 'path': 'images/reception.png'},
    {'name': 'images/oyster.png', 'path': 'images/oyster.png'},
    {'name': 'images/vase.png', 'path': 'images/vase.png'},
    {'name': 'images/kindergarten.png', 'path': 'images/kindergarten.png'},
    {'name': 'audio/tc_uniform.wav', 'path': 'audio/tc_uniform.wav'},
    {'name': 'images/washing_machine.png', 'path': 'images/washing_machine.png'},
    {'name': 'images/dartboard.png', 'path': 'images/dartboard.png'},
    {'name': 'images/ice_bag.png', 'path': 'images/ice_bag.png'},
    {'name': 'images/stapler.png', 'path': 'images/stapler.png'},
    {'name': 'audio/tc_coffee.wav', 'path': 'audio/tc_coffee.wav'},
    {'name': 'images/mug.png', 'path': 'images/mug.png'},
    {'name': 'images/lamp.png', 'path': 'images/lamp.png'},
    {'name': 'images/ladybug.png', 'path': 'images/ladybug.png'},
    {'name': 'images/bicycle.png', 'path': 'images/bicycle.png'},
    {'name': 'audio/tc_tomato.wav', 'path': 'audio/tc_tomato.wav'},
    {'name': 'images/pizza.png', 'path': 'images/pizza.png'},
    {'name': 'images/cactus.png', 'path': 'images/cactus.png'},
    {'name': 'images/croissant.png', 'path': 'images/croissant.png'},
    {'name': 'images/sunglasses.png', 'path': 'images/sunglasses.png'},
    {'name': 'audio/tc_potato.wav', 'path': 'audio/tc_potato.wav'},
    {'name': 'images/electric_fryer.png', 'path': 'images/electric_fryer.png'},
    {'name': 'images/binoculars.png', 'path': 'images/binoculars.png'},
    {'name': 'images/turtle.png', 'path': 'images/turtle.png'},
    {'name': 'images/sunflower.png', 'path': 'images/sunflower.png'},
    {'name': 'audio/tc_police.wav', 'path': 'audio/tc_police.wav'},
    {'name': 'images/siren.png', 'path': 'images/siren.png'},
    {'name': 'images/butterfly.png', 'path': 'images/butterfly.png'},
    {'name': 'images/vacuum_cleaner.png', 'path': 'images/vacuum_cleaner.png'},
    {'name': 'images/camera.png', 'path': 'images/camera.png'},
    {'name': 'audio/tc_champion.wav', 'path': 'audio/tc_champion.wav'},
    {'name': 'images/medal.png', 'path': 'images/medal.png'},
    {'name': 'images/padlock.png', 'path': 'images/padlock.png'},
    {'name': 'images/pear.png', 'path': 'images/pear.png'},
    {'name': 'images/shield.png', 'path': 'images/shield.png'},
    {'name': 'audio/tc_professor.wav', 'path': 'audio/tc_professor.wav'},
    {'name': 'images/blackboard.png', 'path': 'images/blackboard.png'},
    {'name': 'images/umbrella.png', 'path': 'images/umbrella.png'},
    {'name': 'images/oven.png', 'path': 'images/oven.png'},
    {'name': 'images/alarm_clock.png', 'path': 'images/alarm_clock.png'},
    {'name': 'audio/tc_pilot.wav', 'path': 'audio/tc_pilot.wav'},
    {'name': 'images/jet_plane.png', 'path': 'images/jet_plane.png'},
    {'name': 'images/bedroom.png', 'path': 'images/bedroom.png'},
    {'name': 'images/post_office.png', 'path': 'images/post_office.png'},
    {'name': 'images/kiosk.png', 'path': 'images/kiosk.png'},
    {'name': 'audio/tc_doctor.wav', 'path': 'audio/tc_doctor.wav'},
    {'name': 'images/stethoscope.png', 'path': 'images/stethoscope.png'},
    {'name': 'images/magnet.png', 'path': 'images/magnet.png'},
    {'name': 'images/abacus.png', 'path': 'images/abacus.png'},
    {'name': 'images/hairdryer.png', 'path': 'images/hairdryer.png'},
    {'name': 'audio/tc_corridor.wav', 'path': 'audio/tc_corridor.wav'},
    {'name': 'images/door.png', 'path': 'images/door.png'},
    {'name': 'images/kangaroo.png', 'path': 'images/kangaroo.png'},
    {'name': 'images/airport.png', 'path': 'images/airport.png'},
    {'name': 'images/toaster.png', 'path': 'images/toaster.png'},
    {'name': 'audio/tc_restaurant.wav', 'path': 'audio/tc_restaurant.wav'},
    {'name': 'images/waiter.png', 'path': 'images/waiter.png'},
    {'name': 'images/peacock.png', 'path': 'images/peacock.png'},
    {'name': 'images/snowman.png', 'path': 'images/snowman.png'},
    {'name': 'images/elephant.png', 'path': 'images/elephant.png'},
    {'name': 'audio/tc_captain.wav', 'path': 'audio/tc_captain.wav'},
    {'name': 'images/ship.png', 'path': 'images/ship.png'},
    {'name': 'images/house.png', 'path': 'images/house.png'},
    {'name': 'images/motorcycle.png', 'path': 'images/motorcycle.png'},
    {'name': 'images/horse.png', 'path': 'images/horse.png'},
    {'name': 'audio/tc_television.wav', 'path': 'audio/tc_television.wav'},
    {'name': 'images/remote_control.png', 'path': 'images/remote_control.png'},
    {'name': 'images/bridge.png', 'path': 'images/bridge.png'},
    {'name': 'images/grapes.png', 'path': 'images/grapes.png'},
    {'name': 'images/flag.png', 'path': 'images/flag.png'},
    {'name': 'audio/tc_ambulance.wav', 'path': 'audio/tc_ambulance.wav'},
    {'name': 'images/hospital.png', 'path': 'images/hospital.png'},
    {'name': 'images/crab.png', 'path': 'images/crab.png'},
    {'name': 'images/plum.png', 'path': 'images/plum.png'},
    {'name': 'images/rose.png', 'path': 'images/rose.png'},
    {'name': 'audio/tc_museum.wav', 'path': 'audio/tc_museum.wav'},
    {'name': 'images/statue.png', 'path': 'images/statue.png'},
    {'name': 'images/shovel.png', 'path': 'images/shovel.png'},
    {'name': 'images/donkey.png', 'path': 'images/donkey.png'},
    {'name': 'images/button.png', 'path': 'images/button.png'},
    {'name': 'audio/tc_football.wav', 'path': 'audio/tc_football.wav'},
    {'name': 'images/goal.png', 'path': 'images/goal.png'},
    {'name': 'images/mailbox.png', 'path': 'images/mailbox.png'},
    {'name': 'images/teapot.png', 'path': 'images/teapot.png'},
    {'name': 'images/hedgehog.png', 'path': 'images/hedgehog.png'},
    {'name': 'audio/tc_shampoo.wav', 'path': 'audio/tc_shampoo.wav'},
    {'name': 'images/hair.png', 'path': 'images/hair.png'},
    {'name': 'images/kettle.png', 'path': 'images/kettle.png'},
    {'name': 'images/deer.png', 'path': 'images/deer.png'},
    {'name': 'images/saddle.png', 'path': 'images/saddle.png'},
    {'name': 'audio/tc_pyjamas.wav', 'path': 'audio/tc_pyjamas.wav'},
    {'name': 'images/goose.png', 'path': 'images/goose.png'},
    {'name': 'images/map.png', 'path': 'images/map.png'},
    {'name': 'images/cloud.png', 'path': 'images/cloud.png'},
    {'name': 'audio/tc_panda.wav', 'path': 'audio/tc_panda.wav'},
    {'name': 'images/bamboo.png', 'path': 'images/bamboo.png'},
    {'name': 'images/harmonica.png', 'path': 'images/harmonica.png'},
    {'name': 'images/yo_yo.png', 'path': 'images/yo_yo.png'},
    {'name': 'images/screwdriver.png', 'path': 'images/screwdriver.png'},
    {'name': 'audio/tc_ketchup.wav', 'path': 'audio/tc_ketchup.wav'},
    {'name': 'images/hot_dog.png', 'path': 'images/hot_dog.png'},
    {'name': 'images/lightning.png', 'path': 'images/lightning.png'},
    {'name': 'images/spider.png', 'path': 'images/spider.png'},
    {'name': 'images/wheelbarrow.png', 'path': 'images/wheelbarrow.png'},
    {'name': 'audio/tc_basketball.wav', 'path': 'audio/tc_basketball.wav'},
    {'name': 'images/hoop.png', 'path': 'images/hoop.png'},
    {'name': 'images/rooster.png', 'path': 'images/rooster.png'},
    {'name': 'images/parachute.png', 'path': 'images/parachute.png'},
    {'name': 'images/daisy.png', 'path': 'images/daisy.png'},
    {'name': 'audio/nc_bottle.wav', 'path': 'audio/nc_bottle.wav'},
    {'name': 'images/refrigerator.png', 'path': 'images/refrigerator.png'},
    {'name': 'images/helicopter.png', 'path': 'images/helicopter.png'},
    {'name': 'images/globe.png', 'path': 'images/globe.png'},
    {'name': 'images/socks.png', 'path': 'images/socks.png'},
    {'name': 'audio/nc_umbrella.wav', 'path': 'audio/nc_umbrella.wav'},
    {'name': 'images/rain.png', 'path': 'images/rain.png'},
    {'name': 'images/bagel.png', 'path': 'images/bagel.png'},
    {'name': 'images/starfish.png', 'path': 'images/starfish.png'},
    {'name': 'images/coconut.png', 'path': 'images/coconut.png'},
    {'name': 'audio/nc_apple.wav', 'path': 'audio/nc_apple.wav'},
    {'name': 'images/tree.png', 'path': 'images/tree.png'},
    {'name': 'images/lollipop.png', 'path': 'images/lollipop.png'},
    {'name': 'images/raincoat.png', 'path': 'images/raincoat.png'},
    {'name': 'images/igloo.png', 'path': 'images/igloo.png'},
    {'name': 'audio/nc_farmer.wav', 'path': 'audio/nc_farmer.wav'},
    {'name': 'images/cow.png', 'path': 'images/cow.png'},
    {'name': 'images/frisbee.png', 'path': 'images/frisbee.png'},
    {'name': 'images/sneakers.png', 'path': 'images/sneakers.png'},
    {'name': 'images/orchid.png', 'path': 'images/orchid.png'},
    {'name': 'audio/nc_ladder.wav', 'path': 'audio/nc_ladder.wav'},
    {'name': 'images/light_bulb.png', 'path': 'images/light_bulb.png'},
    {'name': 'images/cello.png', 'path': 'images/cello.png'},
    {'name': 'images/camel.png', 'path': 'images/camel.png'},
    {'name': 'images/volcano.png', 'path': 'images/volcano.png'},
    {'name': 'audio/nc_gloves.wav', 'path': 'audio/nc_gloves.wav'},
    {'name': 'images/snowball.png', 'path': 'images/snowball.png'},
    {'name': 'images/tent.png', 'path': 'images/tent.png'},
    {'name': 'images/flashlight.png', 'path': 'images/flashlight.png'},
    {'name': 'images/cat.png', 'path': 'images/cat.png'},
    {'name': 'audio/nc_soup.wav', 'path': 'audio/nc_soup.wav'},
    {'name': 'images/bowl.png', 'path': 'images/bowl.png'},
    {'name': 'images/pyramid.png', 'path': 'images/pyramid.png'},
    {'name': 'images/helmet.png', 'path': 'images/helmet.png'},
    {'name': 'images/microphone.png', 'path': 'images/microphone.png'},
    {'name': 'audio/nc_onion.wav', 'path': 'audio/nc_onion.wav'},
    {'name': 'images/kebab.png', 'path': 'images/kebab.png'},
    {'name': 'images/bus_stop.png', 'path': 'images/bus_stop.png'},
    {'name': 'images/hand_dryer.png', 'path': 'images/hand_dryer.png'},
    {'name': 'images/donut.png', 'path': 'images/donut.png'},
    {'name': 'audio/nc_rabbit.wav', 'path': 'audio/nc_rabbit.wav'},
    {'name': 'images/carrot.png', 'path': 'images/carrot.png'},
    {'name': 'images/balloon.png', 'path': 'images/balloon.png'},
    {'name': 'images/blender.png', 'path': 'images/blender.png'},
    {'name': 'images/crayons.png', 'path': 'images/crayons.png'},
    {'name': 'audio/nc_flower.wav', 'path': 'audio/nc_flower.wav'},
    {'name': 'images/ukulele.png', 'path': 'images/ukulele.png'},
    {'name': 'images/mouse.png', 'path': 'images/mouse.png'},
    {'name': 'images/sofa.png', 'path': 'images/sofa.png'},
    {'name': 'audio/nc_milk.wav', 'path': 'audio/nc_milk.wav'},
    {'name': 'images/cookies.png', 'path': 'images/cookies.png'},
    {'name': 'images/ruler.png', 'path': 'images/ruler.png'},
    {'name': 'images/usb_flash_drive.png', 'path': 'images/usb_flash_drive.png'},
    {'name': 'images/swimsuit.png', 'path': 'images/swimsuit.png'},
    {'name': 'audio/nc_book.wav', 'path': 'audio/nc_book.wav'},
    {'name': 'images/shelf.png', 'path': 'images/shelf.png'},
    {'name': 'images/hammock.png', 'path': 'images/hammock.png'},
    {'name': 'images/comb.png', 'path': 'images/comb.png'},
    {'name': 'images/soap.png', 'path': 'images/soap.png'},
    {'name': 'audio/nc_nurse.wav', 'path': 'audio/nc_nurse.wav'},
    {'name': 'images/syringe.png', 'path': 'images/syringe.png'},
    {'name': 'images/walrus.png', 'path': 'images/walrus.png'},
    {'name': 'images/banjo.png', 'path': 'images/banjo.png'},
    {'name': 'images/cabbage.png', 'path': 'images/cabbage.png'},
    {'name': 'audio/nc_firefighter.wav', 'path': 'audio/nc_firefighter.wav'},
    {'name': 'images/hose.png', 'path': 'images/hose.png'},
    {'name': 'images/monkey.png', 'path': 'images/monkey.png'},
    {'name': 'images/zipper.png', 'path': 'images/zipper.png'},
    {'name': 'images/popcorn.png', 'path': 'images/popcorn.png'},
    {'name': 'audio/nc_squirrel.wav', 'path': 'audio/nc_squirrel.wav'},
    {'name': 'images/nuts.png', 'path': 'images/nuts.png'},
    {'name': 'images/dustbin.png', 'path': 'images/dustbin.png'},
    {'name': 'images/fan.png', 'path': 'images/fan.png'},
    {'name': 'images/pine_tree.png', 'path': 'images/pine_tree.png'},
    {'name': 'audio/nc_plane.wav', 'path': 'audio/nc_plane.wav'},
    {'name': 'images/wings.png', 'path': 'images/wings.png'},
    {'name': 'images/cucumber.png', 'path': 'images/cucumber.png'},
    {'name': 'images/mask.png', 'path': 'images/mask.png'},
    {'name': 'images/raccoon.png', 'path': 'images/raccoon.png'},
    {'name': 'audio/nc_garden.wav', 'path': 'audio/nc_garden.wav'},
    {'name': 'images/rake.png', 'path': 'images/rake.png'},
    {'name': 'images/llama.png', 'path': 'images/llama.png'},
    {'name': 'images/whistle.png', 'path': 'images/whistle.png'},
    {'name': 'images/rhino.png', 'path': 'images/rhino.png'},
    {'name': 'audio/nc_egg.wav', 'path': 'audio/nc_egg.wav'},
    {'name': 'images/pan.png', 'path': 'images/pan.png'},
    {'name': 'images/ant.png', 'path': 'images/ant.png'},
    {'name': 'images/flute.png', 'path': 'images/flute.png'},
    {'name': 'images/skunk.png', 'path': 'images/skunk.png'},
    {'name': 'audio/nc_bird.wav', 'path': 'audio/nc_bird.wav'},
    {'name': 'images/nest.png', 'path': 'images/nest.png'},
    {'name': 'images/covered_wagon.png', 'path': 'images/covered_wagon.png'},
    {'name': 'images/radish.png', 'path': 'images/radish.png'},
    {'name': 'images/muffin.png', 'path': 'images/muffin.png'},
    {'name': 'audio/nc_forest.wav', 'path': 'audio/nc_forest.wav'},
    {'name': 'images/wolf.png', 'path': 'images/wolf.png'},
    {'name': 'images/sled.png', 'path': 'images/sled.png'},
    {'name': 'images/jar.png', 'path': 'images/jar.png'},
    {'name': 'images/surfboard.png', 'path': 'images/surfboard.png'},
    {'name': 'audio/nc_butcher.wav', 'path': 'audio/nc_butcher.wav'},
    {'name': 'images/shank.png', 'path': 'images/shank.png'},
    {'name': 'images/caterpillar.png', 'path': 'images/caterpillar.png'},
    {'name': 'images/crown.png', 'path': 'images/crown.png'},
    {'name': 'images/hippo.png', 'path': 'images/hippo.png'},
    {'name': 'audio/nc_cave.wav', 'path': 'audio/nc_cave.wav'},
    {'name': 'images/bat.png', 'path': 'images/bat.png'},
    {'name': 'images/tricycle.png', 'path': 'images/tricycle.png'},
    {'name': 'images/doghouse.png', 'path': 'images/doghouse.png'},
    {'name': 'images/paperclip.png', 'path': 'images/paperclip.png'},
    {'name': 'audio/nc_mirror.wav', 'path': 'audio/nc_mirror.wav'},
    {'name': 'images/lipstick.png', 'path': 'images/lipstick.png'},
    {'name': 'images/whale.png', 'path': 'images/whale.png'},
    {'name': 'images/gorilla.png', 'path': 'images/gorilla.png'},
    {'name': 'images/stillson_wrench.png', 'path': 'images/stillson_wrench.png'},
    {'name': 'audio/nc_towel.wav', 'path': 'audio/nc_towel.wav'},
    {'name': 'images/shower.png', 'path': 'images/shower.png'},
    {'name': 'images/gong.png', 'path': 'images/gong.png'},
    {'name': 'images/dominos.png', 'path': 'images/dominos.png'},
    {'name': 'images/marbles.png', 'path': 'images/marbles.png'},
    {'name': 'audio/fc_pasta.wav', 'path': 'audio/fc_pasta.wav'},
    {'name': 'images/sauce.png', 'path': 'images/sauce.png'},
    {'name': 'images/candles.png', 'path': 'images/candles.png'},
    {'name': 'images/teddy_bear.png', 'path': 'images/teddy_bear.png'},
    {'name': 'images/skateboard.png', 'path': 'images/skateboard.png'},
    {'name': 'audio/ctrl_fabric.wav', 'path': 'audio/ctrl_fabric.wav'},
    {'name': 'images/cotton.png', 'path': 'images/cotton.png'},
    {'name': 'images/brick.png', 'path': 'images/brick.png'},
    {'name': 'images/corn.png', 'path': 'images/corn.png'},
    {'name': 'images/pineapple.png', 'path': 'images/pineapple.png'},
    {'name': 'audio/fc_closet.wav', 'path': 'audio/fc_closet.wav'},
    {'name': 'images/cleaning_cloth.png', 'path': 'images/cleaning_cloth.png'},
    {'name': 'images/toilet_brush.png', 'path': 'images/toilet_brush.png'},
    {'name': 'images/door_handle.png', 'path': 'images/door_handle.png'},
    {'name': 'images/shoe.png', 'path': 'images/shoe.png'},
    {'name': 'audio/ctrl_axe.wav', 'path': 'audio/ctrl_axe.wav'},
    {'name': 'images/logs.png', 'path': 'images/logs.png'},
    {'name': 'images/wheel.png', 'path': 'images/wheel.png'},
    {'name': 'images/beach.png', 'path': 'images/beach.png'},
    {'name': 'images/microwave.png', 'path': 'images/microwave.png'},
    {'name': 'audio/fc_box.wav', 'path': 'audio/fc_box.wav'},
    {'name': 'images/tape.png', 'path': 'images/tape.png'},
    {'name': 'images/gloves.png', 'path': 'images/gloves.png'},
    {'name': 'images/hourglass.png', 'path': 'images/hourglass.png'},
    {'name': 'images/parrot.png', 'path': 'images/parrot.png'},
    {'name': 'audio/ctrl_sandal.wav', 'path': 'audio/ctrl_sandal.wav'},
    {'name': 'images/strap.png', 'path': 'images/strap.png'},
    {'name': 'images/anchor.png', 'path': 'images/anchor.png'},
    {'name': 'images/flamingo.png', 'path': 'images/flamingo.png'},
    {'name': 'images/heater.png', 'path': 'images/heater.png'},
    {'name': 'audio/fc_dish.wav', 'path': 'audio/fc_dish.wav'},
    {'name': 'images/sponge.png', 'path': 'images/sponge.png'},
    {'name': 'images/toothbrush.png', 'path': 'images/toothbrush.png'},
    {'name': 'images/eraser.png', 'path': 'images/eraser.png'},
    {'name': 'images/paintbrush.png', 'path': 'images/paintbrush.png'},
    {'name': 'audio/ctrl_pill.wav', 'path': 'audio/ctrl_pill.wav'},
    {'name': 'images/mouth.png', 'path': 'images/mouth.png'},
    {'name': 'images/robot.png', 'path': 'images/robot.png'},
    {'name': 'images/flower.png', 'path': 'images/flower.png'},
    {'name': 'images/brush.png', 'path': 'images/brush.png'},
    {'name': 'audio/fc_fish.wav', 'path': 'audio/fc_fish.wav'},
    {'name': 'images/aquarium.png', 'path': 'images/aquarium.png'},
    {'name': 'images/socket.png', 'path': 'images/socket.png'},
    {'name': 'images/coffee_grinder.png', 'path': 'images/coffee_grinder.png'},
    {'name': 'images/iron.png', 'path': 'images/iron.png'},
    {'name': 'audio/ctrl_leaf.wav', 'path': 'audio/ctrl_leaf.wav'},
    {'name': 'images/pond.png', 'path': 'images/pond.png'},
    {'name': 'images/bathtub.png', 'path': 'images/bathtub.png'},
    {'name': 'images/pillow.png', 'path': 'images/pillow.png'},
    {'name': 'images/owl.png', 'path': 'images/owl.png'},
    {'name': 'audio/fc_bay.wav', 'path': 'audio/fc_bay.wav'},
    {'name': 'images/sailboat.png', 'path': 'images/sailboat.png'},
    {'name': 'images/child.png', 'path': 'images/child.png'},
    {'name': 'images/belt.png', 'path': 'images/belt.png'},
    {'name': 'images/compass.png', 'path': 'images/compass.png'},
    {'name': 'audio/ctrl_bell.wav', 'path': 'audio/ctrl_bell.wav'},
    {'name': 'images/ribbon.png', 'path': 'images/ribbon.png'},
    {'name': 'images/book.png', 'path': 'images/book.png'},
    {'name': 'images/pencil_sharpener.png', 'path': 'images/pencil_sharpener.png'},
    {'name': 'audio/fc_band.wav', 'path': 'audio/fc_band.wav'},
    {'name': 'images/stage.png', 'path': 'images/stage.png'},
    {'name': 'images/package.png', 'path': 'images/package.png'},
    {'name': 'images/tractor.png', 'path': 'images/tractor.png'},
    {'name': 'images/snail.png', 'path': 'images/snail.png'},
    {'name': 'audio/ctrl_car.wav', 'path': 'audio/ctrl_car.wav'},
    {'name': 'images/accident.png', 'path': 'images/accident.png'},
    {'name': 'images/avalanche.png', 'path': 'images/avalanche.png'},
    {'name': 'images/cherry.png', 'path': 'images/cherry.png'},
    {'name': 'images/saxophone.png', 'path': 'images/saxophone.png'},
    {'name': 'audio/fc_dam.wav', 'path': 'audio/fc_dam.wav'},
    {'name': 'images/lake.png', 'path': 'images/lake.png'},
    {'name': 'images/chimney.png', 'path': 'images/chimney.png'},
    {'name': 'images/strawberry.png', 'path': 'images/strawberry.png'},
    {'name': 'images/hamburger.png', 'path': 'images/hamburger.png'},
    {'name': 'audio/ctrl_eye.wav', 'path': 'audio/ctrl_eye.wav'},
    {'name': 'images/magnifying_glass.png', 'path': 'images/magnifying_glass.png'},
    {'name': 'images/telescope.png', 'path': 'images/telescope.png'},
    {'name': 'images/pepper.png', 'path': 'images/pepper.png'},
    {'name': 'images/banana.png', 'path': 'images/banana.png'},
    {'name': 'audio/fc_kayak.wav', 'path': 'audio/fc_kayak.wav'},
    {'name': 'images/river.png', 'path': 'images/river.png'},
    {'name': 'images/ski_run.png', 'path': 'images/ski_run.png'},
    {'name': 'images/sandwich.png', 'path': 'images/sandwich.png'},
    {'name': 'images/bee.png', 'path': 'images/bee.png'},
    {'name': 'audio/ctrl_lamb.wav', 'path': 'audio/ctrl_lamb.wav'},
    {'name': 'images/sheep.png', 'path': 'images/sheep.png'},
    {'name': 'images/desk.png', 'path': 'images/desk.png'},
    {'name': 'images/dinosaur.png', 'path': 'images/dinosaur.png'},
    {'name': 'images/rocket.png', 'path': 'images/rocket.png'},
    {'name': 'audio/fc_harp.wav', 'path': 'audio/fc_harp.wav'},
    {'name': 'images/piano.png', 'path': 'images/piano.png'},
    {'name': 'images/tank.png', 'path': 'images/tank.png'},
    {'name': 'images/spinach.png', 'path': 'images/spinach.png'},
    {'name': 'images/smartwatch.png', 'path': 'images/smartwatch.png'},
    {'name': 'audio/ctrl_apartment.wav', 'path': 'audio/ctrl_apartment.wav'},
    {'name': 'images/kitchen.png', 'path': 'images/kitchen.png'},
    {'name': 'images/roof.png', 'path': 'images/roof.png'},
    {'name': 'images/christmas_tree.png', 'path': 'images/christmas_tree.png'},
    {'name': 'images/lighthouse.png', 'path': 'images/lighthouse.png'},
    {'name': 'audio/fc_college.wav', 'path': 'audio/fc_college.wav'},
    {'name': 'images/lawn.png', 'path': 'images/lawn.png'},
    {'name': 'images/seesaw.png', 'path': 'images/seesaw.png'},
    {'name': 'images/feather.png', 'path': 'images/feather.png'},
    {'name': 'images/broom.png', 'path': 'images/broom.png'},
    {'name': 'audio/ctrl_laugh.wav', 'path': 'audio/ctrl_laugh.wav'},
    {'name': 'images/smile.png', 'path': 'images/smile.png'},
    {'name': 'images/speech_bubble.png', 'path': 'images/speech_bubble.png'},
    {'name': 'images/dustpan.png', 'path': 'images/dustpan.png'},
    {'name': 'images/pinecone.png', 'path': 'images/pinecone.png'},
    {'name': 'audio/fc_mama.wav', 'path': 'audio/fc_mama.wav'},
    {'name': 'images/father.png', 'path': 'images/father.png'},
    {'name': 'images/spoon.png', 'path': 'images/spoon.png'},
    {'name': 'images/pirate.png', 'path': 'images/pirate.png'},
    {'name': 'images/tulip.png', 'path': 'images/tulip.png'},
    {'name': 'audio/ctrl_hay.wav', 'path': 'audio/ctrl_hay.wav'},
    {'name': 'images/barn.png', 'path': 'images/barn.png'},
    {'name': 'images/raise_a_hand.png', 'path': 'images/raise_a_hand.png'},
    {'name': 'images/cupcake.png', 'path': 'images/cupcake.png'},
    {'name': 'images/lobster.png', 'path': 'images/lobster.png'},
    {'name': 'audio/ctrl_pasta.wav', 'path': 'audio/ctrl_pasta.wav'},
    {'name': 'audio/fc_fabric.wav', 'path': 'audio/fc_fabric.wav'},
    {'name': 'audio/ctrl_closet.wav', 'path': 'audio/ctrl_closet.wav'},
    {'name': 'audio/fc_axe.wav', 'path': 'audio/fc_axe.wav'},
    {'name': 'audio/ctrl_box.wav', 'path': 'audio/ctrl_box.wav'},
    {'name': 'audio/fc_sandal.wav', 'path': 'audio/fc_sandal.wav'},
    {'name': 'audio/ctrl_dish.wav', 'path': 'audio/ctrl_dish.wav'},
    {'name': 'audio/fc_pill.wav', 'path': 'audio/fc_pill.wav'},
    {'name': 'audio/ctrl_fish.wav', 'path': 'audio/ctrl_fish.wav'},
    {'name': 'audio/fc_leaf.wav', 'path': 'audio/fc_leaf.wav'},
    {'name': 'audio/ctrl_bay.wav', 'path': 'audio/ctrl_bay.wav'},
    {'name': 'audio/fc_bell.wav', 'path': 'audio/fc_bell.wav'},
    {'name': 'audio/ctrl_band.wav', 'path': 'audio/ctrl_band.wav'},
    {'name': 'audio/fc_car.wav', 'path': 'audio/fc_car.wav'},
    {'name': 'audio/ctrl_dam.wav', 'path': 'audio/ctrl_dam.wav'},
    {'name': 'audio/fc_eye.wav', 'path': 'audio/fc_eye.wav'},
    {'name': 'audio/ctrl_kayak.wav', 'path': 'audio/ctrl_kayak.wav'},
    {'name': 'audio/fc_lamb.wav', 'path': 'audio/fc_lamb.wav'},
    {'name': 'audio/ctrl_harp.wav', 'path': 'audio/ctrl_harp.wav'},
    {'name': 'audio/fc_apartment.wav', 'path': 'audio/fc_apartment.wav'},
    {'name': 'audio/ctrl_college.wav', 'path': 'audio/ctrl_college.wav'},
    {'name': 'audio/fc_laugh.wav', 'path': 'audio/fc_laugh.wav'},
    {'name': 'audio/ctrl_mama.wav', 'path': 'audio/ctrl_mama.wav'},
    {'name': 'audio/fc_hay.wav', 'path': 'audio/fc_hay.wav'},
    {'name': 'lextale.csv', 'path': 'lextale.csv'},
    {'name': 'translation.csv', 'path': 'translation.csv'},
    {'name': 'demographics.xlsx', 'path': 'demographics.xlsx'},
    {'name': 'audio/sound_check.wav', 'path': 'audio/sound_check.wav'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'leapq_general.xlsx', 'path': 'leapq_general.xlsx'},
    {'name': 'leapq_english.xlsx', 'path': 'leapq_english.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + ((((("data/" + expInfo["participant"]) + "_") + expName) + "_") + expInfo["date"]));
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcome_title;
var welcome_cont;
var key_welcome;
var consentClock;
var consent_text;
var btn_consent;
var demographicsClock;
var demo_form;
var btn_demo;
var audio_checkClock;
var check_text;
var snd_check;
var btn_again;
var btn_continue;
var instructionsClock;
var instr_text;
var key_instr;
var trialClock;
var fixation;
var my_list;
var offset;
var even_lab;
var odd_lab;
var labels;
var idx;
var order;
var img_target;
var img_d1;
var img_d2;
var img_d3;
var snd;
var mouse;
var practice_endClock;
var end_prac_text;
var key_prac_end;
var main_endClock;
var main_end_text;
var lex_instrClock;
var lex_instr_text;
var key_lex_instr;
var lex_trialClock;
var lex_word;
var btn_yes;
var btn_no;
var lex_word_corr;
var lex_nonword_corr;
var tr_instrClock;
var tr_instr_text;
var key_tr_inst5;
var tr_trialClock;
var tr_word;
var tr_box;
var btn_next;
var btn_idk;
var leapq_genClock;
var leapq_gen_form;
var btn_leapq_gen;
var leapq_enClock;
var leapq_en_form;
var btn_leapq_en;
var debriefClock;
var debrief_text;
var code_text;
var debrief_end;
var key_debrief;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcome_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_title',
    text: 'Spoken Sentence Comprehension in English as a Second Language\n\nResearcher: Mert ÇETİNOK , PhD Student\nYıldız Technical University, Department of English Language Teaching',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: 0.035,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: 0.0 
  });
  
  welcome_cont = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_cont',
    text: 'Thank you for your interest in this study. The session takes about 45 minutes. Please complete it in one sitting, in a quiet place, using headphones.\n\nPress the SPACE bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.15)], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -1.0 
  });
  
  key_welcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  consent_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent_text',
    text: 'Bilgilendirilmiş Onam\n\nBu çalışmaya katılım tamamen gönüllüdür. İstediğiniz an, hiçbir gerekçe göstermeden tarayıcı penceresini kapatarak çalışmayı bırakabilirsiniz.\n\nAşağıdaki düğmeye tıklayarak bu araştırmaya gönüllü olarak katılmayı kabul ettiğimi beyan ederim.\n\nKatılmak istemiyorsanız bu pencereyi kapatabilirsiniz.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.032,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: 0.0 
  });
  
  btn_consent = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_consent',
    text: 'Kabul ediyorum',
    font: 'Arvo',
    pos: [0, (- 0.25)],
    size: [0.35, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgreen',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  btn_consent.clock = new util.Clock();
  
  // Initialize components for Routine "demographics"
  demographicsClock = new util.Clock();
  demo_form = new visual.Form({
    win : psychoJS.window, name:'demo_form',
    items : 'demographics.xlsx',
    textHeight : 0.025,
    font : 'Noto Sans',
    randomize : false,
    size : [1.2, 0.7],
    pos : [0, 0.08],
    style : 'light',
    itemPadding : 0.05,
    depth : 0
  });
  btn_demo = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_demo',
    text: 'Continue',
    font: 'Arvo',
    pos: [0, (- 0.38)],
    size: [0.25, 0.07],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgreen',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  btn_demo.clock = new util.Clock();
  
  // Initialize components for Routine "audio_check"
  audio_checkClock = new util.Clock();
  check_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'check_text',
    text: 'Audio Check\n\nPlease put on your headphones now.\n\nYou will hear an English sentence. Please adjust the volume of your computer to a comfortable level.\n\nIf you could not hear the sentence clearly, click PLAY AGAIN. When the sound is clear and comfortable, click CONTINUE.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.12], draggable: false, height: 0.032,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  snd_check = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  snd_check.setVolume(1.0);
  snd_check.isPlaying = false;
  snd_check.isFinished = false;
  btn_again = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_again',
    text: 'Play again',
    font: 'Arvo',
    pos: [(- 0.2), (- 0.25)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'grey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  btn_again.clock = new util.Clock();
  
  btn_continue = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_continue',
    text: 'Continue',
    font: 'Arvo',
    pos: [0.2, (- 0.25)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgreen',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  btn_continue.clock = new util.Clock();
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: 'Sentence–Picture Matching Task\n\nIn this task, you will see four pictures on the screen. After a few seconds, you will hear an English sentence that stops before its last word.\n\nYour task is to click on the picture that best completes the sentence.\n\nYou can click only after the sentence has ended. Please respond as quickly and as accurately as you can.\n\nEach trial begins with a cross (+) in the centre of the screen. Please look at the cross when it appears.\n\nYou will first complete 4 practice trials.\n\nPress the SPACE bar to start the practice.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from pos_code
  if (Math.random() < 0.5) {
      my_list = "A";
      offset = 0;
      even_lab = "FC";
      odd_lab = "CTRL";
  } else {
      my_list = "B";
      offset = 72;
      even_lab = "CTRL";
      odd_lab = "FC";
  }
  
  labels = [];
  for (let i = 0; i < 24; i++) { labels.push("TC"); }
  for (let i = 0; i < 24; i++) { labels.push("NC"); }
  for (let i = 0; i < 12; i++) { labels.push(even_lab); labels.push(odd_lab); }
  
  idx = [];
  for (let i = 0; i < 72; i++) { idx.push(i); }
  
  for (let attempt = 0; attempt < 1000; attempt++) {
      util.shuffle(idx);
      ok = true;
      streak = 1;
      for (let j = 1; j < 72; j++) {
          if (labels[idx[j]] === labels[idx[j - 1]]) {
              streak = streak + 1;
          } else {
              streak = 1;
          }
          if (streak > 3) { ok = false; }
      }
      if (ok) { break; }
  }
  
  order = [];
  for (let j = 0; j < 72; j++) { order.push(idx[j] + offset); }
  img_target = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_target', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  img_d1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_d1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  img_d2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_d2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  img_d3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_d3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  snd = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  snd.setVolume(1.0);
  snd.isPlaying = false;
  snd.isFinished = false;
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "practice_end"
  practice_endClock = new util.Clock();
  end_prac_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_prac_text',
    text: 'The practice is over.\n\nThe main task will now begin. It is the same as the practice and takes about 10 minutes.\n\nRemember: click on the picture that best completes the sentence, as quickly and as accurately as you can.\n\nPress the SPACE bar to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: 0.0 
  });
  
  key_prac_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "main_end"
  main_endClock = new util.Clock();
  main_end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'main_end_text',
    text: 'You have completed this part of the study. Thank you!\n\nThe next part will begin in a few seconds.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "lex_instr"
  lex_instrClock = new util.Clock();
  lex_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'lex_instr_text',
    text: 'Part 5: Vocabulary Test\n\nYou will now see a series of letter strings, one at a time. For each one, decide whether it is an existing English word or not.\n\nClick YES if you think it is an existing English word. Click NO if you think it is not.\n\nIf you are sure that the word exists, even if you do not know its exact meaning, you may click YES. If you are not sure whether it is a real word, click NO.\n\nBritish English spelling is used (for example, colour instead of color). There is no time limit. This part takes about 5 minutes.\n\nPress the SPACE bar to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_lex_instr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "lex_trial"
  lex_trialClock = new util.Clock();
  lex_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'lex_word',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  btn_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_yes',
    text: 'YES',
    font: 'Arvo',
    pos: [(- 0.2), (- 0.2)],
    size: [0.25, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgreen',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.035,
    bold: true,
    italic: false,
  });
  btn_yes.clock = new util.Clock();
  
  btn_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_no',
    text: 'NO',
    font: 'Arvo',
    pos: [0.2, (- 0.2)],
    size: [0.25, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkred',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.035,
    bold: true,
    italic: false,
  });
  btn_no.clock = new util.Clock();
  
  // Run 'Begin Experiment' code from lex_code
  lex_word_corr = 0;
  lex_nonword_corr = 0;
  
  // Initialize components for Routine "tr_instr"
  tr_instrClock = new util.Clock();
  tr_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'tr_instr_text',
    text: 'Part 6: Translation Task\n\nYou will now see English words, one at a time. Type the Turkish meaning of each word in the box and click NEXT.\n\nIf you do not know the meaning of the word, click I DO NOT KNOW. Please do not guess.\n\nThere is no time limit. This part takes about 10 minutes.\n\nPress the SPACE bar to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.032,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_tr_inst5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "tr_trial"
  tr_trialClock = new util.Clock();
  tr_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'tr_word',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  tr_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'tr_box',
    text: 'Text can be **bold**, *italic*, ***bold italic*** or [color=red]colorful[/color]. To use a regular asterisk, remember to \\*escape\\* it.\n\nLine breaks are allowed!',
    placeholder: 'Type the Turkish meaning here',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.6, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    formattingSyntax: 'md',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  btn_next = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_next',
    text: 'NEXT',
    font: 'Arvo',
    pos: [0.22, (- 0.2)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgreen',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  btn_next.clock = new util.Clock();
  
  btn_idk = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_idk',
    text: 'I DO NOT KNOW',
    font: 'Arvo',
    pos: [(- 0.22), (- 0.2)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'grey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  btn_idk.clock = new util.Clock();
  
  // Initialize components for Routine "leapq_gen"
  leapq_genClock = new util.Clock();
  leapq_gen_form = new visual.Form({
    win : psychoJS.window, name:'leapq_gen_form',
    items : 'leapq_general.xlsx',
    textHeight : 0.022,
    font : 'Noto Sans',
    randomize : false,
    size : [1.3, 0.8],
    pos : [0, 0.05],
    style : 'light',
    itemPadding : 0.05,
    depth : 0
  });
  btn_leapq_gen = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_leapq_gen',
    text: 'Devam',
    font: 'Arvo',
    pos: [0, (- 0.44)],
    size: [0.25, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgreen',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  btn_leapq_gen.clock = new util.Clock();
  
  // Initialize components for Routine "leapq_en"
  leapq_enClock = new util.Clock();
  leapq_en_form = new visual.Form({
    win : psychoJS.window, name:'leapq_en_form',
    items : 'leapq_english.xlsx',
    textHeight : 0.022,
    font : 'Noto Sans',
    randomize : false,
    size : [1.3, 0.8],
    pos : [0, 0.05],
    style : 'light',
    itemPadding : 0.05,
    depth : 0
  });
  btn_leapq_en = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_leapq_en',
    text: 'Devam',
    font: 'Arvo',
    pos: [0, (- 0.44)],
    size: [0.25, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgreen',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  btn_leapq_en.clock = new util.Clock();
  
  // Initialize components for Routine "debrief"
  debriefClock = new util.Clock();
  debrief_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'debrief_text',
    text: 'Katılımınız için çok teşekkür ederiz!\n\nBu çalışmanın amacı, İngilizce cümleleri dinlerken Türkçe kelimelere ses bakımından benzeyen İngilizce kelimelerin, cümlenin devamını tahmin etmeyi nasıl etkilediğini incelemektir. Kelimelerin bir kısmı Türkçe karşılığıyla hem sesçe hem anlamca benzerdi (örneğin taxi – taksi). Bir kısmı ise sesçe benzediği hâlde farklı bir anlama geliyordu (örneğin İngilizce pasta = makarna, Türkçe pasta = cake). Yanıtlarınızı etkilememesi için bu amacı çalışmanın başında ayrıntılı olarak açıklamadık.\n\n\nSorularınız için: Mert ÇETİNOK – mertcetinokk@gmail.com',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.028,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  code_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'code_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.032,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  debrief_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'debrief_end',
    text: 'Çalışmayı bitirmek için BOŞLUK tuşuna basın.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.42)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_debrief = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  psychoJS._saveResults = 0;
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var welcomeMaxDurationReached;
var _key_welcome_allKeys;
var welcomeMaxDuration;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcomeClock.reset();
    routineTimer.reset();
    welcomeMaxDurationReached = false;
    // update component parameters for each repeat
    key_welcome.keys = undefined;
    key_welcome.rt = undefined;
    _key_welcome_allKeys = [];
    psychoJS.experiment.addData('welcome.started', globalClock.getTime());
    welcomeMaxDuration = null
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcome_title);
    welcomeComponents.push(welcome_cont);
    welcomeComponents.push(key_welcome);
    
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_title* updates
    if (t >= 0 && welcome_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_title.tStart = t;  // (not accounting for frame time here)
      welcome_title.frameNStart = frameN;  // exact frame index
      
      welcome_title.setAutoDraw(true);
    }
    
    
    // if welcome_title is active this frame...
    if (welcome_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *welcome_cont* updates
    if (t >= 0 && welcome_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_cont.tStart = t;  // (not accounting for frame time here)
      welcome_cont.frameNStart = frameN;  // exact frame index
      
      welcome_cont.setAutoDraw(true);
    }
    
    
    // if welcome_cont is active this frame...
    if (welcome_cont.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_welcome* updates
    if (t >= 0.5 && key_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_welcome.tStart = t;  // (not accounting for frame time here)
      key_welcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_welcome.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_welcome.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_welcome.clearEvents(); });
    }
    
    // if key_welcome is active this frame...
    if (key_welcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_welcome.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_welcome_allKeys = _key_welcome_allKeys.concat(theseKeys);
      if (_key_welcome_allKeys.length > 0) {
        key_welcome.keys = _key_welcome_allKeys[_key_welcome_allKeys.length - 1].name;  // just the last key pressed
        key_welcome.rt = _key_welcome_allKeys[_key_welcome_allKeys.length - 1].rt;
        key_welcome.duration = _key_welcome_allKeys[_key_welcome_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    welcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcome.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_welcome.corr, level);
    }
    psychoJS.experiment.addData('key_welcome.keys', key_welcome.keys);
    if (typeof key_welcome.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_welcome.rt', key_welcome.rt);
        psychoJS.experiment.addData('key_welcome.duration', key_welcome.duration);
        routineTimer.reset();
        }
    
    key_welcome.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consentMaxDurationReached;
var consentMaxDuration;
var consentComponents;
function consentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    consentClock.reset();
    routineTimer.reset();
    consentMaxDurationReached = false;
    // update component parameters for each repeat
    // reset btn_consent to account for continued clicks & clear times on/off
    btn_consent.reset()
    psychoJS.experiment.addData('consent.started', globalClock.getTime());
    consentMaxDuration = null
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(consent_text);
    consentComponents.push(btn_consent);
    
    consentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function consentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent' ---
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_text* updates
    if (t >= 0 && consent_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_text.tStart = t;  // (not accounting for frame time here)
      consent_text.frameNStart = frameN;  // exact frame index
      
      consent_text.setAutoDraw(true);
    }
    
    
    // if consent_text is active this frame...
    if (consent_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_consent* updates
    if (t >= 1 && btn_consent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_consent.tStart = t;  // (not accounting for frame time here)
      btn_consent.frameNStart = frameN;  // exact frame index
      
      btn_consent.setAutoDraw(true);
    }
    
    
    // if btn_consent is active this frame...
    if (btn_consent.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_consent.status === PsychoJS.Status.STARTED) {
      // check whether btn_consent has been pressed
      if (btn_consent.isClicked) {
        if (!btn_consent.wasClicked) {
          // store time of first click
          btn_consent.timesOn.push(btn_consent.clock.getTime());
          // store time clicked until
          btn_consent.timesOff.push(btn_consent.clock.getTime());
        } else {
          // update time clicked until;
          btn_consent.timesOff[btn_consent.timesOff.length - 1] = btn_consent.clock.getTime();
        }
        if (!btn_consent.wasClicked) {
          // end routine when btn_consent is clicked
          continueRoutine = false;
          
        }
        // if btn_consent is still clicked next frame, it is not a new click
        btn_consent.wasClicked = true;
      } else {
        // if btn_consent is clicked next frame, it is a new click
        btn_consent.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_consent hasn't started / has finished
      btn_consent.clock.reset();
      // if btn_consent is clicked next frame, it is a new click
      btn_consent.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent' ---
    consentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('consent.stopped', globalClock.getTime());
    psychoJS.experiment.addData('btn_consent.numClicks', btn_consent.numClicks);
    psychoJS.experiment.addData('btn_consent.timesOn', btn_consent.timesOn);
    psychoJS.experiment.addData('btn_consent.timesOff', btn_consent.timesOff);
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demographicsMaxDurationReached;
var demographicsMaxDuration;
var demographicsComponents;
function demographicsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demographics' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    demographicsClock.reset();
    routineTimer.reset();
    demographicsMaxDurationReached = false;
    // update component parameters for each repeat
    // reset btn_demo to account for continued clicks & clear times on/off
    btn_demo.reset()
    psychoJS.experiment.addData('demographics.started', globalClock.getTime());
    demographicsMaxDuration = null
    // keep track of which components have finished
    demographicsComponents = [];
    demographicsComponents.push(demo_form);
    demographicsComponents.push(btn_demo);
    
    demographicsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function demographicsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demographics' ---
    // get current time
    t = demographicsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *demo_form* updates
    if (t >= 0.0 && demo_form.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_form.tStart = t;  // (not accounting for frame time here)
      demo_form.frameNStart = frameN;  // exact frame index
      
      demo_form.setAutoDraw(true);
    }
    
    
    // if demo_form is active this frame...
    if (demo_form.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_demo* updates
    if ((demo_form.formComplete()) && btn_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_demo.tStart = t;  // (not accounting for frame time here)
      btn_demo.frameNStart = frameN;  // exact frame index
      
      btn_demo.setAutoDraw(true);
    }
    
    
    // if btn_demo is active this frame...
    if (btn_demo.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_demo.status === PsychoJS.Status.STARTED) {
      // check whether btn_demo has been pressed
      if (btn_demo.isClicked) {
        if (!btn_demo.wasClicked) {
          // store time of first click
          btn_demo.timesOn.push(btn_demo.clock.getTime());
          // store time clicked until
          btn_demo.timesOff.push(btn_demo.clock.getTime());
        } else {
          // update time clicked until;
          btn_demo.timesOff[btn_demo.timesOff.length - 1] = btn_demo.clock.getTime();
        }
        if (!btn_demo.wasClicked) {
          // end routine when btn_demo is clicked
          continueRoutine = false;
          
        }
        // if btn_demo is still clicked next frame, it is not a new click
        btn_demo.wasClicked = true;
      } else {
        // if btn_demo is clicked next frame, it is a new click
        btn_demo.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_demo hasn't started / has finished
      btn_demo.clock.reset();
      // if btn_demo is clicked next frame, it is a new click
      btn_demo.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    demographicsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demographicsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demographics' ---
    demographicsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('demographics.stopped', globalClock.getTime());
    demo_form.addDataToExp(psychoJS.experiment, 'rows');
    psychoJS.experiment.addData('btn_demo.numClicks', btn_demo.numClicks);
    psychoJS.experiment.addData('btn_demo.timesOn', btn_demo.timesOn);
    psychoJS.experiment.addData('btn_demo.timesOff', btn_demo.timesOff);
    // the Routine "demographics" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var audio_loop;
function audio_loopLoopBegin(audio_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    audio_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 50, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'audio_loop'
    });
    psychoJS.experiment.addLoop(audio_loop); // add the loop to the experiment
    currentLoop = audio_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    audio_loop.forEach(function() {
      snapshot = audio_loop.getSnapshot();
    
      audio_loopLoopScheduler.add(importConditions(snapshot));
      audio_loopLoopScheduler.add(audio_checkRoutineBegin(snapshot));
      audio_loopLoopScheduler.add(audio_checkRoutineEachFrame());
      audio_loopLoopScheduler.add(audio_checkRoutineEnd(snapshot));
      audio_loopLoopScheduler.add(audio_loopLoopEndIteration(audio_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function audio_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(audio_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function audio_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var practice_loop;
function practice_loopLoopBegin(practice_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice.csv',
      seed: undefined, name: 'practice_loop'
    });
    psychoJS.experiment.addLoop(practice_loop); // add the loop to the experiment
    currentLoop = practice_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_loop.forEach(function() {
      snapshot = practice_loop.getSnapshot();
    
      practice_loopLoopScheduler.add(importConditions(snapshot));
      practice_loopLoopScheduler.add(trialRoutineBegin(snapshot));
      practice_loopLoopScheduler.add(trialRoutineEachFrame());
      practice_loopLoopScheduler.add(trialRoutineEnd(snapshot));
      practice_loopLoopScheduler.add(practice_loopLoopEndIteration(practice_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var main_loop;
function main_loopLoopBegin(main_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    main_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'main.csv', order),
      seed: undefined, name: 'main_loop'
    });
    psychoJS.experiment.addLoop(main_loop); // add the loop to the experiment
    currentLoop = main_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    main_loop.forEach(function() {
      snapshot = main_loop.getSnapshot();
    
      main_loopLoopScheduler.add(importConditions(snapshot));
      main_loopLoopScheduler.add(trialRoutineBegin(snapshot));
      main_loopLoopScheduler.add(trialRoutineEachFrame());
      main_loopLoopScheduler.add(trialRoutineEnd(snapshot));
      main_loopLoopScheduler.add(main_loopLoopEndIteration(main_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function main_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(main_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function main_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var lex_loop;
function lex_loopLoopBegin(lex_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    lex_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'lextale.csv',
      seed: undefined, name: 'lex_loop'
    });
    psychoJS.experiment.addLoop(lex_loop); // add the loop to the experiment
    currentLoop = lex_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    lex_loop.forEach(function() {
      snapshot = lex_loop.getSnapshot();
    
      lex_loopLoopScheduler.add(importConditions(snapshot));
      lex_loopLoopScheduler.add(lex_trialRoutineBegin(snapshot));
      lex_loopLoopScheduler.add(lex_trialRoutineEachFrame());
      lex_loopLoopScheduler.add(lex_trialRoutineEnd(snapshot));
      lex_loopLoopScheduler.add(lex_loopLoopEndIteration(lex_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function lex_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(lex_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function lex_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var tr_loop;
function tr_loopLoopBegin(tr_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    tr_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'translation.csv',
      seed: undefined, name: 'tr_loop'
    });
    psychoJS.experiment.addLoop(tr_loop); // add the loop to the experiment
    currentLoop = tr_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    tr_loop.forEach(function() {
      snapshot = tr_loop.getSnapshot();
    
      tr_loopLoopScheduler.add(importConditions(snapshot));
      tr_loopLoopScheduler.add(tr_trialRoutineBegin(snapshot));
      tr_loopLoopScheduler.add(tr_trialRoutineEachFrame());
      tr_loopLoopScheduler.add(tr_trialRoutineEnd(snapshot));
      tr_loopLoopScheduler.add(tr_loopLoopEndIteration(tr_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function tr_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(tr_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function tr_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var audio_checkMaxDurationReached;
var audio_checkMaxDuration;
var audio_checkComponents;
function audio_checkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'audio_check' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    audio_checkClock.reset();
    routineTimer.reset();
    audio_checkMaxDurationReached = false;
    // update component parameters for each repeat
    snd_check.isFinished = false;
    snd_check.setValue('audio/sound_check.wav');
    snd_check.setVolume(1.0);
    // reset btn_again to account for continued clicks & clear times on/off
    btn_again.reset()
    // reset btn_continue to account for continued clicks & clear times on/off
    btn_continue.reset()
    psychoJS.experiment.addData('audio_check.started', globalClock.getTime());
    audio_checkMaxDuration = null
    // keep track of which components have finished
    audio_checkComponents = [];
    audio_checkComponents.push(check_text);
    audio_checkComponents.push(snd_check);
    audio_checkComponents.push(btn_again);
    audio_checkComponents.push(btn_continue);
    
    audio_checkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function audio_checkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'audio_check' ---
    // get current time
    t = audio_checkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *check_text* updates
    if (t >= 0 && check_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      check_text.tStart = t;  // (not accounting for frame time here)
      check_text.frameNStart = frameN;  // exact frame index
      
      check_text.setAutoDraw(true);
    }
    
    
    // if check_text is active this frame...
    if (check_text.status === PsychoJS.Status.STARTED) {
    }
    
    if (snd_check.status === STARTED) {
        snd_check.isPlaying = true;
        if (t >= (snd_check.getDuration() + snd_check.tStart)) {
            snd_check.isFinished = true;
        }
    }
    // start/stop snd_check
    if (t >= 0.5 && snd_check.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      snd_check.tStart = t;  // (not accounting for frame time here)
      snd_check.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ snd_check.play(); });  // screen flip
      snd_check.status = PsychoJS.Status.STARTED;
    }
    if (snd_check.status === PsychoJS.Status.STARTED && Boolean(false) || snd_check.isFinished) {
      // keep track of stop time/frame for later
      snd_check.tStop = t;  // not accounting for scr refresh
      snd_check.frameNStop = frameN;  // exact frame index
      // update status
      snd_check.status = PsychoJS.Status.FINISHED;
      // stop playback
      snd_check.stop();
    }
    
    // *btn_again* updates
    if (t >= 4.5 && btn_again.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_again.tStart = t;  // (not accounting for frame time here)
      btn_again.frameNStart = frameN;  // exact frame index
      
      btn_again.setAutoDraw(true);
    }
    
    
    // if btn_again is active this frame...
    if (btn_again.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_again.status === PsychoJS.Status.STARTED) {
      // check whether btn_again has been pressed
      if (btn_again.isClicked) {
        if (!btn_again.wasClicked) {
          // store time of first click
          btn_again.timesOn.push(btn_again.clock.getTime());
          // store time clicked until
          btn_again.timesOff.push(btn_again.clock.getTime());
        } else {
          // update time clicked until;
          btn_again.timesOff[btn_again.timesOff.length - 1] = btn_again.clock.getTime();
        }
        if (!btn_again.wasClicked) {
          // end routine when btn_again is clicked
          continueRoutine = false;
          
        }
        // if btn_again is still clicked next frame, it is not a new click
        btn_again.wasClicked = true;
      } else {
        // if btn_again is clicked next frame, it is a new click
        btn_again.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_again hasn't started / has finished
      btn_again.clock.reset();
      // if btn_again is clicked next frame, it is a new click
      btn_again.wasClicked = false;
    }
    
    // *btn_continue* updates
    if (t >= 4.5 && btn_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_continue.tStart = t;  // (not accounting for frame time here)
      btn_continue.frameNStart = frameN;  // exact frame index
      
      btn_continue.setAutoDraw(true);
    }
    
    
    // if btn_continue is active this frame...
    if (btn_continue.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_continue.status === PsychoJS.Status.STARTED) {
      // check whether btn_continue has been pressed
      if (btn_continue.isClicked) {
        if (!btn_continue.wasClicked) {
          // store time of first click
          btn_continue.timesOn.push(btn_continue.clock.getTime());
          // store time clicked until
          btn_continue.timesOff.push(btn_continue.clock.getTime());
        } else {
          // update time clicked until;
          btn_continue.timesOff[btn_continue.timesOff.length - 1] = btn_continue.clock.getTime();
        }
        if (!btn_continue.wasClicked) {
          // end routine when btn_continue is clicked
          continueRoutine = false;
          
        }
        // if btn_continue is still clicked next frame, it is not a new click
        btn_continue.wasClicked = true;
      } else {
        // if btn_continue is clicked next frame, it is a new click
        btn_continue.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_continue hasn't started / has finished
      btn_continue.clock.reset();
      // if btn_continue is clicked next frame, it is a new click
      btn_continue.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    audio_checkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function audio_checkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'audio_check' ---
    audio_checkComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('audio_check.stopped', globalClock.getTime());
    snd_check.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('btn_again.numClicks', btn_again.numClicks);
    psychoJS.experiment.addData('btn_again.timesOn', btn_again.timesOn);
    psychoJS.experiment.addData('btn_again.timesOff', btn_again.timesOff);
    psychoJS.experiment.addData('btn_continue.numClicks', btn_continue.numClicks);
    psychoJS.experiment.addData('btn_continue.timesOn', btn_continue.timesOn);
    psychoJS.experiment.addData('btn_continue.timesOff', btn_continue.timesOff);
    // Run 'End Routine' code from check_code
    if ((btn_continue.numClicks > 0)) {
        audio_loop.finished = true;
    }
    
    // the Routine "audio_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructionsMaxDurationReached;
var _key_instr_allKeys;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    key_instr.keys = undefined;
    key_instr.rt = undefined;
    _key_instr_allKeys = [];
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instr_text);
    instructionsComponents.push(key_instr);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }
    
    
    // if instr_text is active this frame...
    if (instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_instr* updates
    if (t >= 0.5 && key_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instr.tStart = t;  // (not accounting for frame time here)
      key_instr.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instr.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instr.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instr.clearEvents(); });
    }
    
    // if key_instr is active this frame...
    if (key_instr.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instr.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_instr_allKeys = _key_instr_allKeys.concat(theseKeys);
      if (_key_instr_allKeys.length > 0) {
        key_instr.keys = _key_instr_allKeys[_key_instr_allKeys.length - 1].name;  // just the last key pressed
        key_instr.rt = _key_instr_allKeys[_key_instr_allKeys.length - 1].rt;
        key_instr.duration = _key_instr_allKeys[_key_instr_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instr.corr, level);
    }
    psychoJS.experiment.addData('key_instr.keys', key_instr.keys);
    if (typeof key_instr.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instr.rt', key_instr.rt);
        psychoJS.experiment.addData('key_instr.duration', key_instr.duration);
        routineTimer.reset();
        }
    
    key_instr.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialMaxDurationReached;
var positions;
var pos_target;
var pos_d1;
var pos_d2;
var pos_d3;
var gotValidClick;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from pos_code
    positions = [[(- 0.35), 0.22], [0.35, 0.22], [(- 0.35), (- 0.25)], [0.35, (- 0.25)]];
    util.shuffle(positions);
    pos_target = positions[0];
    pos_d1 = positions[1];
    pos_d2 = positions[2];
    pos_d3 = positions[3];
    psychoJS.experiment.addData("target_pos", pos_target);
    
    img_target.setPos(pos_target);
    img_target.setImage(target);
    img_d1.setPos(pos_d1);
    img_d1.setImage(d1);
    img_d2.setPos(pos_d2);
    img_d2.setImage(d2);
    img_d3.setPos(pos_d3);
    img_d3.setImage(d3);
    snd.isFinished = false;
    snd.setValue(audio);
    snd.setVolume(1.0);
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fixation);
    trialComponents.push(img_target);
    trialComponents.push(img_d1);
    trialComponents.push(img_d2);
    trialComponents.push(img_d3);
    trialComponents.push(snd);
    trialComponents.push(mouse);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 1.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    
    // if fixation is active this frame...
    if (fixation.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation.tStop = t;  // not accounting for scr refresh
      fixation.frameNStop = frameN;  // exact frame index
      // update status
      fixation.status = PsychoJS.Status.FINISHED;
      fixation.setAutoDraw(false);
    }
    
    // Run 'Each Frame' code from pos_code
    if ((t > ((4.5 + audio_dur) + 5))) {
        continueRoutine = false;
    }
    
    
    // *img_target* updates
    if (t >= 1.5 && img_target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_target.tStart = t;  // (not accounting for frame time here)
      img_target.frameNStart = frameN;  // exact frame index
      
      img_target.setAutoDraw(true);
    }
    
    
    // if img_target is active this frame...
    if (img_target.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *img_d1* updates
    if (t >= 1.5 && img_d1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_d1.tStart = t;  // (not accounting for frame time here)
      img_d1.frameNStart = frameN;  // exact frame index
      
      img_d1.setAutoDraw(true);
    }
    
    
    // if img_d1 is active this frame...
    if (img_d1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *img_d2* updates
    if (t >= 1.5 && img_d2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_d2.tStart = t;  // (not accounting for frame time here)
      img_d2.frameNStart = frameN;  // exact frame index
      
      img_d2.setAutoDraw(true);
    }
    
    
    // if img_d2 is active this frame...
    if (img_d2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *img_d3* updates
    if (t >= 1.5 && img_d3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_d3.tStart = t;  // (not accounting for frame time here)
      img_d3.frameNStart = frameN;  // exact frame index
      
      img_d3.setAutoDraw(true);
    }
    
    
    // if img_d3 is active this frame...
    if (img_d3.status === PsychoJS.Status.STARTED) {
    }
    
    if (snd.status === STARTED) {
        snd.isPlaying = true;
        if (t >= (snd.getDuration() + snd.tStart)) {
            snd.isFinished = true;
        }
    }
    // start/stop snd
    if (t >= 4.5 && snd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      snd.tStart = t;  // (not accounting for frame time here)
      snd.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ snd.play(); });  // screen flip
      snd.status = PsychoJS.Status.STARTED;
    }
    if (snd.status === PsychoJS.Status.STARTED && Boolean(false) || snd.isFinished) {
      // keep track of stop time/frame for later
      snd.tStop = t;  // not accounting for scr refresh
      snd.frameNStop = frameN;  // exact frame index
      // update status
      snd.status = PsychoJS.Status.FINISHED;
      // stop playback
      snd.stop();
    }
    // *mouse* updates
    if (t >= (4.5 + audio_dur) && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    frameRemains = (4.5 + audio_dur) + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (mouse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      mouse.tStop = t;  // not accounting for scr refresh
      mouse.frameNStop = frameN;  // exact frame index
      // update status
      mouse.status = PsychoJS.Status.FINISHED;
      mouse.status = PsychoJS.Status.FINISHED;
    }
    
    // if mouse is active this frame...
    if (mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([img_target, img_d1, img_d2, img_d3])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse.clicked_name.push(null);
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var resp;
var corr;
function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // Run 'End Routine' code from pos_code
    if ((mouse.clicked_name.length > 0)) {
        resp = mouse.clicked_name.slice((- 1))[0];
    } else {
        resp = "timeout";
    }
    if ((resp === "img_target")) {
        corr = 1;
    } else {
        corr = 0;
    }
    psychoJS.experiment.addData("response", resp);
    psychoJS.experiment.addData("correct", corr);
    psychoJS.experiment.addData("list", my_list);
    
    snd.stop();  // ensure sound has stopped at end of Routine
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_endMaxDurationReached;
var _key_prac_end_allKeys;
var practice_endMaxDuration;
var practice_endComponents;
function practice_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_endClock.reset();
    routineTimer.reset();
    practice_endMaxDurationReached = false;
    // update component parameters for each repeat
    key_prac_end.keys = undefined;
    key_prac_end.rt = undefined;
    _key_prac_end_allKeys = [];
    psychoJS.experiment.addData('practice_end.started', globalClock.getTime());
    practice_endMaxDuration = null
    // keep track of which components have finished
    practice_endComponents = [];
    practice_endComponents.push(end_prac_text);
    practice_endComponents.push(key_prac_end);
    
    practice_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_end' ---
    // get current time
    t = practice_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_prac_text* updates
    if (t >= 0 && end_prac_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_prac_text.tStart = t;  // (not accounting for frame time here)
      end_prac_text.frameNStart = frameN;  // exact frame index
      
      end_prac_text.setAutoDraw(true);
    }
    
    
    // if end_prac_text is active this frame...
    if (end_prac_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_prac_end* updates
    if (t >= 0.5 && key_prac_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_prac_end.tStart = t;  // (not accounting for frame time here)
      key_prac_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_prac_end.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_prac_end.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_prac_end.clearEvents(); });
    }
    
    // if key_prac_end is active this frame...
    if (key_prac_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_prac_end.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_prac_end_allKeys = _key_prac_end_allKeys.concat(theseKeys);
      if (_key_prac_end_allKeys.length > 0) {
        key_prac_end.keys = _key_prac_end_allKeys[_key_prac_end_allKeys.length - 1].name;  // just the last key pressed
        key_prac_end.rt = _key_prac_end_allKeys[_key_prac_end_allKeys.length - 1].rt;
        key_prac_end.duration = _key_prac_end_allKeys[_key_prac_end_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practice_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_end' ---
    practice_endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('practice_end.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_prac_end.corr, level);
    }
    psychoJS.experiment.addData('key_prac_end.keys', key_prac_end.keys);
    if (typeof key_prac_end.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_prac_end.rt', key_prac_end.rt);
        psychoJS.experiment.addData('key_prac_end.duration', key_prac_end.duration);
        routineTimer.reset();
        }
    
    key_prac_end.stop();
    // the Routine "practice_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_endMaxDurationReached;
var main_endMaxDuration;
var main_endComponents;
function main_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_endClock.reset(routineTimer.getTime());
    routineTimer.add(4.000000);
    main_endMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('main_end.started', globalClock.getTime());
    main_endMaxDuration = null
    // keep track of which components have finished
    main_endComponents = [];
    main_endComponents.push(main_end_text);
    
    main_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function main_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_end' ---
    // get current time
    t = main_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *main_end_text* updates
    if (t >= 0 && main_end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_end_text.tStart = t;  // (not accounting for frame time here)
      main_end_text.frameNStart = frameN;  // exact frame index
      
      main_end_text.setAutoDraw(true);
    }
    
    
    // if main_end_text is active this frame...
    if (main_end_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (main_end_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      main_end_text.tStop = t;  // not accounting for scr refresh
      main_end_text.frameNStop = frameN;  // exact frame index
      // update status
      main_end_text.status = PsychoJS.Status.FINISHED;
      main_end_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    main_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_end' ---
    main_endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('main_end.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (main_endMaxDurationReached) {
        main_endClock.add(main_endMaxDuration);
    } else {
        main_endClock.add(4.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var lex_instrMaxDurationReached;
var _key_lex_instr_allKeys;
var lex_instrMaxDuration;
var lex_instrComponents;
function lex_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'lex_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    lex_instrClock.reset();
    routineTimer.reset();
    lex_instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_lex_instr.keys = undefined;
    key_lex_instr.rt = undefined;
    _key_lex_instr_allKeys = [];
    psychoJS.experiment.addData('lex_instr.started', globalClock.getTime());
    lex_instrMaxDuration = null
    // keep track of which components have finished
    lex_instrComponents = [];
    lex_instrComponents.push(lex_instr_text);
    lex_instrComponents.push(key_lex_instr);
    
    lex_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function lex_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'lex_instr' ---
    // get current time
    t = lex_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *lex_instr_text* updates
    if (t >= 0 && lex_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lex_instr_text.tStart = t;  // (not accounting for frame time here)
      lex_instr_text.frameNStart = frameN;  // exact frame index
      
      lex_instr_text.setAutoDraw(true);
    }
    
    
    // if lex_instr_text is active this frame...
    if (lex_instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (lex_instr_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      lex_instr_text.tStop = t;  // not accounting for scr refresh
      lex_instr_text.frameNStop = frameN;  // exact frame index
      // update status
      lex_instr_text.status = PsychoJS.Status.FINISHED;
      lex_instr_text.setAutoDraw(false);
    }
    
    
    // *key_lex_instr* updates
    if (t >= 0.5 && key_lex_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_lex_instr.tStart = t;  // (not accounting for frame time here)
      key_lex_instr.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_lex_instr.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_lex_instr.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_lex_instr.clearEvents(); });
    }
    
    // if key_lex_instr is active this frame...
    if (key_lex_instr.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_lex_instr.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_lex_instr_allKeys = _key_lex_instr_allKeys.concat(theseKeys);
      if (_key_lex_instr_allKeys.length > 0) {
        key_lex_instr.keys = _key_lex_instr_allKeys[_key_lex_instr_allKeys.length - 1].name;  // just the last key pressed
        key_lex_instr.rt = _key_lex_instr_allKeys[_key_lex_instr_allKeys.length - 1].rt;
        key_lex_instr.duration = _key_lex_instr_allKeys[_key_lex_instr_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    lex_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function lex_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'lex_instr' ---
    lex_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('lex_instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_lex_instr.corr, level);
    }
    psychoJS.experiment.addData('key_lex_instr.keys', key_lex_instr.keys);
    if (typeof key_lex_instr.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_lex_instr.rt', key_lex_instr.rt);
        psychoJS.experiment.addData('key_lex_instr.duration', key_lex_instr.duration);
        routineTimer.reset();
        }
    
    key_lex_instr.stop();
    // the Routine "lex_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var lex_trialMaxDurationReached;
var lex_trialMaxDuration;
var lex_trialComponents;
function lex_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'lex_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    lex_trialClock.reset();
    routineTimer.reset();
    lex_trialMaxDurationReached = false;
    // update component parameters for each repeat
    lex_word.setText(item);
    // reset btn_yes to account for continued clicks & clear times on/off
    btn_yes.reset()
    // reset btn_no to account for continued clicks & clear times on/off
    btn_no.reset()
    psychoJS.experiment.addData('lex_trial.started', globalClock.getTime());
    lex_trialMaxDuration = null
    // keep track of which components have finished
    lex_trialComponents = [];
    lex_trialComponents.push(lex_word);
    lex_trialComponents.push(btn_yes);
    lex_trialComponents.push(btn_no);
    
    lex_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function lex_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'lex_trial' ---
    // get current time
    t = lex_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *lex_word* updates
    if (t >= 0 && lex_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lex_word.tStart = t;  // (not accounting for frame time here)
      lex_word.frameNStart = frameN;  // exact frame index
      
      lex_word.setAutoDraw(true);
    }
    
    
    // if lex_word is active this frame...
    if (lex_word.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_yes* updates
    if (t >= 0.3 && btn_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_yes.tStart = t;  // (not accounting for frame time here)
      btn_yes.frameNStart = frameN;  // exact frame index
      
      btn_yes.setAutoDraw(true);
    }
    
    
    // if btn_yes is active this frame...
    if (btn_yes.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_yes.status === PsychoJS.Status.STARTED) {
      // check whether btn_yes has been pressed
      if (btn_yes.isClicked) {
        if (!btn_yes.wasClicked) {
          // store time of first click
          btn_yes.timesOn.push(btn_yes.clock.getTime());
          // store time clicked until
          btn_yes.timesOff.push(btn_yes.clock.getTime());
        } else {
          // update time clicked until;
          btn_yes.timesOff[btn_yes.timesOff.length - 1] = btn_yes.clock.getTime();
        }
        if (!btn_yes.wasClicked) {
          // end routine when btn_yes is clicked
          continueRoutine = false;
          
        }
        // if btn_yes is still clicked next frame, it is not a new click
        btn_yes.wasClicked = true;
      } else {
        // if btn_yes is clicked next frame, it is a new click
        btn_yes.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_yes hasn't started / has finished
      btn_yes.clock.reset();
      // if btn_yes is clicked next frame, it is a new click
      btn_yes.wasClicked = false;
    }
    
    // *btn_no* updates
    if (t >= 0.3 && btn_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_no.tStart = t;  // (not accounting for frame time here)
      btn_no.frameNStart = frameN;  // exact frame index
      
      btn_no.setAutoDraw(true);
    }
    
    
    // if btn_no is active this frame...
    if (btn_no.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_no.status === PsychoJS.Status.STARTED) {
      // check whether btn_no has been pressed
      if (btn_no.isClicked) {
        if (!btn_no.wasClicked) {
          // store time of first click
          btn_no.timesOn.push(btn_no.clock.getTime());
          // store time clicked until
          btn_no.timesOff.push(btn_no.clock.getTime());
        } else {
          // update time clicked until;
          btn_no.timesOff[btn_no.timesOff.length - 1] = btn_no.clock.getTime();
        }
        if (!btn_no.wasClicked) {
          // end routine when btn_no is clicked
          continueRoutine = false;
          
        }
        // if btn_no is still clicked next frame, it is not a new click
        btn_no.wasClicked = true;
      } else {
        // if btn_no is clicked next frame, it is a new click
        btn_no.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_no hasn't started / has finished
      btn_no.clock.reset();
      // if btn_no is clicked next frame, it is a new click
      btn_no.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    lex_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var lex_resp;
var lex_corr;
var lextale_score;
function lex_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'lex_trial' ---
    lex_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('lex_trial.stopped', globalClock.getTime());
    psychoJS.experiment.addData('btn_yes.numClicks', btn_yes.numClicks);
    psychoJS.experiment.addData('btn_yes.timesOn', btn_yes.timesOn);
    psychoJS.experiment.addData('btn_yes.timesOff', btn_yes.timesOff);
    psychoJS.experiment.addData('btn_no.numClicks', btn_no.numClicks);
    psychoJS.experiment.addData('btn_no.timesOn', btn_no.timesOn);
    psychoJS.experiment.addData('btn_no.timesOff', btn_no.timesOff);
    // Run 'End Routine' code from lex_code
    if ((btn_yes.numClicks > 0)) {
        lex_resp = 1;
    } else {
        lex_resp = 0;
    }
    if ((lex_resp === Number.parseInt(is_word))) {
        lex_corr = 1;
    } else {
        lex_corr = 0;
    }
    if (((Number.parseInt(dummy) === 0) && (lex_corr === 1))) {
        if ((Number.parseInt(is_word) === 1)) {
            lex_word_corr = (lex_word_corr + 1);
        } else {
            lex_nonword_corr = (lex_nonword_corr + 1);
        }
    }
    lextale_score = ((((lex_word_corr / 40) * 100) + ((lex_nonword_corr / 20) * 100)) / 2);
    psychoJS.experiment.addData("lex_resp", lex_resp);
    psychoJS.experiment.addData("lex_corr", lex_corr);
    psychoJS.experiment.addData("lextale_score", lextale_score);
    
    // the Routine "lex_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var tr_instrMaxDurationReached;
var _key_tr_inst5_allKeys;
var tr_instrMaxDuration;
var tr_instrComponents;
function tr_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'tr_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    tr_instrClock.reset();
    routineTimer.reset();
    tr_instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_tr_inst5.keys = undefined;
    key_tr_inst5.rt = undefined;
    _key_tr_inst5_allKeys = [];
    psychoJS.experiment.addData('tr_instr.started', globalClock.getTime());
    tr_instrMaxDuration = null
    // keep track of which components have finished
    tr_instrComponents = [];
    tr_instrComponents.push(tr_instr_text);
    tr_instrComponents.push(key_tr_inst5);
    
    tr_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function tr_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'tr_instr' ---
    // get current time
    t = tr_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *tr_instr_text* updates
    if (t >= 0 && tr_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tr_instr_text.tStart = t;  // (not accounting for frame time here)
      tr_instr_text.frameNStart = frameN;  // exact frame index
      
      tr_instr_text.setAutoDraw(true);
    }
    
    
    // if tr_instr_text is active this frame...
    if (tr_instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_tr_inst5* updates
    
    // if key_tr_inst5 is active this frame...
    if (key_tr_inst5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_tr_inst5.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_tr_inst5_allKeys = _key_tr_inst5_allKeys.concat(theseKeys);
      if (_key_tr_inst5_allKeys.length > 0) {
        key_tr_inst5.keys = _key_tr_inst5_allKeys[_key_tr_inst5_allKeys.length - 1].name;  // just the last key pressed
        key_tr_inst5.rt = _key_tr_inst5_allKeys[_key_tr_inst5_allKeys.length - 1].rt;
        key_tr_inst5.duration = _key_tr_inst5_allKeys[_key_tr_inst5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    tr_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tr_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'tr_instr' ---
    tr_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('tr_instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_tr_inst5.corr, level);
    }
    psychoJS.experiment.addData('key_tr_inst5.keys', key_tr_inst5.keys);
    if (typeof key_tr_inst5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_tr_inst5.rt', key_tr_inst5.rt);
        psychoJS.experiment.addData('key_tr_inst5.duration', key_tr_inst5.duration);
        routineTimer.reset();
        }
    
    key_tr_inst5.stop();
    // the Routine "tr_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var tr_trialMaxDurationReached;
var tr_trialMaxDuration;
var tr_trialComponents;
function tr_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'tr_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    tr_trialClock.reset();
    routineTimer.reset();
    tr_trialMaxDurationReached = false;
    // update component parameters for each repeat
    tr_word.setText(word);
    tr_box.setText('Text can be **bold**, *italic*, ***bold italic*** or [color=red]colorful[/color]. To use a regular asterisk, remember to \\*escape\\* it.\n\nLine breaks are allowed!');
    tr_box.refresh();
    // reset btn_next to account for continued clicks & clear times on/off
    btn_next.reset()
    // reset btn_idk to account for continued clicks & clear times on/off
    btn_idk.reset()
    psychoJS.experiment.addData('tr_trial.started', globalClock.getTime());
    tr_trialMaxDuration = null
    // keep track of which components have finished
    tr_trialComponents = [];
    tr_trialComponents.push(tr_word);
    tr_trialComponents.push(tr_box);
    tr_trialComponents.push(btn_next);
    tr_trialComponents.push(btn_idk);
    
    tr_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function tr_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'tr_trial' ---
    // get current time
    t = tr_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *tr_word* updates
    if (t >= 0 && tr_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tr_word.tStart = t;  // (not accounting for frame time here)
      tr_word.frameNStart = frameN;  // exact frame index
      
      tr_word.setAutoDraw(true);
    }
    
    
    // if tr_word is active this frame...
    if (tr_word.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *tr_box* updates
    if (t >= 0 && tr_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tr_box.tStart = t;  // (not accounting for frame time here)
      tr_box.frameNStart = frameN;  // exact frame index
      
      tr_box.setAutoDraw(true);
    }
    
    
    // if tr_box is active this frame...
    if (tr_box.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_next* updates
    if (((tr_box.text != '')) && btn_next.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_next.tStart = t;  // (not accounting for frame time here)
      btn_next.frameNStart = frameN;  // exact frame index
      
      btn_next.setAutoDraw(true);
    }
    
    
    // if btn_next is active this frame...
    if (btn_next.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_next.status === PsychoJS.Status.STARTED) {
      // check whether btn_next has been pressed
      if (btn_next.isClicked) {
        if (!btn_next.wasClicked) {
          // store time of first click
          btn_next.timesOn.push(btn_next.clock.getTime());
          // store time clicked until
          btn_next.timesOff.push(btn_next.clock.getTime());
        } else {
          // update time clicked until;
          btn_next.timesOff[btn_next.timesOff.length - 1] = btn_next.clock.getTime();
        }
        if (!btn_next.wasClicked) {
          // end routine when btn_next is clicked
          continueRoutine = false;
          
        }
        // if btn_next is still clicked next frame, it is not a new click
        btn_next.wasClicked = true;
      } else {
        // if btn_next is clicked next frame, it is a new click
        btn_next.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_next hasn't started / has finished
      btn_next.clock.reset();
      // if btn_next is clicked next frame, it is a new click
      btn_next.wasClicked = false;
    }
    
    // *btn_idk* updates
    if (t >= 0.5 && btn_idk.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_idk.tStart = t;  // (not accounting for frame time here)
      btn_idk.frameNStart = frameN;  // exact frame index
      
      btn_idk.setAutoDraw(true);
    }
    
    
    // if btn_idk is active this frame...
    if (btn_idk.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_idk.status === PsychoJS.Status.STARTED) {
      // check whether btn_idk has been pressed
      if (btn_idk.isClicked) {
        if (!btn_idk.wasClicked) {
          // store time of first click
          btn_idk.timesOn.push(btn_idk.clock.getTime());
          // store time clicked until
          btn_idk.timesOff.push(btn_idk.clock.getTime());
        } else {
          // update time clicked until;
          btn_idk.timesOff[btn_idk.timesOff.length - 1] = btn_idk.clock.getTime();
        }
        if (!btn_idk.wasClicked) {
          // end routine when btn_idk is clicked
          continueRoutine = false;
          
        }
        // if btn_idk is still clicked next frame, it is not a new click
        btn_idk.wasClicked = true;
      } else {
        // if btn_idk is clicked next frame, it is a new click
        btn_idk.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_idk hasn't started / has finished
      btn_idk.clock.reset();
      // if btn_idk is clicked next frame, it is a new click
      btn_idk.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    tr_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var tr_answer;
function tr_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'tr_trial' ---
    tr_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('tr_trial.stopped', globalClock.getTime());
    psychoJS.experiment.addData('tr_box.text',tr_box.text)
    psychoJS.experiment.addData('btn_next.numClicks', btn_next.numClicks);
    psychoJS.experiment.addData('btn_next.timesOn', btn_next.timesOn);
    psychoJS.experiment.addData('btn_next.timesOff', btn_next.timesOff);
    psychoJS.experiment.addData('btn_idk.numClicks', btn_idk.numClicks);
    psychoJS.experiment.addData('btn_idk.timesOn', btn_idk.timesOn);
    psychoJS.experiment.addData('btn_idk.timesOff', btn_idk.timesOff);
    // Run 'End Routine' code from tr_code
    if ((btn_idk.numClicks > 0)) {
        tr_answer = "IDK";
    } else {
        tr_answer = tr_box.text;
    }
    psychoJS.experiment.addData("tr_answer", tr_answer);
    
    // the Routine "tr_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var leapq_genMaxDurationReached;
var leapq_genMaxDuration;
var leapq_genComponents;
function leapq_genRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'leapq_gen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    leapq_genClock.reset();
    routineTimer.reset();
    leapq_genMaxDurationReached = false;
    // update component parameters for each repeat
    // reset btn_leapq_gen to account for continued clicks & clear times on/off
    btn_leapq_gen.reset()
    psychoJS.experiment.addData('leapq_gen.started', globalClock.getTime());
    leapq_genMaxDuration = null
    // keep track of which components have finished
    leapq_genComponents = [];
    leapq_genComponents.push(leapq_gen_form);
    leapq_genComponents.push(btn_leapq_gen);
    
    leapq_genComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function leapq_genRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'leapq_gen' ---
    // get current time
    t = leapq_genClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *leapq_gen_form* updates
    if (t >= 0.0 && leapq_gen_form.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leapq_gen_form.tStart = t;  // (not accounting for frame time here)
      leapq_gen_form.frameNStart = frameN;  // exact frame index
      
      leapq_gen_form.setAutoDraw(true);
    }
    
    
    // if leapq_gen_form is active this frame...
    if (leapq_gen_form.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_leapq_gen* updates
    if ((leapq_gen_form.formComplete()) && btn_leapq_gen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_leapq_gen.tStart = t;  // (not accounting for frame time here)
      btn_leapq_gen.frameNStart = frameN;  // exact frame index
      
      btn_leapq_gen.setAutoDraw(true);
    }
    
    
    // if btn_leapq_gen is active this frame...
    if (btn_leapq_gen.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_leapq_gen.status === PsychoJS.Status.STARTED) {
      // check whether btn_leapq_gen has been pressed
      if (btn_leapq_gen.isClicked) {
        if (!btn_leapq_gen.wasClicked) {
          // store time of first click
          btn_leapq_gen.timesOn.push(btn_leapq_gen.clock.getTime());
          // store time clicked until
          btn_leapq_gen.timesOff.push(btn_leapq_gen.clock.getTime());
        } else {
          // update time clicked until;
          btn_leapq_gen.timesOff[btn_leapq_gen.timesOff.length - 1] = btn_leapq_gen.clock.getTime();
        }
        if (!btn_leapq_gen.wasClicked) {
          // end routine when btn_leapq_gen is clicked
          continueRoutine = false;
          
        }
        // if btn_leapq_gen is still clicked next frame, it is not a new click
        btn_leapq_gen.wasClicked = true;
      } else {
        // if btn_leapq_gen is clicked next frame, it is a new click
        btn_leapq_gen.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_leapq_gen hasn't started / has finished
      btn_leapq_gen.clock.reset();
      // if btn_leapq_gen is clicked next frame, it is a new click
      btn_leapq_gen.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    leapq_genComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function leapq_genRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'leapq_gen' ---
    leapq_genComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('leapq_gen.stopped', globalClock.getTime());
    leapq_gen_form.addDataToExp(psychoJS.experiment, 'rows');
    psychoJS.experiment.addData('btn_leapq_gen.numClicks', btn_leapq_gen.numClicks);
    psychoJS.experiment.addData('btn_leapq_gen.timesOn', btn_leapq_gen.timesOn);
    psychoJS.experiment.addData('btn_leapq_gen.timesOff', btn_leapq_gen.timesOff);
    // the Routine "leapq_gen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var leapq_enMaxDurationReached;
var leapq_enMaxDuration;
var leapq_enComponents;
function leapq_enRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'leapq_en' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    leapq_enClock.reset();
    routineTimer.reset();
    leapq_enMaxDurationReached = false;
    // update component parameters for each repeat
    // reset btn_leapq_en to account for continued clicks & clear times on/off
    btn_leapq_en.reset()
    psychoJS.experiment.addData('leapq_en.started', globalClock.getTime());
    leapq_enMaxDuration = null
    // keep track of which components have finished
    leapq_enComponents = [];
    leapq_enComponents.push(leapq_en_form);
    leapq_enComponents.push(btn_leapq_en);
    
    leapq_enComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function leapq_enRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'leapq_en' ---
    // get current time
    t = leapq_enClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *leapq_en_form* updates
    if (t >= 0.0 && leapq_en_form.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leapq_en_form.tStart = t;  // (not accounting for frame time here)
      leapq_en_form.frameNStart = frameN;  // exact frame index
      
      leapq_en_form.setAutoDraw(true);
    }
    
    
    // if leapq_en_form is active this frame...
    if (leapq_en_form.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_leapq_en* updates
    if ((leapq_en_form.formComplete()) && btn_leapq_en.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_leapq_en.tStart = t;  // (not accounting for frame time here)
      btn_leapq_en.frameNStart = frameN;  // exact frame index
      
      btn_leapq_en.setAutoDraw(true);
    }
    
    
    // if btn_leapq_en is active this frame...
    if (btn_leapq_en.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_leapq_en.status === PsychoJS.Status.STARTED && t >= (btn_leapq_en.tStart + 1.0)) {
      // keep track of stop time/frame for later
      btn_leapq_en.tStop = t;  // not accounting for scr refresh
      btn_leapq_en.frameNStop = frameN;  // exact frame index
      // update status
      btn_leapq_en.status = PsychoJS.Status.FINISHED;
      btn_leapq_en.setAutoDraw(false);
    }
    
    if (btn_leapq_en.status === PsychoJS.Status.STARTED) {
      // check whether btn_leapq_en has been pressed
      if (btn_leapq_en.isClicked) {
        if (!btn_leapq_en.wasClicked) {
          // store time of first click
          btn_leapq_en.timesOn.push(btn_leapq_en.clock.getTime());
          // store time clicked until
          btn_leapq_en.timesOff.push(btn_leapq_en.clock.getTime());
        } else {
          // update time clicked until;
          btn_leapq_en.timesOff[btn_leapq_en.timesOff.length - 1] = btn_leapq_en.clock.getTime();
        }
        if (!btn_leapq_en.wasClicked) {
          // end routine when btn_leapq_en is clicked
          continueRoutine = false;
          
        }
        // if btn_leapq_en is still clicked next frame, it is not a new click
        btn_leapq_en.wasClicked = true;
      } else {
        // if btn_leapq_en is clicked next frame, it is a new click
        btn_leapq_en.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_leapq_en hasn't started / has finished
      btn_leapq_en.clock.reset();
      // if btn_leapq_en is clicked next frame, it is a new click
      btn_leapq_en.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    leapq_enComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function leapq_enRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'leapq_en' ---
    leapq_enComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('leapq_en.stopped', globalClock.getTime());
    leapq_en_form.addDataToExp(psychoJS.experiment, 'rows');
    psychoJS.experiment.addData('btn_leapq_en.numClicks', btn_leapq_en.numClicks);
    psychoJS.experiment.addData('btn_leapq_en.timesOn', btn_leapq_en.timesOn);
    psychoJS.experiment.addData('btn_leapq_en.timesOff', btn_leapq_en.timesOff);
    // the Routine "leapq_en" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var debriefMaxDurationReached;
var _key_debrief_allKeys;
var debriefMaxDuration;
var debriefComponents;
function debriefRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'debrief' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    debriefClock.reset();
    routineTimer.reset();
    debriefMaxDurationReached = false;
    // update component parameters for each repeat
    code_text.setText('Katılımcı kodunuz: ' + expInfo['participant']);
    key_debrief.keys = undefined;
    key_debrief.rt = undefined;
    _key_debrief_allKeys = [];
    psychoJS.experiment.nextEntry();
    const dp_filename = expInfo['participant'] + '_' + expInfo['date'] + '.json';
    const dp_data = JSON.stringify(psychoJS.experiment._trialsData);
    fetch('https://pipe.jspsych.org/api/data/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Accept: '*/*'},
      body: JSON.stringify({experimentID: 'b6GNel3tUICA', filename: dp_filename, data: dp_data})
    }).then(r => r.json()).then(d => console.log('DataPipe:', d)).catch(e => console.error('DataPipe error:', e));
    psychoJS.experiment.addData('debrief.started', globalClock.getTime());
    debriefMaxDuration = null
    // keep track of which components have finished
    debriefComponents = [];
    debriefComponents.push(debrief_text);
    debriefComponents.push(code_text);
    debriefComponents.push(debrief_end);
    debriefComponents.push(key_debrief);
    
    debriefComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function debriefRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'debrief' ---
    // get current time
    t = debriefClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debrief_text* updates
    if (t >= 0 && debrief_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debrief_text.tStart = t;  // (not accounting for frame time here)
      debrief_text.frameNStart = frameN;  // exact frame index
      
      debrief_text.setAutoDraw(true);
    }
    
    
    // if debrief_text is active this frame...
    if (debrief_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *code_text* updates
    if (t >= 0 && code_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      code_text.tStart = t;  // (not accounting for frame time here)
      code_text.frameNStart = frameN;  // exact frame index
      
      code_text.setAutoDraw(true);
    }
    
    
    // if code_text is active this frame...
    if (code_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *debrief_end* updates
    if (t >= 3 && debrief_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debrief_end.tStart = t;  // (not accounting for frame time here)
      debrief_end.frameNStart = frameN;  // exact frame index
      
      debrief_end.setAutoDraw(true);
    }
    
    
    // if debrief_end is active this frame...
    if (debrief_end.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_debrief* updates
    if (t >= 3 && key_debrief.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_debrief.tStart = t;  // (not accounting for frame time here)
      key_debrief.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_debrief.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_debrief.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_debrief.clearEvents(); });
    }
    
    // if key_debrief is active this frame...
    if (key_debrief.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_debrief.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_debrief_allKeys = _key_debrief_allKeys.concat(theseKeys);
      if (_key_debrief_allKeys.length > 0) {
        key_debrief.keys = _key_debrief_allKeys[_key_debrief_allKeys.length - 1].name;  // just the last key pressed
        key_debrief.rt = _key_debrief_allKeys[_key_debrief_allKeys.length - 1].rt;
        key_debrief.duration = _key_debrief_allKeys[_key_debrief_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    debriefComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function debriefRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'debrief' ---
    debriefComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('debrief.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_debrief.corr, level);
    }
    psychoJS.experiment.addData('key_debrief.keys', key_debrief.keys);
    if (typeof key_debrief.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_debrief.rt', key_debrief.rt);
        psychoJS.experiment.addData('key_debrief.duration', key_debrief.duration);
        routineTimer.reset();
        }
    
    key_debrief.stop();
    // the Routine "debrief" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
