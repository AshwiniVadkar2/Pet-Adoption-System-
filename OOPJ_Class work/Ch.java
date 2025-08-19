class Ch{
	public static void main(String[] args){
		String a=null;
		
		try{
			System.out.println(a.length());
		}catch(NullPointerException e){
			e.printStackTrace();
			System.out.println("A is null");
			
		}
	}
}