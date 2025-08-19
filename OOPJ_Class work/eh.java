import java.io.*;
class eh{
	public static void main(String[] args){
		try{
			File f = new File("abcd.txt");
			FileReader fr = new FileReader(f);
		}catch(IOException e){
			e.printStackTrace();
		}
	}
}