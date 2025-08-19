interface Photosynthesis
{
	void absorbSunlight();
}

interface Respiration
{
	void releaseOxygen();
}

class Plant implements Photosynthesis,Respiration{
	private String plantName;
	Plant(String name){
		plantName=name;
	}
	
	String getPlantName(){
		return plantName;
	}
	
	@Override
	public void absorbSunlight(){
		System.out.println("Plant is absorbing sunlight for photosynthesis.");
	}
	
	@Override
	public void releaseOxygen(){
		System.out.println("Plant is releasing oxygen through respiration.");
	}
	
}

class PlantMain{
	public static void main(String[] args){
		Plant Mango=new Plant("Mango Tree");
		Plant Fern=new Plant("Fern");
	
		//mango
		System.out.println(Mango.getPlantName());
		Mango.absorbSunlight();
		Mango.releaseOxygen();
        
		//Fern
		System.out.println(Fern.getPlantName());
		Fern.absorbSunlight();
		Fern.releaseOxygen();
	}
	
} 