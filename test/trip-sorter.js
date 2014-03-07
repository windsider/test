
// the function tripSorter takes tickets as object instances, puts them in array and sorts tickets according to number of stage of trip (stageOfTrip)
function tripSorter()  {
    // entering tickets
     
	//constructing the object of ticket 
    function ticket(stageOfTrip, pointOfDeparture, pointOfArrival, transport, guide)  {
        this.stageOfTrip  = stageOfTrip;
        this.pointOfDeparture  = pointOfDeparture;
        this.pointOfArrival  = pointOfArrival;
        this.transport  = transport;
        this.guide  = guide;
    }
    // array for entering available tickets 
    var tickets  = new Array();
    tickets[0]  = new ticket(5, "New York JFK", "Lima", "airplane", "from New York JFK, take flight GK22 to Lima. Gate 12. Seat 12A. Baggage will be automatically transferred from your last leg.");
    tickets[1]  = new ticket(4, "Stockholm", "New York JFK", "airplane", "from Stockholm, take flight SK22 to New York JFK. Gate 22. Seat 7B. Baggage will be automatically transferred from your last leg.");
    tickets[2]  = new ticket(3, "Gerona Airport", "Stockholm", "airplane", "from Gerona Airport, take flight SK455 to Stockholm. Gate 45B. Seat 3A. Baggage drop at ticket counter 344.");
    tickets[3]  = new ticket(2, "Barcelona", "Gerona Airport", "bus", "take the airport bus from Barcelona to Gerona Airport. No seat assignment.");
    tickets[4]  = new ticket(1, "Madrid", "Barcelona", "train", "take train 78A from Madrid to Barcelona. Seat 45B.");
    
	// sorting entered tickets
    
	//insert-sort algorithm 
    var i, j, t;
	for (i = 0; i < tickets.length; i++)  {
        t  = tickets[i];
        for (j = i - 1; j >= 0 && tickets[j].stageOfTrip > t.stageOfTrip; j--)
		tickets[j  + 1]  = tickets[j];
        tickets[j  + 1]  = t;
    }
    //displaying entered tickets with converting in JSON format
    for (i = 0; i < tickets.length; i++)  {
         console.log(JSON.stringify(tickets[i]));
    }
	return;
}
tripSorter();
