import Image from "next/image";
import NavBar from "../../navbar/page";
import Link from "next/link";
import { getDictionary } from "./dictionaires";
 


export default async function Page() {

    return (
      <main>        
          <p> Dashboard  cart</p>   
          <LinkBack></LinkBack>     
      </main>
    )
  }



export function LinkBack(){
  return (   
    <Link href="/home"> Back to home</Link>
   ) 
}


