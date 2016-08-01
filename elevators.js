{
    init: function(elevators, floors) {
        var e1 = elevators[0];
        var e2 = elevators[1];
        var e3 = elevators[2];

/*        e1.on("idle", function() {
            e1.goToFloor(0);
        });

        e2.on("idle", function() {
            e2.goToFloor(0);
        });

        e3.on("idle", function() {
            e3.goToFloor(0);
        });
*/
        e1.on("floor_button_pressed", function(floorNum) {
            e1.goToFloor(floorNum);
        });

        e2.on("floor_button_pressed", function(floorNum) {
            e2.goToFloor(floorNum);
        });

        // e3.on("floor_button_pressed", function(floorNum) {
        //     e3.goToFloor(floorNum);
        // });
    },
    update: function(dt, elevators, floors) {}
}