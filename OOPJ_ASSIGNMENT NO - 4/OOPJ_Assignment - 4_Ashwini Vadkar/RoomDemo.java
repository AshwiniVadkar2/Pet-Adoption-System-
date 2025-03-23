class Room{
    int height;
	int width;
	int breadth;
	Room(int height, int width, int breadth){
	    this.height = height;
		this.width = width;
		this.breadth = breadth;
	}
	double volume(){
		return height*width*breadth;
	}	
}
class RoomDemo{
    public static void main(String args[]){
	Room room1 = new Room(10,12,15);
	Room room2 = new Room(5,10,15);
	System.out.println("Volume of Room 1: " + room1.volume() + " cubic units");
	System.out.println("Volume of Room 2: " + room2.volume() + " cubic units");
	}
}	