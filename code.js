$(document).ready(
    function(){
        //Events
        $("#calcBAC").click(BloodAlcohol)
        //Functions
        function BloodAlcohol(){
            var beers = parseInt($("#beerCount").val())
            var wines = parseInt($("#wineCount").val())
            var shots = parseInt($("#shotCount").val())
            var weight = parseInt($("#weightPounds").val())
            var hoursDrinking = parseInt($("#hoursDrinking").val())
            beers*=0.54
            wines*=0.6
            shots*=0.6
            hoursDrinking*=0.015
            var bloodAlcoholContent = (((beers + wines + shots)*7.5)/weight)-hoursDrinking
            $(".resultBAC").show();
            $("#BAC").text(bloodAlcoholContent.toFixed(3 ))
            if(bloodAlcoholContent >= 0.08){
                $(".illegal").show();
            }
        }
    }
)
