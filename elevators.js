{
    init: function(elevators, floors) {
        var elevator = elevators[0]; 

        elevator.on("idle", function() {
            elevator.goToFloor(0);
        });
        
        elevator.on("floor_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum);
        });

    },
    update: function(dt, elevators, floors) {}
}